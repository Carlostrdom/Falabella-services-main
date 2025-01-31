import Product from '../../models/Productslist.js';

const deletedProduct = async (req, res, next) => {
    try {
        let delProduct = await Product.deleteOne({_id: req.params._id});

        
            return res.status(200).json({
                response: delProduct,
            });
       
    } catch (error) {
        next(error);
    }
};

export { deletedProduct };