import { db } from "../database/database.connection.js";

async function getCities(){
    const cities = await db.query(`SELECT * FROM cities;`);

    const citiesToVisit = cities.rows.filter(c => c.name !== 'São Paulo');
    
    return citiesToVisit;
}

export default {getCities};