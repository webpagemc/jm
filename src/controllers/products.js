
const productsControllers = {

    getProducts:(req, res)=>{

        res.send("Obtener Productos");
    
    },

    getOneProduct:(req, res)=>{

        const id =  req.params.id

        res.send("Obtener un producto")

    }

}


export default productsControllers;