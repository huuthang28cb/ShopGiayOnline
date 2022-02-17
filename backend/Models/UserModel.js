import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name: {     // Tên người dùng
            type: String,
            required: true,
        },
        email: {    // Email người dùng
            type: String,
            required: true,
            unique: true,
        },
        password: {     // Mật khẩu
            type: String,
            required: true,
        },
        isAdmin: {      // Quyền người dùng (Admin, Khách hàng, Nhân viên,..)
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,   // Thời gian tạo
    }
);

const User = mongoose.model("User", userSchema);

export default User;