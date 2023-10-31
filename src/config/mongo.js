import mongoose from "mongoose";
import enviroment from "./config.js";

const connectDatabase = async() => {

    try {
        
        await mongoose.connect(enviroment.URL_DB)
        console.log("Conexion Exitosa"); 

    } catch (error) { throw new Error(error) }

}

export default connectDatabase;

    //Hacer conexion a la base de datos con promesas
    /* 
    mongoose.connect(enviroment.URL_DB)
    .then( r => console.log("Conexion Exitosa") )
    .catch( error => new Error(error))
    */