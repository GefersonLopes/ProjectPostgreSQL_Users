import database from "../../database";

export const listProductsServices = async () => {
    try {
        const query = await database.query(`SELECT * FROM products;`);
        if(query.rows.length === 0) {
            return { message: "Not exists products" }
        };
        const product = query.rows;
        return product;
    }
    catch (err) {
        throw new Error(err);
    };
};