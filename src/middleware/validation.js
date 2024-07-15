const isData = async (req, res, next) => {

    console.log("isData middleware hit and username:", req.body.username);
    try {
        if (!req.body.username) {
            res.status(422).json({message: "data is imcomplete"});
            return;
        }
        next();
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};

module.exports = {
    isData,
};