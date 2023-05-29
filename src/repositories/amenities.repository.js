import { db } from "../database/database.connection.js";

async function postAmenitie(body) {
    const { amenity } = body;

    await db.query(`INSERT INTO amenities (amenity) VALUES ($1)`, [amenity]);
}

export default { postAmenitie };