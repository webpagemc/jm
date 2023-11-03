import productModel from "../models/products.model.js";

const productServices = {

    getAll:async() => {

        const allElements = await productModel.find();
        return allElements;
    },

    getOne:async(id) => {
        const product = await productModel.findOne({_id:id});
        return product;
    },
    createOne:() => {},
    deleteOne:() => {},
    updateOne:() => {},


}

export default productServices;