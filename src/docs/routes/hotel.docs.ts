/**
 * @swagger
 * /api/hotels:
 *   post:
 *     summary: Crear un nuevo hotel
 *     tags: [Hoteles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hotel'
 *     responses:
 *       201:
 *         description: Hotel creado exitosamente
 *       400:
 *         description: Error en los datos enviados
 *
 *   get:
 *     summary: Obtener todos los hoteles
 *     tags: [Hoteles]
 *     responses:
 *       200:
 *         description: Lista de hoteles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Hotel'
 *       500:
 *         description: Error del servidor
 *
 * /api/hotels/{id}:
 *   get:
 *     summary: Obtener un hotel por ID
 *     tags: [Hoteles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del hotel
 *     responses:
 *       200:
 *         description: Hotel encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hotel'
 *       404:
 *         description: Hotel no encontrado
 *       500:
 *         description: Error del servidor
 *
 *   put:
 *     summary: Actualizar un hotel por ID
 *     tags: [Hoteles]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del hotel
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hotel'
 *     responses:
 *       200:
 *         description: Hotel actualizado
 *       400:
 *         description: Error en los datos
 *       404:
 *         description: Hotel no encontrado
 */
