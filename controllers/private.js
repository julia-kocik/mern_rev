
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

exports.postSession = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "You've posted sessions data",
    });
};

exports.getPrivateData = (req, res, next) => {
    const user = req.user;
    res.status(200).json({
        success: true,
        data: "You got access to private data",
        user: req.user
    });
};
