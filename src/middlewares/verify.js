import database from "../database";

export const verify = async (req, res, next) => {
    const { name } = req.body;
    console.log(name);
    const query = await database.query(`SELECT * FROM categories WHERE name = $1`,[name]);
    console.log(query.rows);
    if(query.rows.length > 0) {
        return { message: "error"}
    }
    next();
};