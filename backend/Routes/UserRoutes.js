import express from "express";
import asyncHandler from "express-async-handler";
import User from "../Models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import { protect } from "../Middleware/AuthMiddleware.js";

const userRouter = express.Router();

// LOGIN
userRouter.post(
    "/login",
    asyncHandler(async (req, res) => {
        const { email, password } = req.body;   // Take email and password in request client
        const user = await User.findOne({ email }); // info user on DB

        if (user && (await user.matchPassword(password))) {     // if password === pasword(database)
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
                createdAt: user.createdAt,
            });
        } else {
            res.status(401);
            throw new Error("Email hoặc mật khẩu không đúng");
        }
    })
);

// PROFILE
userRouter.get(
    "/profile",
    protect,
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id);

        if (user) {
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                createdAt: user.createdAt,
            });
        } else {
            res.status(404);
            throw new Error("Không tìm thấy người dùng");
        }
    })
);

export default userRouter;