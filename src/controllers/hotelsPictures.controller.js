import hotelsPicturesRepository from "../repositories/hotelsPictures.repository.js";

export async function createHotelPicture(req, res){
    const {id} = req.params;

    try {
        await hotelsPicturesRepository.postHotelPicture(req.body, id);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message);
    }
}