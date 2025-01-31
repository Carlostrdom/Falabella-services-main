import { Schema, model } from 'mongoose';

let collection = 'products'; 

let schema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true }, 
        price: { type: Number, required: true }, 
        category: { type: String, required: true }, 
        stock: { type: Number, required: true, default: 0 }, 
        image: { type: String, required: false }, 
        brand: { type: String, required: false }, 
        rating: { type: Number, default: 0 }, 
        userId: { type: Schema.Types.ObjectId, ref: 'users' } 
    },
    { timestamps: true }
);

let Product = model(collection, schema);

export default Product;