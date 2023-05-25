import { db } from "../database/database.connection.js";

async function postFlight(body) {
    const { departure_time, arrival_time, price, from_city_id, to_city_id, airline_id } = body;

    await db.query(`
        INSERT INTO flights 
        (departure_time, arrival_time, price, from_city_id, to_city_id, airline_id)
        VALUES
        ($1,$2,$3,$4,$5,$6);
    `, [departure_time, arrival_time, price, from_city_id, to_city_id, airline_id]);
}

async function findFlightsbyCityId(city_id) {
    const flights = await db.query(`
        SELECT 
            flights.id,
            flights.departure_time,
            flights.price, 
            airlines.name AS airline,
            cities_from.name AS from_city,
            cities_to.name AS to_city
        FROM flights
        JOIN airlines ON airlines.id = flights.airline_id
        JOIN cities AS cities_from ON cities_from.id = flights.from_city_id
        JOIN cities AS cities_to ON cities_to.id = flights.to_city_id
        WHERE flights.to_city_id = $1    
    `, [city_id]);
    return flights.rows;
}

async function findFlightById(id) {
    const flight = await db.query(`
        SELECT 
            flights.id,
            flights.departure_time,
            flights.arrival_time,
            flights.price, 
            airlines.name AS airline,
            cities_from.name AS from_city,
            cities_to.name AS to_city
        FROM flights
        JOIN airlines ON airlines.id = flights.airline_id
        JOIN cities AS cities_from ON cities_from.id = flights.from_city_id
        JOIN cities AS cities_to ON cities_to.id = flights.to_city_id
        WHERE flights.id = $1
    `, [id]);

    return flight.rows[0];
}

export default { postFlight, findFlightsbyCityId, findFlightById };