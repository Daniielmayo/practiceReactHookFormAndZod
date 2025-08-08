/**
 * @swagger
 * /api/cities:
 *   get:
 *     summary: Obtiene una lista paginada de ciudades con opción de búsqueda
 *     description: |
 *       Retorna una lista de ciudades con paginación. 
 *       Por defecto devuelve las primeras 20 ciudades ordenadas alfabéticamente.
 *     tags:
 *       - Cities
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Término de búsqueda para filtrar ciudades por nombre
 *         example: bogota
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Número de página para la paginación
 *         example: 1
 *     responses:
 *       200:
 *         description: Lista paginada de ciudades
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PaginatedCityResponse'
 *       400:
 *         description: Parámetros de consulta inválidos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       500:
 *         description: Error del servidor al obtener las ciudades
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
