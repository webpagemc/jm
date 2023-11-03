//dependencias
import express from "express";
import cors from "cors";

//rutas
import products from "./router/products.js";
import carts from "./router/carts.js";

//configuraciones
import enviroment from "./config/config.js";
import connectDatabase from "./config/mongo.js";

//app initialization
const app = express();

app.use(express.json()); //poder utilizar json
app.use(express.urlencoded()); //aceptar formularios desde el frontend
app.use(cors()); //implementar cors

app.use("/products", products); //todas las rutas /products tendran los endpoints en el router de products
app.use("/carts", carts); //todas las rutas /carts tendran los endpoints en el router de carts

connectDatabase();

app.get("/", (res, req) => {
  req.send("Servidor conectado");
});

//app listen
app.listen(enviroment.PORT, () => {
  console.log("server listening on 8080");
});
