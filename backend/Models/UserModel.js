import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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

// Login
userSchema.methods.matchPassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;