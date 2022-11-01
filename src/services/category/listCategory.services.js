import database from "../../database";

export const listCategoryServices = async () => {
    try {
        const query = await database.query(`SELECT * FROM categories;`);
        const category = query.rows;
        return category;
    }
    catch (err) {
        throw new Error(err);
    };
};