import { listProductsServices } from "../../services/products/listProducts.services";

export const listProductsControllers = async (req, res) => {
    try {
        const result = await listProductsServices();
        return res.status(200).json(result);
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    };
};