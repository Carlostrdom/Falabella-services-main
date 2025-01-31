# Falabella-services-main

## Descripción
Este proyecto es una aplicación Node.js que utiliza Express como framework principal. Se encarga de manejar autenticación mediante Passport y JWT, junto con MongoDB como base de datos.

## Requisitos
Antes de ejecutar el proyecto, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión recomendada: 16 o superior)
- [MongoDB](https://www.mongodb.com/) si deseas ejecutarlo localmente

## Instalación
Clona el repositorio y ejecuta los siguientes comandos:
```sh
npm install
```

## Scripts disponibles
Puedes ejecutar los siguientes comandos en la terminal:

- **Iniciar el servidor en producción**
  ```sh
  npm start
  ```
- **Iniciar el servidor en modo desarrollo (con recarga automática)**
  ```sh
  npm run dev
  ```
- **Ejecutar el script de carga de usuarios**
  ```sh
  npm run dataUsers
  ```

## Dependencias principales
- `express`: Framework para construir APIs y manejar rutas.
- `mongoose`: ORM para trabajar con MongoDB.
- `jsonwebtoken`: Para la autenticación basada en tokens JWT.
- `passport`, `passport-jwt`, `passport-google-oauth`: Para la autenticación de usuarios.
- `bcryptjs`: Para el hash de contraseñas.
- `dotenv`: Para la gestión de variables de entorno.
- `joi`, `joi-oid`: Para la validación de datos.
- `cors`: Para habilitar el intercambio de recursos entre diferentes orígenes.
- `morgan`: Para el registro de peticiones HTTP.

## Dependencias de desarrollo
- `nodemon`: Para recargar automáticamente el servidor en modo desarrollo.
- `@types/*`: Definiciones de tipos para TypeScript.

## Configuración de Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/falabella
JWT_SECRET=tu_secreto_jwt
GOOGLE_CLIENT_ID=tu_google_client_id
GOOGLE_CLIENT_SECRET=tu_google_client_secret
```

## Uso
1. Inicia el servidor con `npm run dev`.
2. Accede a `http://localhost:5000/` en tu navegador o usa herramientas como Postman para probar las rutas.

## Autor
- Nombre: *[Tu Nombre]*
- Email: *[Tu Correo]*

## Licencia
Este proyecto está bajo la licencia ISC.

