# API REST - Gestión Académica

API REST desarrollada con **NestJS, TypeScript y MySQL** para administrar la información de docentes y asignaturas de una institución educativa.

## Descripción del proyecto

Este proyecto permite gestionar información académica mediante servicios web REST. La API facilita el registro y la consulta de docentes y asignaturas, utilizando una base de datos relacional MySQL.

## Objetivo

Desarrollar una API REST que permita realizar operaciones de consulta y registro de docentes y asignaturas, aplicando los conceptos de arquitectura cliente-servidor, controladores, servicios, conexión a bases de datos y métodos HTTP.

## Tecnologías utilizadas

| Tecnología | Descripción |
|---|---|
| Node.js | Entorno de ejecución |
| NestJS | Framework para desarrollar la API |
| TypeScript | Lenguaje de programación |
| MySQL | Sistema de gestión de bases de datos |
| mysql2 | Conector para MySQL |
| Postman | Pruebas de los endpoints |
| Git y GitHub | Control de versiones y alojamiento del código |

## Funcionalidades

- Consultar todos los docentes.
- Registrar nuevos docentes.
- Consultar todas las asignaturas.
- Registrar nuevas asignaturas.
- Almacenar la información en una base de datos MySQL.
- Relacionar asignaturas con docentes mediante una clave foránea.

## Endpoints disponibles

| Método HTTP | Endpoint | Funcionalidad |
|---|---|---|
| GET | `/docentes` | Consultar docentes |
| POST | `/docentes` | Registrar un docente |
| GET | `/asignaturas` | Consultar asignaturas |
| POST | `/asignaturas` | Registrar una asignatura |

**Nota:** Los endpoints corresponden a las rutas documentadas para este proyecto.

## Base de datos

La base de datos utilizada se llama `gestion_academica` y contiene las siguientes tablas:

- **docentes:** almacena la información de los docentes.
- **asignaturas:** almacena la información de las asignaturas y su relación con los docentes.

La relación entre ambas tablas se implementa mediante una clave foránea.

El script SQL se encuentra en la carpeta `sql` del repositorio.

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/m60582973-coder/gestion1-academica-api.git
```

### 2. Ingresar a la carpeta

```bash
cd gestion1-academica-api
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Configurar la base de datos

- Abrir MySQL Workbench.
- Ejecutar el script SQL ubicado en la carpeta `sql`.
- Verificar que la base de datos `gestion_academica` esté creada.
- Configurar las variables de entorno necesarias para la conexión, de acuerdo con los nombres utilizados en el código del proyecto.

No publiques tus contraseñas ni el archivo `.env`.

### 5. Ejecutar el proyecto

```bash
npm run start:dev
```

La API se ejecutará localmente en:

```text
http://localhost:3000
```

## Pruebas de la API

Las solicitudes pueden realizarse utilizando Postman.

Se deben verificar las siguientes operaciones:

1. GET `/docentes`: consulta de docentes.
2. POST `/docentes`: registro de docentes.
3. GET `/asignaturas`: consulta de asignaturas.
4. POST `/asignaturas`: registro de asignaturas.

## Estructura general del repositorio

```text
gestion1-academica-api/
│
├── sql/
│   └── Scripts de la base de datos
│
├── src/
│   └── Código fuente de la API
│
├── test/
│   └── Pruebas del proyecto
│
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Autor

Proyecto académico desarrollado como actividad de formación del programa **Análisis y Desarrollo de Software – SENA**.

## Repositorio

[GitHub - gestion1-academica-api](https://github.com/m60582973-coder/gestion1-academica-api)
