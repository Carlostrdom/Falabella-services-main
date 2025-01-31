import Product from '../../models/Productslist.js';
let createProduct = async (req, res, next) => {
    try {
        let newproducts = req.body;
        let productsnew = await Product.create(newproducts);
        return res.status(201).json({
            response: productsnew
        });
    } catch (error) {
        next(error);
    }
};

export default createProduct;