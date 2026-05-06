
const User = require("../models/User");

/**
 * GET ALL USERS
 */
const getUsers = async (req, res, next) => {
    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {
        next(error);
    }
};

/**
 * GET SINGLE USER
 */
const getUserById = async (req, res, next) => {
    try {

        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(user);

    } catch (error) {
        next(error);
    }
};

/**
 * CREATE USER
 */
const createUser = async (req, res, next) => {
    try {

        /**
         * Destructuring request body
         */
        const { name, email, password } = req.body;

        // Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Check duplicate email
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        // Create user
        const user = await User.create({
            name,
            email,
            password
        });

        res.status(201).json(user);

    } catch (error) {
        next(error);
    }
};

/**
 * UPDATE USER
 */
const updateUser = async (req, res, next) => {
    try {

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(updatedUser);

    } catch (error) {
        next(error);
    }
};

/**
 * DELETE USER
 */
const deleteUser = async (req, res, next) => {
    try {

        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User deleted successfully"
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};