exports.getPrivateData = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "You got access to the private data in this route",
    });
};

exports.getSessions = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "You got access to sessions data",
    });
};


exports.getSession = (req, res, next) => {
    const id = req.params.id
    res.status(200).json({
        success: true,
        data: "You've posted sessions data",
        id
    });
};

exports.postSession = (req, res, next) => {
    res.status(200).json({
        success: true,
        data: "You've posted sessions data",
    });
};