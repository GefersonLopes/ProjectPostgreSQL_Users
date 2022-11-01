import database from "../../database";

export const profilerCategoryServices = async (id) => {
    try {
        const query = await database.query(`
            SELECT
                *
            FROM
                categories
            WHERE
                id = $1;
        `,[id]);
        if(query.rows.length === 0) {
            return { message: 'Category not found' };
        }
        return query.rows[0];
    }
    catch (err) {
        throw new Error(err);
    };
};