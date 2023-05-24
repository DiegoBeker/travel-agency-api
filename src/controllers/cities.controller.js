import citiesRepository from "../repositories/cities.repository.js";

export async function getCities(req, res){

    try {
        const cities = await citiesRepository.getCities();
        res.send(cities);
    } catch (error) {
        res.status(500).send(error.message);
    }
}