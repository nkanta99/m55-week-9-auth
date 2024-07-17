const {Router} = require("express");
const userRouter = Router();

const {register, login, getAllUsers} = require("./controllers");
const {validateRegister, validateLogin} = require("../middleware/validation");

userRouter.post("/register", validateRegister, register);
userRouter.post("/login", validateLogin, login);

userRouter.get("/getAllUsers", getAllUsers);
module.exports = userRouter;