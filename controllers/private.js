const User = require('../models/User');

exports.getSessions = async (req, res, next) => {
    const userToFetch = req.user;
    try {
        const user = await User.findOne({ _id: userToFetch.id })
        if(!user.sessions) {
            res.status(200).json({
                success: true,
                data: "You have no saved sessions yet",
            }); 
        } else {
            res.status(200).json({
                success: true,
                data: user.sessions,
            }); 
        }
    } catch (error) {
        next(error);
    }
   
};



//posted data updated, need to check and clean messages
exports.postSession = async (req, res, next) => {

    const { name, date, counter } = req.body;
    const user = req.user;
    try {
        const userToUpdate = await User.findOne({ _id: user.id })
        if(!userToUpdate.sessions) {
            userToUpdate.sessions = [];
            await userToUpdate.save();
            userToUpdate.sessions.push({name, date, counter})
            await userToUpdate.save();
            res.status(200).json({
                success: true,
                data: "You've posted data",
            }); 
            return
        } else {
            userToUpdate.sessions.push({name, date, counter})
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

// one session, to update or delete
// exports.getSession = (req, res, next) => {
    
//     const id = req.params.id
//     res.status(200).json({
//         success: true,
//         data: "You've got session data",
//         user: req.user,
//         id
//     });
// };

//general, to update or delete
exports.getPrivateData = (req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        data: "You got access to private data",
        user: req.user
    });
};
