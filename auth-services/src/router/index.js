import{Router} from 'express'
import usersRouter from './users.js'
import routerAuth from './auth.js';
const router = Router()



router.use('/users', usersRouter);
router.use('/auth', routerAuth);

export default router