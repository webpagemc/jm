
const cartsControllers = {


    getCarts:(req, res)=>{

        res.send("Todos los carritos")
    
    },

    getIdAndName:(req, res)=>{

        const { id } = req.params
    
        res.send(`Carrito con id ${id}`)
    
    }

}

export default cartsControllers;