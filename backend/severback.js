const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.send("Backend is working 🚀");
});

require("dotenv").config();
const connectDB = require("./config/db");
connectDB();
// Import routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});