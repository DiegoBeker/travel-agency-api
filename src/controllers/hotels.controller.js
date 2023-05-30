import hotelsRepository from "../repositories/hotels.repository.js";

export async function createHotel(req, res) {
    try {
        await hotelsRepository.postHotel(req.body);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getHotelsByCity(req, res) {
    const { city } = req.params;
    try {
        const hotels = await hotelsRepository.findHotelsByCity(city);
        res.send(hotels);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getHotelById(req, res) {
    const { id } = req.params;

    try {
        const hotel = await hotelsRepository.findHotelById(id);
        res.send(hotel);
    } catch (error) {
        res.status(500).send(error.message);
    }
}