import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import hotelRoutes from './routes/hotelRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from '../src/docs/swaggerConfig';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;
const MONGO_URI = process.env.db_cnn as string;

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Failed to connect to MongoDB', err));

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use('/api', hotelRoutes);

// Ruta para la documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
