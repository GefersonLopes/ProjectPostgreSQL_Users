import { Router } from "express";
import { verify } from "../middlewares/verify";


/* Import's Products Controllers */
import { createProductsControllers } from "../controllers/produtcs/createProducts.controllers";
import { deleteProductsControllers } from "../controllers/produtcs/deleteProducts.controllers";
import { joinProductsControllers } from "../controllers/produtcs/joinProducts.controllers";
import { listProductsControllers } from "../controllers/produtcs/listProducts.controllers";
import { profilerProductsControllers } from "../controllers/produtcs/profilerProducts.controllers";
import { updateProductsControllers } from "../controllers/produtcs/updateProducts.controllers";

export const RouteProducts = Router();

RouteProducts.post("", createProductsControllers);
RouteProducts.get("", listProductsControllers);
RouteProducts.get("/:id", profilerProductsControllers);
RouteProducts.get("/category/:id", joinProductsControllers);
RouteProducts.patch("/:id", updateProductsControllers);
RouteProducts.delete("/:id", deleteProductsControllers);