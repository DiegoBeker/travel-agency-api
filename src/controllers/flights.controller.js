import flightsRepository from "../repositories/flights.repository.js";

export async function createFlight(req, res) {

    try {
        await flightsRepository.postFlight(req.body);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getFlightsToCityId(req, res) {
    const { city_id } = req.params;
    
    try {
        const flights = await flightsRepository.findFlightsbyCityId(city_id);
        res.send(flights);
    } catch (error) {
        res.status(500).send(error.message);
    }
}