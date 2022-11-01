import { createCategoryServices } from "../../services/category/createCategory.services";

export const createCategoryControllers = async (req, res) => {
    try {
        const { name } = req.body;
        const result = await createCategoryServices(name);
        return res.status(201).json(result);
    }
    catch (err) {
        return res.status(400).json({ message: err.message });
    };
};