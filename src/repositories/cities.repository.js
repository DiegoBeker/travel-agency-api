import { db } from "../database/database.connection.js";

async function getCities(){
    const cities = await db.query(`SELECT * FROM cities;`);
    return cities.rows;
}

export default {getCities};