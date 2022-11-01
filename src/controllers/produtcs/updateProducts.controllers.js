import { updateProductsServices } from "../../services/products/updateProducts.services";

export const updateProductsControllers = async (req, res) => {
    try {
        const { name, price, category_id } = req.body;
        const { id } = req.params;
        const result = await updateProductsServices(id, name, price, category_id);
        return res.status(200).json(result);
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    };
};