import { Request, Response } from 'express';
import axios from 'axios';

// Cache para almacenar las ciudades
let citiesCache: Array<{ id: number; name: string }> = [];
let lastFetchTime: number = 0;
const CACHE_DURATION = 3600000; // 1 hora en milisegundos

// Función para obtener las ciudades de la API o de la caché
async function fetchCities(): Promise<Array<{ id: number; name: string }>> {
  const now = Date.now();
  
  // Si la caché está vacía o ha expirado, obtener los datos de la API
  if (citiesCache.length === 0 || now - lastFetchTime > CACHE_DURATION) {
    try {
      const response = await axios.get('https://api-colombia.com/api/v1/City?sortDirection=asc');
      citiesCache = response.data
        .map((city: any) => ({
          id: city.id,
          name: city.name,
        }))
        .sort((a: any, b: any) => a.name.localeCompare(b.name));
      lastFetchTime = now;
    } catch (error) {
      console.error('Error fetching cities from API:', error);
      throw new Error('Error al obtener las ciudades desde la API');
    }
  }
  
  return citiesCache;
}

export const getCities = async (req: Request, res: Response) => {
  try {
    const searchTerm = (req.query.search as string)?.toLowerCase() || '';
    const page = parseInt(req.query.page as string) || 1;
    const limit = 20; // Número fijo de resultados por página
    
    // Obtener las ciudades (de la caché o de la API)
    const allCities = await fetchCities();
    
    // Función para normalizar texto (quitar acentos y convertir a minúsculas)
    const normalizeText = (text: string) => 
      text.normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase();
    
    // Filtrar ciudades si hay un término de búsqueda
    const filteredCities = searchTerm
      ? allCities.filter(city => 
          normalizeText(city.name).includes(normalizeText(searchTerm))
        )
      : allCities;
    
    // Calcular la paginación
    const startIndex = (page - 1) * limit;
    const endIndex = Math.min(startIndex + limit, filteredCities.length);
    const paginatedCities = filteredCities.slice(0, endIndex);
    
    // Datos de paginación para la respuesta
    const pagination = {
      currentPage: page,
      totalPages: Math.ceil(filteredCities.length / limit),
      totalItems: filteredCities.length,
      itemsPerPage: limit,
      hasNextPage: endIndex < filteredCities.length
    };

    res.status(200).json({
      data: paginatedCities,
      pagination
    });
    
  } catch (error) {
    console.error('Error in getCities:', error);
    res.status(500).json({ 
      error: 'Error al obtener las ciudades',
      details: error instanceof Error ? error.message : 'Error desconocido'
    });
  }
};
