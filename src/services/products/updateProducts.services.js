import database from "../../database";

export const updateProductsServices = async (id, name, price, category) => {
    try {
        const seachProduct = await database.query(`SELECT * FROM products WHERE id = $1`, [id]);
        const procuct = seachProduct.rows[0];
        const query = await database.query(`
            UPDATE
                products
            SET
                name = $1, price = $2, category_id = $3
            WHERE
                id = $4
            RETURNING *;
        `,[name ? name : procuct.name , price ? price : procuct.price, category ? category : procuct.category_id, id]);
        if(query.rows.length === 0) {
            return { message: "Product not found" }
        };
        const product = query.rows[0];
        return {
            message: "Product updated",
            product,
        };
    }
    catch (err) {
        throw new Error(err);
    };
};