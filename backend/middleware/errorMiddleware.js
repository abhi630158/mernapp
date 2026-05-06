
/**
 * Centralized Error Middleware
 * Handles all backend errors in one place.
 */

const errorHandler = (err, req, res, next) => {

    console.error(err.stack);

    res.status(500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
};

module.exports = errorHandler;