import productModel from "../models/products.model.js";
import productServices from "../services/products.js";

const productsControllers = {

  getProducts: async (req, res) => {
    try {
      const allProducts = await productServices.getAll()
      res.status(200).json(allProducts);

    } catch (error) { res.status(404).send("ERROR") }
  },

  getOneProduct: async (req, res) => {
    try {

      const id = req.params.id;
      const prod = await productServices.getOne(id)
      res.status(200).send(prod);

    } catch (error) { res.status(404).send("ERROR") }
  },

  addProduct: async (req, res) => {
    try {

      const { body } = req;
      const newProd = await productModel.create(body);
      res.status(200).json({ producto: newProd, message: "producto agregado" });

    } catch (error) { res.status(404).send("ERROR") }
  },

  deleteProduct: async (req, res) => {
    try {
      const id = req.params.id;
      await productModel.findOneAndDelete({ _id: id });

      res.status(200).send({ message: "producto eliminado" });

    } catch (error) { res.status(404).send("ERROR") }
  },

  updateProduct: async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;

      const newPro = await productModel.findOneAndUpdate({ _id: id }, body);

      res
      .status(200)
      .send({ message: "producto actualizado", product: newPro });

    } catch (error) { res.status(404).send("ERROR") };
  },
};

export default productsControllers;
