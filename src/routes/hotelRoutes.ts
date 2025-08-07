import express from 'express';
import { createHotel, getHotels, getHotelById, updateHotel } from '../controllers/hotelController';
import { getCities } from '../controllers/citysController';

const router = express.Router();

router.post('/hotels', createHotel);
router.get('/hotels', getHotels);
router.get('/hotels/:id', getHotelById);
router.put('/hotels/:id', updateHotel);
router.get('/cities', getCities); 

export default router;
