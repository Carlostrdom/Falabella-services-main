import User from "../src/models/User.js";
import passport from "passport";
import { Strategy as googleStrategy } from "passport-google-oauth20";

export default passport.use(new googleStrategy({
    clientID: process.env.GOOGLE_CLIEN_ID,
    clientSecret: process.env.GOOGLE_CLIEN_SECRET,
    callbackURL: process.env.GOOGLE_URI_BACK
},
    async (accessToken, refreshToken, profile, done) => { //buscar el usuario en la base de datos

        try {
            let user = await User.findOne({ email: profile.emails[0].value });
            if (!user) {
                user = new User({
                    name: profile.Name,
                    email: profile.emails[0].value,
                    photo: profile.photos[0].value,
                    role: 1,
                    password: profile.id,
                    online: false
                })
                await user.save();

            } return done(null, user);
        } catch (error) {
            return done(error, null);
        }

    }
)
)
