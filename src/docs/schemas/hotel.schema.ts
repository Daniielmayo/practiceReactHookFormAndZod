/**
 * @swagger
 * components:
 *   schemas:
 *     Hotel:
 *       type: object
 *       required:
 *         - name
 *         - city
 *         - rating
 *         - amenities
 *         - description
 *         - pricePerNight
 *       properties:
 *         name:
 *           type: string
 *           example: Hotel Sunrise
 *         city:
 *           type: object
 *           required:
 *             - id
 *             - name
 *           properties:
 *             id:
 *               type: string
 *               example: "11001"
 *             name:
 *               type: string
 *               example: Bogotá
 *         rating:
 *           type: integer
 *           minimum: 1
 *           maximum: 5
 *           example: 4
 *         hasWifi:
 *           type: boolean
 *           example: true
 *         amenities:
 *           type: array
 *           items:
 *             type: string
 *           example: [ "Piscina", "Gimnasio", "Restaurante" ]
 *         description:
 *           type: string
 *           example: Hermoso hotel con vista a la ciudad
 *         pricePerNight:
 *           type: number
 *           example: 120.00
 */
