const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("../backend/routes/auth");

const productRoutes= require("../backend/routes/productRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

app.use("/api",productRoutes);

// Database
require("./config/db");

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});