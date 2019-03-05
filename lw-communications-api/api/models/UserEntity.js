const mongoose = require('mongoose');

const UserEntity = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, //special datatype by mongoose
    email: {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: { type: String, required: true },
    type: { type: String, required: true },
    country: { type: String, required: true },
    verificationCode: { type: String },
    isActive: { type: Boolean, default: false }
});


module.exports = mongoose.model('User', UserEntity);