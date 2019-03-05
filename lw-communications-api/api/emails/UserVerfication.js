const nodemailer = require('nodemailer');

exports.userVarificationEmail = (email, verificationCode) => {
    var toUser = email;
    var code = verificationCode;
    nodemailer.createTestAccount((err, account) => {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'no-reply@leasewallet.com', // generated ethereal user
                pass: 'noreply@123' // generated ethereal password
            }
        });

        let mailOptions = {
            from: 'no-reply@leasewallet.com', // sender address
            to: toUser, // list of receivers
            subject: 'User Verification - LW Communications', // Subject line
            //text: plain text body,
            html: `
              <body>
              <br><br>
                <h1>Verify yourself!</h1>
                <p>Here is your verification code " ${code} " use this code to verify yourself.</p>
                <p>NOTE - Code is case sensitive, DO NOT share it with anyone.<p>
              </body>
        `
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.status(500).json({
                    error: err
                });
            }
            console.log('verification email sent...');
        });
    });
}