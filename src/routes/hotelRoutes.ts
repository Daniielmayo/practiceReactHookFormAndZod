import express from 'express';
import { createHotel, getHotels, getHotelById, updateHotel } from '../controllers/hotelController';

const router = express.Router();

router.post('/hotels', createHotel);
router.get('/hotels', getHotels);
router.get('/hotels/:id', getHotelById);
router.put('/hotels/:id', updateHotel);

export default router;
