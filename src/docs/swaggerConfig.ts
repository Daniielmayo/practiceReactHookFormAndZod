import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Hotel API',
            version: '1.0.0',
            description: 'API para la gestión de hoteles',
        },
    },
    apis: [
        './src/docs/routes/*.ts',   // Documentación de endpoints
        './src/docs/schemas/*.ts',  // Documentación de modelos
    ],
};

const swaggerSpecs = swaggerJSDoc(options);
export default swaggerSpecs;
