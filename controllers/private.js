const User = require('../models/User');

exports.getSessions = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "You got access to true sessions data",
        user: req.user
    });
};


exports.getSession = (req, res, next) => {
    const id = req.params.id
    res.status(200).json({
        success: true,
        data: "You've got session data",
        user: req.user,
        id
    });
};

//posted data updated, need to check and clean messages
exports.postSession = async (req, res, next) => {

    const { name, startDate, endDate, duration } = req.body;
    const user = req.user;
    try {
        const userToUpdate = await User.findOne({ _id: user.id })
        if(!userToUpdate.sessions) {
            userToUpdate.sessions = [];
            await userToUpdate.save();
            res.status(200).json({
                success: true,
                data: "You've posted data",
            }); 
        } else {
            userToUpdate.sessions.push({name, startDate, endDate, duration})
            await userToUpdate.save();
            res.status(200).json({
                success: true,
                data: "You've posted sessions data",
            }); 
        }
    } catch (error) {
        next(error);
    }
};

exports.getPrivateData = (req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        data: "You got access to private data",
        user: req.user
    });
};
