import database from "../../database";

export const updateCategoryServices = async (name, id) => {
    try {
        const query = await database.query(`
            UPDATE
                categories
            SET
                name = $1
            WHERE
                id = $2
            RETURNING *;
        `, [name, id]);
        if (query.rows.length === 0) {
            return { message: "Categories not found" };
        }
        const category = query.rows[0]
        return {
            message: "Category updated",
            category
        };
    }
    catch (err) {
        throw new Error(err);
    };
};