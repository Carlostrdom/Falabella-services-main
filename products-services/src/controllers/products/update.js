import Product from '../../models/Productslist.js';

const updatedOneProduct = async (req, res, next) => {
    try {

        const updatedProduct = await Product.findByIdAndUpdate(
            req.body._id,
            req.body,
            { new: true }
        );

        if (updatedProduct) {
            return res.status(200).json({
                response: updatedProduct,
            });
        } else {
            next(error)

        }
    } catch (error) {
        next(error);
    }
};




export { updatedOneProduct };
