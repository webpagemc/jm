import { Router } from "express";
import cartsControllers from "../controllers/carts.js";

const router = Router();

router.get("/", cartsControllers.getCarts )

router.get("/:id", cartsControllers.getIdAndName )

export default router