import database from "../../database";

export const deleteCategoryServices = async (id) => {
    try {
        const query = await database.query(`DELETE FROM categories WHERE id = $1;`,[id]);
        if(query.rows.length === 0){
            return { message: "Product not found"};
        }
    }
    catch (err) {
        throw new Error(err);
    };
};