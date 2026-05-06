/**
 * controllers/userController.js
 * Uses async/await (Day 3)
 * Works with MongoDB (Day 4)
 */

const User = require("../models/User");

// GET all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching users" });
    }
};

// POST create user
const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ message: "Name and Email required" });
        }

        const user = await User.create({ name, email });
        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating user" });
    }
};

module.exports = { getUsers, createUser };