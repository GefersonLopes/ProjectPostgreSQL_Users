import { profilerCategoryServices } from "../../services/category/profilerCategory.services";

export const profilerCategoryControllers = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await profilerCategoryServices(id);
        return res.status(200).json(result);
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    };
};