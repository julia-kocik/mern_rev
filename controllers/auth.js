const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require('../utils/sendEmail');

exports.register = async (req, res, next) => {

    const { username, email, password } = req.body;

    try {
        const user = await User.create({
            username,
            email,
            password,
        });

        sendToken(user, 201, res)

    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        })
    }
   
}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(400).json({ success: false, error: "Please provide email and password"})
    }

    try {
        const user = await User.findOne({ email }).select("+password");

        if(!user) {
            res.status(404).json({ success: false, error: "Invalid credentials"})
        }

        const isMatch = await user.matchPasswords(password);

        if(!isMatch) {
            res.status(404).json({ success: false, error: "Invalid credentials"})
        }

        sendToken(user, 201, res)
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

exports.forgotpassword = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({email});
        console.log(user)

        if(!user) {
            return next(new ErrorResponse("Email could not be sent", 404))
        }

        const resetToken = user.getResetPasswordToken();
        await user.save();

        const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
        const message = `
            <h1>You have requested a password reset<h1>
            <p>Please go to this link to reset your password</p>
            <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `

        try {
            await sendEmail({
                to: user.email,
                subject: "Password Reset Request",
                text: message
            });

            res.status(200).json({ success: true, data: "email sent"})
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();

            return next(new ErrorResponse("Email could not be sent", 500))
        }
    } catch (error) {
        next(error)
    }
}

exports.resetpassword = (req, res, next) => {
    res.send("Reset password Route");
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token })
}