const User = require('../models/UserEntity');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const randomString = require('random-string');
const UserVerification = require('../emails/UserVerfication');

exports.signup = (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length > 0) {
                return res.status(409).json({
                    message: "email already exists!"
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        res.status(500).json({
                            error: err,
                            message: "error at signup.find.bcrypt.hash()"
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(), //automatic & unique ID
                            email: req.body.email,
                            password: hash,
                            type: req.body.type,
                            country: req.body.country,
                            verificationCode: randomString({ length: 4 }),
                            isActive: false
                        });
                        user.save().then(result => {
                            console.log(result);
                            UserVerification.userVarificationEmail(result.email, result.verificationCode);
                            res.status(201).json({
                                message: "user created successfully!"
                            });
                        }).catch(err => {
                            res.status(500).json({
                                error: err,
                                message: "exception at signup.find.save()"
                            });
                        });
                    }
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "exception at signup.find()"
            });
        });
}

exports.verifyAndActivate = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.verificationCode == req.body.verificationCode) {
                User.update({ email: req.body.email }, { $set: { isActive: true } })
                    .exec()
                    .then(result => {
                        console.log(result);
                        res.status(200).json({
                            message: "user Activated!"
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(500).json({
                            error: err,
                            message: "exception at verifyAndActivate.findOne.update()"
                        });
                    });
            } else {
                res.status(500).json({
                    error: "you have enterd invalid code"
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err,
                message: "exception at verifyAndActivate.findOne()"
            });
        });
}

exports.login = (req, res, next) => {
    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length < 1 && user.isActive == false) {
                res.status(401).json({
                    message: 'Login failed ! Account does not exists or Account not activated'
                });
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        error: err,
                        message: 'Login failed ! Incorrect password'
                    });
                }
                if (result) {
                    const token = jwt.sign({
                        email: user[0].email,
                        userId: user[0]._id
                    },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "24h"
                        }
                    );
                    return res.status(200).json({
                        message: 'Login success !!!',
                        token: token,
                        email: user[0].email,
                        type:  user[0].type,
                        country: user[0].country
                    });
                }
                res.status(401).json({
                    message: 'Login failed ! Please check Email or Password'
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err,
                message: "exception at find()"
            });
        });
}

exports.deleteUser = (req, res, next) => {
    User.update({ _id: req.params.id }, { $set: { isActive: false } })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "user de-activated!"
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "exception at deleteUser.update()"
            });
        });
}

exports.getAllUsers = (req, res, next) => {
    User.find()
        .exec()
        .then(result => {
            res.status(200).json({
                users: result.map(user => {
                    return {
                        _id: user._id,
                        email: user.email,
                        type: user.type,
                        country: user.country
                    }
                })
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                message: "exception at getAllUsers.find()"
            });
        });
}

exports.updateUser = (req, res, next) => {
    var updatedUserObject = { email: req.body.email, type: req.body.type, country: req.body.country }
    User.findByIdAndUpdate(req.params.id, updatedUserObject)
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: "user updated!"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err,
                message: "exception at updateUser.findByIdAndUpdate()"
            });
        });
}

exports.resetPassword = (req, res, next) => {
    var oldPassword = req.body.password;
    User.findOne({ email: req.body.email })
        .exec()
        .then(user => {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        error: err,
                        message: 'Reset failed ! Incorrect password'
                    });
                }
                if (result) {
                    if (req.body.newPassword == req.body.confirmPassword) {
                        bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                            if (err) {
                                res.status(500).json({
                                    error: err,
                                    message: 'error at Reset.find.bcrypt.hash()'
                                });
                            }
                            oldPassword = hash;                                                        
                            User.findOneAndUpdate({ email: req.body.email }, { $set: { password: oldPassword } })
                            .exec()
                            .then(result => {
                                return res.status(200).json({
                                    message: 'Reset password successfuly done'
                                });
                            })
                                .catch(err => {
                                    console.log(err);
                                    res.status(500).json({
                                        error: err,
                                        message: 'exception at resetPassword.findByIdAndUpdate()'
                                    });
                                });
                        })
                    }
                    else {
                        return res.status(401).json({
                            message: 'Reset password failed'
                        });
                    }
                }
                else {
                    return res.status(401).json({
                        message: 'Old password does not match'
                    });
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err,
                message: 'exception at resetPassword.findOne()'
            });
        });
}      

