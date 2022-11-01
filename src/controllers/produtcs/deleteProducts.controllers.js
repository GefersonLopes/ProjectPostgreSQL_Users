import { deleteProductsServices } from "../../services/products/deleteProducts.services";

export const deleteProductsControllers = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteProductsServices(id);
        return res.status(204).json(result);
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    };
};