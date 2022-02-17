import mongoose from "mongoose";

// connect database
const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true, //  công cụ Giám sát và Khám phá Máy chủ
            useNewUrlParser: true, // Trình phân tích cú pháp chuỗi URL
        });

        console.log(`MongoDB Connected`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDatabase;