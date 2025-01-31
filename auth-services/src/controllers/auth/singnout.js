import User from "../../models/User.js";

const signOut = async (req, res, next) => {
    try {
        await User.findOneAndUpdate({ email: req.body.email },
            { online: false })

        return res.status(200).json({
            success: false,
            message: "User sigout in disconnected",
           
        });
    } catch (error) {
        next(error);

    }
}

export default signOut