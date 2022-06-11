const nodemailer = require('nodemailer');

const sendEmail = (options) => {
    console.log(process.env.EMAIL_SERVER)

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER,
        secure: false,
        port: 587,
        auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: options.to,
        subject: options.subject,
        html: options.text,
    };

    transporter.sendMail(mailOptions, function(err, info) {
        if(err) {
            console.log(err)
        } else {
            console.log(info)
        }
    });
};

module.exports = sendEmail;