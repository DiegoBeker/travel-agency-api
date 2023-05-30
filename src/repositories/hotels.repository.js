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

async function findHotelById(id){
    const hotel = await db.query(`
    SELECT
        hotels.name,
        hotels.description,
        hotels.price_per_day,
        (
            SELECT array_agg(amenities.amenity)
            FROM hotels_amenities
            JOIN amenities ON amenities.id = hotels_amenities.amenity_id
            WHERE hotels_amenities.hotel_id = hotels.id
        ) AS amenities,
        (
            SELECT array_agg(hotels_pictures.url)
            FROM hotels_pictures
            WHERE hotels_pictures.hotel_id = hotels.id
        ) AS pictures
    FROM
        hotels
    WHERE
        hotels.id = $1;
    `,[id]);
    return hotel.rows[0];
}

export default { postHotel, findHotelsByCity, findHotelById };