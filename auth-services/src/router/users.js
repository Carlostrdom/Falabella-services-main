import { Router } from "express";
import { allUser, idAllUsers } from "../controllers/users/read.js";
import createUser from "../controllers/users/create.js";
import updateUser from "../controllers/users/update.js";
import deleteUser from "../controllers/users/delete.js";
import  createHash  from "../.././middlewares/createHash.js";
import passport from "../.././middlewares/passport.js";
import accountExists from "../.././middlewares/accountExists.js";
import generateToken from "../.././middlewares/generateToken.js";
import validorUser from "../.././middlewares/validator.js";
import validatorId from "../.././middlewares/validatorId.js";
import user_schema from "../../schemas/users/create.js";
import user_schema_update from "../../schemas/users/update.js";
import user_schema_delete from "../../schemas/users/delete.js";
const router = Router();

router.get('/allusers',passport.authenticate('jwt',{session:false}),allUser)
router.get('/user/:_id',passport.authenticate('jwt',{session:false}),idAllUsers)
router.post('/register',validorUser(user_schema),accountExists,createHash,generateToken,createUser)
router.put("/update",passport.authenticate('jwt',{session:false}),validorUser(user_schema_update), updateUser);
router.delete("/delete/:_id",passport.authenticate('jwt',{session:false}),validatorId(user_schema_delete), deleteUser);

export default router