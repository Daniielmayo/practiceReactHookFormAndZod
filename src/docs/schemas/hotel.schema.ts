/**
 * @swagger
 * components:
 *   schemas:
 *     Hotel:
 *       type: object
 *       required:
 *         - name
 *         - location
 *         - rating
 *         - amenities
 *         - description
 *         - pricePerNight
 *       properties:
 *         name:
 *           type: string
 *           example: Hotel Sunrise
 *         location:
 *           type: string
 *           example: Bogotá, Colombia
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
