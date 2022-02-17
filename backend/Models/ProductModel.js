import mongoose from "mongoose";


// review Schema Model
const reviewSchema = mongoose.Schema(
    {
        name: { type: String, required: true }, // Tên người dùng
        rating: { type: Number, required: true }, // Đánh giá, xếp hạng
        comment: { type: String, required: true }, // Bình luận
        user: {     // Người dùng
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",    // Tham chiếu đến User Model
        },
    },
    {
        timestamps: true,
    }
);

// product Schema Model
const productSchema = mongoose.Schema(
    {
        name: {     // Tên sản phẩm
            type: String,
            required: true,
        },
        image: {    // Ảnh sản phẩm
            type: String,
        },
        description: {      // Mô tả sản phẩm
            type: String,
            required: true,
        },
        reviews: [reviewSchema],    // Đánh giá, bình luận sản phẩm
        rating: {   // Đánh giá
            type: Number,
            required: true,
            default: 0,
        },
        numReviews: {   // Số lượng đánh giá
            type: Number,
            required: true,
            default: 0,
        },
        price: {    // Giá
            type: Number,
            required: true,
            default: 0,
        },
        countInStock: {     // Tình trạng sản phẩm
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("Product", productSchema);

export default Product;