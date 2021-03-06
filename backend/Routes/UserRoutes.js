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

// REGISTER
userRouter.post(
    "/",
    asyncHandler(async (req, res) => {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email }); // user exist

        if (userExists) {   // if user exist
            res.status(400);
            throw new Error("Người dùng đã tồn tại");
        }

        // else: create new user
        const user = await User.create({
            name,
            email,
            password,
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            });
        } else {
            res.status(400);
            throw new Error("Thông tin người dùng không hợp lệ");
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

// UPDATE PROFILE
userRouter.put(
    "/profile",
    protect,
    asyncHandler(async (req, res) => {
        const user = await User.findById(req.user._id);

        if (user) {
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = req.body.password;
            }
            const updatedUser = await user.save();
            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                isAdmin: updatedUser.isAdmin,
                createdAt: updatedUser.createdAt,
                token: generateToken(updatedUser._id),
            });
        } else {
            res.status(404);
            throw new Error("Không tìm thấy người dùng");
        }
    })
);

export default userRouter;