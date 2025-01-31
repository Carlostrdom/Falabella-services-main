import User from "../src/models/User.js";

const accountExists = async (req, res, next) => {
    try {
        const account = await User.findOne({ email: req.body.email });
        if (account) {
            return res.status(400).json({
                success: false,
                code: 400,
                message: "El correo electrónico ya está en uso.",

            });
        }
        next();
    } catch (error) {
        next(error);
    }
};

export default accountExists;