import express from "express";
import { config } from "dotenv";

config();

const { PORT }  = process.env

const app = express();

app.listen(PORT , ()=>{ console.log("server listening on 8080") })
