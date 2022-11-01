import database from "../../database";

export const profileProductsServices = async (id) => {
    try {
        const query = await database.query(`SELECT * FROM products WHERE id = $1;`,[id]);
        if(query.rows.length === 0) {
            return { message: "Product not found" }
        };
        const product = query.rows[0];
        return product;
    }
    catch (err) {
        throw new Error(err);
    };
};