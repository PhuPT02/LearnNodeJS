module.exports = (req, res, next) => {
    res.onError = (error) => {
        const body = { success: false, message: error.message };
        res.status(error.status || 500).send(body);
    }
    next();
}