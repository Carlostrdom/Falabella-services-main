import Product from '../../models/Productslist.js';



const allProducts = async (req, res, next) => {
    try {
        const namequery = req.query.search ? { name: { $regex: req.query.search, $options: 'i' } } : {};
        const productscollection = await Product.find(namequery)
           
        return res.status(200).json({
            response: productscollection
        });
    } catch (error) {
        next(error);
    }
};

let ProductsById = async (req, res, next) => {
    try {
        const productsset = req.params.id;


        const productsOne = await Product.findById(productsset);

        return res.status(200).json({
            response: productsOne
        });

    } catch (error) {

        next(error)

    }
}

let ProductsByIduser= async (req, res, next) => {
    try {
        const user = req.params.id;


        const productsUse = await Product.find({ user: user }).populate('users', 'userId firstName lastName email photoUrl online').exec();

        return res.status(200).json({
            response: productsUse
        });

    } catch (error) {

        next(error)

    }
}

export { allProducts, ProductsById,ProductsByIduser };
