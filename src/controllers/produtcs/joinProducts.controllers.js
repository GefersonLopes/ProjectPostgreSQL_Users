import { joinProductsServices } from "../../services/products/joinProducts.services";

export const joinProductsControllers = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await joinProductsServices(id);
        return res.status(200).json(result);
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    };
};