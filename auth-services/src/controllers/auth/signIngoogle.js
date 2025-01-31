import User from "../../models/User.js";

const signinGoogle = async (req, res, next) => {
    try {
        await User.findOneAndUpdate({ email: req.body.email },
            { online: true })

       
        return res.status(200).json({
            success: true,
            message: "User signed in successfully",
           
            token: req.token
        });
    } catch (error) {
        next(error);

    }
}

export default signinGoogle