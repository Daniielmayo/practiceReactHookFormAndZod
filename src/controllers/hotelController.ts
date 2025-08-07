import { Request, Response } from 'express';
import Hotel from '../models/Hotels';

/**
 * Crea un nuevo hotel
 */
export const createHotel = async (req: Request, res: Response) => {
    try {
        const {
            name,
            city,
            rating,
            hasWifi,
            amenities,
            description,
            pricePerNight,
        } = req.body;

        // Validación básica opcional (aunque ya la maneja mongoose)
        if (
            !name || !city || !rating || !amenities ||
            !description || pricePerNight === undefined
        ) {
            return res.status(400).json({ message: 'Faltan campos requeridos' });
        }

        const hotel = new Hotel({
            name,
            city,
            rating,
            hasWifi: hasWifi ?? false,
            amenities,
            description,
            pricePerNight,
        });

        await hotel.save();
        res.status(201).json(hotel);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el hotel', error });
    }
};

/**
 * Obtiene todos los hoteles
 */
export const getHotels = async (req: Request, res: Response) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los hoteles', error });
    }
};

/**
 * Obtiene un hotel por ID
 */
export const getHotelById = async (req: Request, res: Response) => {
    try {
        const hotel = await Hotel.findById(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel no encontrado' });
        }
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar el hotel', error });
    }
};

/**
 * Actualiza un hotel por ID
 */
export const updateHotel = async (req: Request, res: Response) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedHotel) {
            return res.status(404).json({ message: 'Hotel no encontrado' });
        }

        res.status(200).json(updatedHotel);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el hotel', error });
    }
};
