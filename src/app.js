import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import { RouteCategories } from "./routes/categories.routes";
import { RouteProducts } from "./routes/products.routes";

const app = express();

app.use(express.json());

app.use("/categories", RouteCategories);
app.use("/products", RouteProducts);
app.get("", (req, res) => res.send("Hello"))

export default app.listen(3333, () => {
  console.log("Server running");
  startDatabase();
});
