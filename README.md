<p align="center">
  <a href="https://nodejs.org/" target="blank"><img src="https://nodejs.org/static/images/logo.svg" width="80" alt="Node.js Logo" /></a>
  &nbsp;&nbsp;
  <a href="https://graphql.org/" target="blank"><img src="https://graphql.org/img/logo.svg" width="60" alt="GraphQL Logo" /></a>
  &nbsp;&nbsp;
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="60" alt="Nest Logo" /></a>
  &nbsp;&nbsp;
  <a href="https://www.postgresql.org/" target="blank"><img src="https://www.postgresql.org/media/img/about/press/elephant.png" width="60" alt="PostgreSQL Logo" /></a>
</p>

# API TodoList con NestJS, GraphQL y PostgreSQL

#### por Oliverio Petrecca

Esta es una API TodoList construida con NestJS, GraphQL y PostgreSQL. Proporciona una API CRUD completa para gestionar tareas.

## Aplicacion deplegada productiva:

- [Ticmas To-Do-List](https://fe-to-do-list-dun.vercel.app/)
- [Backend](https://be-to-do-list-production.up.railway.app/)

## Repositorios Relacionados

- [Frontend](https://github.com/oliveralbo/fe-to-do-list) - Aplicación frontend de TodoList
- [Backend](https://github.com/oliveralbo/be-to-do-list) - API backend de TodoList (este repositorio)

## Características

- API GraphQL con Apollo Server
- Base de datos PostgreSQL con TypeORM
- IDs de tareas basados en UUID
- Operaciones CRUD completas para tareas
- Validación de entrada
- Soporte para TypeScript

## Requisitos Previos

- Node.js (v18 o superior)
- PostgreSQL 14.18
- npm o yarn

## Configuración de la Base de Datos

1. Asegúrate de que PostgreSQL esté instalado y en ejecución:

   ```bash
   sudo systemctl status postgresql
   ```

2. Crea la base de datos y el usuario:

   ```bash
   sudo -u postgres psql -c "CREATE DATABASE todolist;"
   sudo -u postgres psql -c "CREATE USER todolist_user WITH PASSWORD 'todolist_password';"
   sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE todolist TO todolist_user;"
   ```

3. Crea un archivo `.env` en el directorio raíz con el siguiente contenido:

   ```
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=todolist_user
   DB_PASSWORD=todolist_password
   DB_NAME=todolist
   ```

4. Crea un archivo `.env.production` en el directorio raíz con el siguiente contenido:
   ```
   DATABASE_URL=postgresql://postgres:yCXvXoWtEshKyUoEgiHJiENLtASGTmfu@postgres.railway.internal:5432/railway
   ```

## Configuración de la Aplicación

1. Clona el repositorio
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia la aplicación:
   ```bash
   npm run start:dev
   ```

El playground de GraphQL estará disponible en `http://localhost:3000/graphql` o `https://be-to-do-list-production.up.railway.app/graphql` (En produccion estar seguro de de tener "/graphql" en la url de PlayGround)

## Documentación de la API

Para ver la documentación completa de las queries y mutations disponibles, visita el playground de GraphQL en `http://localhost:3000/graphql` cuando la aplicación esté en ejecución.

## Modelo de Tarea

La entidad Task tiene los siguientes campos:

- `id`: UUID (generado automáticamente)
- `title`: String (requerido)
- `description`: String (opcional)
- `completed`: Boolean (por defecto false)
- `createdAt`: DateTime (establecido automáticamente)
- `updatedAt`: DateTime (actualizado automáticamente)

## Desarrollo

- La aplicación utiliza TypeORM para operaciones de base de datos
- El esquema GraphQL se genera automáticamente
- La validación de entrada se maneja con class-validator
- Se utilizan UUIDs para todos los IDs de tareas
- El esquema de la base de datos se sincroniza automáticamente en desarrollo

## Comentarios

- Tanto el Frontend como el Backend están preparados para trabajo en equipo, con Husky configurado en el pre-commit para ejecutar el linter, formatear el código y correr los tests. Además, se definieron reglas y se sugieren extensiones en .vscode para facilitar el desarrollo.

- El proyecto incluye una configuración inicial para pruebas e2e con supertest, provista por defecto en NestJS. Se mantiene una prueba básica para validar que el servidor responde correctamente. La estructura del backend está preparada para permitir escalar en cobertura de tests si el equipo lo considera necesario a futuro.
