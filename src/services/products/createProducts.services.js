import database from "../../database";

export const createProductsServices = async (name, price, category_id) => {
    try {
        const query = await database.query(`
            INSERT INTO 
                products(name, price, category_id)
            VALUES 
                ($1, $2, $3)
            RETURNING *;
        `,[name, price, category_id]);
        const product = query.rows[0];

        return {
            message: "Created product",
            product,
        };
    }
    catch (err) {
        throw new Error(err);
    };
};