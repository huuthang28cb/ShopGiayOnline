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

// Register
// Không cần original đối tượng. Bạn có thể truy cập nó trong prehook thông qua this.
userSchema.pre("save", async function (next) { // pre: test trước khi lưu vào db
    if (!this.isModified("password")) {  // Kiểm tra xem một số thuộc tính có bị sửa đổi hay không?
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});


const User = mongoose.model("User", userSchema);

export default User;