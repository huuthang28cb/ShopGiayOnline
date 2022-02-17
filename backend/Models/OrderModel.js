import mongoose from "mongoose";

// order Schema Model
const orderSchema = mongoose.Schema(
    {
        user: {     // Người dùng
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        orderItems: [   // Sản phẩm trong hóa đơn
            {
                name: { type: String, required: true }, // Tên sản phẩm
                qty: { type: Number, required: true },  // Số lượng
                image: { type: String, required: true },    // Hình ảnh
                price: { type: Number, required: true },    // Giá
                product: {  // Sản phẩm
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "Product", // Tham chiếu đến Product Model
                },
            },
        ],
        shippingAddress: {  // Thông tin vận chuyển
            address: { type: String, required: true },  // Địa chỉ
            city: { type: String, required: true },     // Thành phố
            postalCode: { type: String, required: true },   // Mã zip
            country: { type: String, required: true },  // Quốc gia
        },
        paymentMethod: {    // Phương thức thanh toán
            type: String,
            required: true,
            default: "Paypal",  // Mặc định là Paypal
        },
        paymentResult: {    // Kết quả thanh toán
            id: { type: String },
            status: { type: String },
            update_time: { type: String },
            email_address: { type: String },
        },
        taxPrice: { // Tiền thuế
            type: Number,
            required: true,
            default: 0.0,
        },
        shippingPrice: {    // Phí vận chuyển
            type: Number,
            required: true,
            default: 0.0,
        },
        totalPrice: {   // Tổng tiền
            type: Number,
            required: true,
            default: 0.0,
        },
        isPaid: {   // Thanh toán hoặc chưa thanh toán
            type: Boolean,
            required: true,
            default: false,
        },
        paidAt: {   // Ngày thanh toán
            type: Date,
        },
        isDelivered: {     // Tình trạng giao hàng
            type: Boolean,
            required: true,
            default: false,
        },
        deliveredAt: {  // Ngày giao hàng
            type: Date,
        },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;