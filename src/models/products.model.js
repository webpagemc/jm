import mongoose from "mongoose";

const productSchema = new mongoose.Schema(

    {
        name:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:false
        },
        code:{
            type:String,
            required:true
        },
        stock:{
            type:String,
            required:true
        }
    },
    {
        timestamps:true,
        versionKey:false,
        strict:true
    }

)

const productModel = mongoose.model("Products",productSchema);

export default productModel;