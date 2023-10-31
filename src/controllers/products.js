import productModel from "../models/products.model.js";

const productsControllers = {

    getProducts: async(req, res)=>{

        try {

            const allProducts = await productModel.find();
            res.status(200).json(allProducts);
            
        } catch (error) {

            res.status(404).send("ERROR");
            
        }
    
    },

    getOneProduct:(req, res)=>{

        const id =  req.params.id

        res.send("Obtener un producto")

    },

    addProduct:(req, res)=>{

        const { body } = req;
    
        res.send(`<h1>${body.nombre}</h1> <h2>${body.precio}</h2>`)
    
    }

}

export default productsControllers;