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

- Node.js (v14 o superior)
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

El playground de GraphQL estará disponible en `http://localhost:3000/graphql`

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

## Consideraciones para Producción

Para el despliegue en producción:

1. Establece `synchronize: false` en la configuración de TypeORM
2. Utiliza variables de entorno apropiadas
3. Implementa autenticación y autorización adecuadas
4. Configura un sistema de logging apropiado
5. Configura CORS adecuadamente
