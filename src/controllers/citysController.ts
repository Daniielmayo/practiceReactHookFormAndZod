import { Request, Response } from 'express';
import axios from 'axios';

export const getCities = async (_req: Request, res: Response) => {
  try {
    const response = await axios.get('https://api-colombia.com/api/v1/City?sortDirection=asc');
    const rawCities = response.data;

    const cities = rawCities
      .map((city: any) => ({
        id: city.id,
        name: city.name,
      }))
      .sort((a: any, b: any) => a.name.localeCompare(b.name)); // Ordenar alfabéticamente

    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ciudades desde la API.' });
  }
};
