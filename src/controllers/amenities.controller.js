import amenitiesRepository from "../repositories/amenities.repository.js";

export async function createAmenity(req, res){
    try {
        await amenitiesRepository.postAmenitie(req.body);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}