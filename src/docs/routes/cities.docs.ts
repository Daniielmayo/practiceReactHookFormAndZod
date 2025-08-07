/**
 * @swagger
 * /api/cities:
 *   get:
 *     summary: Obtiene una lista de ciudades ordenadas alfabéticamente
 *     tags:
 *       - Cities
 *     responses:
 *       200:
 *         description: Lista de ciudades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/City'
 *       500:
 *         description: Error del servidor al obtener ciudades
 */
