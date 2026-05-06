/**
 * server.js
 * Entry point of backend (Day 1–4 integrated)
 * - Express setup
 * - Middleware
 * - MongoDB connection
 * - Routes
 */

const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load env variables

const connectDB = require("./config/db");

const app = express();

// ===== Connect Database =====
connectDB();

// ===== Middleware =====
app.use(cors());
app.use(express.json()); // Required to read JSON body

// ===== Test Route =====
app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

// ===== Routes =====
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// ===== Server =====
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});