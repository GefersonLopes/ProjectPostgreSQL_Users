import { updateCategoryServices } from "../../services/category/updateCategory.services";

export const updateCategoryControllers = async (req, res) => {
    try {
        const { name } = req.body;
        const { id }= req.params;
        const result = await updateCategoryServices(name, id);
        return res.status(200).json(result);
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    };
};