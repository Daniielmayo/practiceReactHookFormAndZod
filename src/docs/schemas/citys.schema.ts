/**
 * @swagger
 * components:
 *   schemas:
 *     City:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           example: 11001
 *         name:
 *           type: string
 *           example: Bogotá
 * 
 *     PaginatedCityResponse:
 *       type: object
 *       properties:
 *         data:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/City'
 *         pagination:
 *           type: object
 *           properties:
 *             currentPage:
 *               type: integer
 *               example: 1
 *             totalPages:
 *               type: integer
 *               example: 5
 *             totalItems:
 *               type: integer
 *               example: 100
 *             itemsPerPage:
 *               type: integer
 *               example: 20
 *             hasNextPage:
 *               type: boolean
 *               example: true
 * 
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           example: "Error message"
 *         details:
 *           type: string
 *           example: "Additional error details"
 */
