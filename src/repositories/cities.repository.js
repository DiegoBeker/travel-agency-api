import { db } from "../database/database.connection.js";

export async function getCities(){
    const cities = await db.query(`SELECT * FROM cities;`);
    return cities.rows;
}

export default {getCities};