import { Router } from "express";
import { allProducts, ProductsById,ProductsByIduser} from "../controllers/products/read.js";
import  createProduct from "../controllers/products/create.js";
import {updatedOneProduct} from "../controllers/products/update.js";
import {deletedProduct} from "../controllers/products/delete.js";

let router = Router();


router.get('/all', allProducts);
router.get('/id/:id', ProductsById);
router.get('/products/:_id', ProductsByIduser);
router.post('/create',createProduct);
router.put('/update',updatedOneProduct );
router.delete('/delete/:_id',deletedProduct);

export default router;