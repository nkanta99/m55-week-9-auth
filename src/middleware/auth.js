const bcrypt = require("bcrypt");
const User = require("../users/models");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

// This, with the + sign, will do the same as parseInt
// const saltRounds = +process.env.SALT_ROUNDS;

const hashPass = async (req, res, next) => {
    try {
        console.log("plaintextpassword before hash: ", req.body.password);
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        console.log("hashedpassword: ", hashedPassword);

        req.body.password = hashedPassword;

        next();
    } catch (error) {
        res.status(500).json({message: error.message, error});
    }
};

const comparePass = async (req, res, next) => {
    try {

         const user = await User.findOne({where: {username: req.body.username}});

         req.user = user;

        next();
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
}

module.exports = {
    hashPass,
    comparePass,
};