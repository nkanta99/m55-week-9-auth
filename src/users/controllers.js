const User = require("./model");

const register = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({message: "success", user});
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};

const login = async (req, res) => {
    try {
        res.status(201).json({message: "success", username: req.user.username});
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({});

        res.status(200).json({message: "success", users});
    } catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};

module.exports = {
    register,
    login,
    getAllUsers,
};