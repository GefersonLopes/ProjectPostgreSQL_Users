import { createProductsServices } from "../../services/products/createProducts.services";

export const createProductsControllers = async (req, res) => {
    try {
        const { name, price, category_id } = req.body;
        const result = await createProductsServices(name, price, category_id);
        return res.status(201).json(result);
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    };
};