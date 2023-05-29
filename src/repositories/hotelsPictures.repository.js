import { db } from "../database/database.connection.js";

async function postHotelPicture(body, hotelId) {
    const { url } = body;
    await db.query(`
            INSERT INTO hotels_pictures (url, hotel_id)
            VAlUES ($1, $2)
        `, [url, hotelId]);
}

export default { postHotelPicture };