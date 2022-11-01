import { deleteCategoryServices } from "../../services/category/deleteCategory.services";

export const deleteCategoryControllers = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteCategoryServices(id);
        return res.status(204).json(result);
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    };
};