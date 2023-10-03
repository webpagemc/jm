import express from "express";
import products from "./router/products.js";
import enviroment from "./config/config.js";
import cors from "cors"

//app initialization
const app = express();

app.use(express.json()) //poder utilizar json
app.use(express.urlencoded()) //aceptar formularios desde el frontend
app.use(cors({
    origin:"https://www.carrefour.com.ar/",
}))

app.use("/products",products)

//app listen
app.listen(enviroment.PORT , ()=>{ console.log("server listening on 8080") })
