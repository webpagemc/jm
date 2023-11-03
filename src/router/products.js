import { Router } from "express";
import productsControllers from "../controllers/products.js";

const products = Router();

products.get("/", productsControllers.getProducts);
products.get("/:id", productsControllers.getOneProduct);
products.post("/", productsControllers.addProduct);
products.delete("/:id", productsControllers.deleteProduct);
products.put("/:id", productsControllers.updateProduct);

export default products;
