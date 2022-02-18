import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../Models/ProductModel.js";

const productRoute = express.Router();

// get all product
productRoute.get(
    "/",
    asyncHandler(async (req, res) => {
        const products = await Product.find({});
        res.status(200).json(products);
    })
);

// get single product
productRoute.get(
    "/:id",
    asyncHandler(async (req, res) => {

        const product = await Product.findById(req.params.id);
        if (product) {
            res.status(200).json(product)
        } else {

            res.status(500)
            throw new Error("Không tìm thấy sản phẩm theo id")
        }

    })
)


export default productRoute;