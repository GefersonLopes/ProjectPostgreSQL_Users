import { profileProductsServices } from "../../services/products/profilerProducts.services";

export const profilerProductsControllers = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await profileProductsServices(id);
        return res.status(200).json(result);
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    };
};