# Hotel API

Una API simple para gestionar hoteles, construida con Node.js, Express, TypeScript y MongoDB.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:

- Node.js
- npm (viene con Node.js)
- MongoDB

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO>

2. Navega al directorio del proyecto:
 ```bash 
 cd nombre-del-proyecto
```
3. Instala las dependencias del proyecto:
 ```bash 
npm install
```
4. Instala las dependencias de desarrollo si deseas ejecutar el proyecto en modo desarrollo:
 ```bash
npm install --save-dev
```

### Configuración

1. Asegúrate de que MongoDB esté en ejecución en tu sistema. Puedes modificar la URI de conexión a MongoDB en el archivo app.ts si es necesario.


2. Para ejecutar el proyecto en modo desarrollo, utiliza el siguiente comando:

 ```bash
npm run dev
```

3. Para construir el proyecto para producción, utiliza:
 ```bash
npm run build
```

4. Para iniciar el servidor en modo producción, utiliza:
 ```bash
npm start
```

### 📘 Acceso a la documentación de Swagger
Una vez que el servidor esté en ejecución, puedes acceder a la documentación de Swagger para ver y probar los endpoints de la API. Abre tu navegador y navega a la siguiente URL en caso de no ser el mismo local host cambiar al que se esta empleando:

http://localhost:3000/api-docs
