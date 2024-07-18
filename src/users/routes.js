const {Router} = require("express");
const userRouter = Router();

const {register, login, getAllUsers} = require("./controllers");
const {validateRegister, validateLogin} = require("../middleware/validation");

const {hashPass, comparePass} = require("../middleware/auth");

userRouter.post("/register", hashPass, register);
userRouter.post("/login",comparePass, login);

userRouter.get("/getAllUsers", getAllUsers);
module.exports = userRouter;