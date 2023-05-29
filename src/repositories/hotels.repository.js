import { db } from "../database/database.connection.js";

async function postHotel(body) {
    const { name, description, price_per_day, main_picture, city_id, pictures, amenities } = body;

    const result = await db.query(`
        INSERT INTO hotels
        (name, description, price_per_day, main_picture, city_id)
        VALUES
        ($1,$2,$3,$4,$5)
        RETURNING id;
    `, [name, description, price_per_day, main_picture, city_id])

    const hotelId = result.rows[0].id;

    amenities.forEach(async amenity => {
        await db.query(`
            INSERT INTO hotels_amenities (amenity_id, hotel_id)
            VAlUES ($1, $2)
        `, [amenity, hotelId]);
    });

    pictures.forEach(async picture => {
        await db.query(`
            INSERT INTO hotels_pictures (url, hotel_id)
            VAlUES ($1, $2)
        `, [picture, hotelId]);
    });
}

async function findHotelsByCity(city){
    const hotels = await db.query(`
        SELECT hotels.id, hotels.name, hotels.main_picture, hotels.price_per_day
        FROM hotels
        WHERE hotels.city_id = (
            SELECT id FROM cities WHERE name=$1
        );
    `,[city]);
    return hotels.rows;
}

export default { postHotel, findHotelsByCity };