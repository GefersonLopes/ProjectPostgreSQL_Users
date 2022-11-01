import { listCategoryServices } from "../../services/category/listCategory.services";

export const listCategoryControllers = async (req, res) => {
    try {
        const result = await listCategoryServices();
        return res.status(200).json(result);
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    };
};