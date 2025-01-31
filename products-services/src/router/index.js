import { Router } from "express";
import productsRouter from "./products.js";

const router = Router();

router.use('/productlist',productsRouter);

export default router;