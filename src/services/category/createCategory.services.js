import database from "../../database";

export const createCategoryServices = async (name) => {
    try {
        const query = await database.query(`
            INSERT INTO 
                categories(name)
            VALUES
                ($1)
            RETURNING *;
        `,[name]);
        const category = query.rows[0];

        return {
            message: "Category Created",
            category
        };
    }
    catch (err) {
        throw new Error(err);
    };
};