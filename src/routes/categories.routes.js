import { Router } from "express";
import { verify } from "jsonwebtoken";
import { createCategoryControllers } from "../controllers/category/createCategory.controllers";
import { deleteCategoryControllers } from "../controllers/category/deleteCategory.controllers";
import { listCategoryControllers } from "../controllers/category/listCategory.controllers";
import { profilerCategoryControllers } from "../controllers/category/profilerCategory.controllers";
import { updateCategoryControllers } from "../controllers/category/updateCategory.controllers";

export const RouteCategories = Router();

RouteCategories.post("", verify, createCategoryControllers);
RouteCategories.get("", listCategoryControllers);
RouteCategories.get("/:id", profilerCategoryControllers);
RouteCategories.patch("/:id", updateCategoryControllers);
RouteCategories.delete("/:id", deleteCategoryControllers);