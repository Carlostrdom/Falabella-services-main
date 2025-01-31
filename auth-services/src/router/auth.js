import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import signOut from "../controllers/auth/singnout.js";
import passport from "../.././middlewares/passport.js";
import accountNotExist from "../.././middlewares/accountNotExist.js";
import isValidadPassword from "../.././middlewares/isValidadPassword.js";
import generateToken from "../.././middlewares/generateToken.js";
import validator from "../.././middlewares/validator.js";
import user_schema_signin from "../../schemas/auth/auth.js";
import passportGoogle from "../.././middlewares/passportGoogle.js";
import { recorToken } from "../controllers/users/read.js";
//import signinGoogle from "../controllers/auth/signinGoogle.js";

const routerAuth = Router();

routerAuth.post("/signIn", validator(user_schema_signin),accountNotExist, isValidadPassword, generateToken, signIn);

routerAuth.post("/signOut", passport.authenticate('jwt', { session: false }),signOut);
routerAuth.get("/token", passport.authenticate('jwt', { session: false }), recorToken);


routerAuth.get(
    '/signIn/google',
    passportGoogle.authenticate('google', { session: false, scope: ['profile', 'email'] })
)
//routerAuth.get('/signInGoogle/callback', passportGoogle.authenticate('google', { session: false, failureRedirect: '/login' }), generateToken,signinGoogle);

export default routerAuth