import User from "../../models/User.js";
const updateUser = async (req, res, next) => {
    try {
        let user = req.body;
        
        let falaUser = await User.updateOne({ email: user.email },user

        );
        return res.status(200).json({
            response: falaUser
        });
    } catch (error) {
        next(error);
    }
};


export  default updateUser 