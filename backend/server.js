import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";

dotenv.config();
const app = express();

// connect database
connectDatabase();

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);


// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running... at port ${PORT}`));