import database from "../../database";

export const joinProductsServices = async (id) => {
    try {
        const query = await database.query(`
            SELECT
                products.name,
                products.price,
                categories.name category
            FROM
                products
            JOIN
                categories ON categories.id = products.category_id
            WHERE categories.id = $1;
        `,[id]);
        if(query.rows.length === 0) {
            return { message: "Product not found" }
        };
        const product = query.rows;
        return product;
    }
    catch (err) {
        throw new Error(err);
    };
};