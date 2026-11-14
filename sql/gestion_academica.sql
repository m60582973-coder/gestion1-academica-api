-- =====================================================
-- SISTEMA DE GESTION ACADEMICA
-- Base de datos: gestion_academica
-- Tablas: docentes y asignaturas
-- Relacion: uno a muchos (1:N)
-- =====================================================

-- 1. CREAR Y SELECCIONAR LA BASE DE DATOS

CREATE DATABASE gestion_academica;

USE gestion_academica;


-- 2. CREAR LA TABLA DOCENTES

CREATE TABLE docentes (
    id_docente INT AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(80) NOT NULL,
    apellidos VARCHAR(80) NOT NULL,
    correo VARCHAR(120) NOT NULL UNIQUE,
    telefono VARCHAR(20) NOT NULL,
    especialidad VARCHAR(100) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- 3. CREAR LA TABLA ASIGNATURAS

CREATE TABLE asignaturas (
    id_asignatura INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(20) NOT NULL UNIQUE,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(255),
    creditos TINYINT UNSIGNED NOT NULL,
    id_docente INT NOT NULL,

    FOREIGN KEY (id_docente)
    REFERENCES docentes(id_docente)
);


-- 4. INSERTAR LOS DOCENTES INICIALES

INSERT INTO docentes
(nombres, apellidos, correo, telefono, especialidad)
VALUES
('Alexandra', 'Muñoz', 'alexandra@gmail.com', '3001234567', 'Back-End'),
('Andrés', 'Muñoz', 'andres@gmail.com', '3107654321', 'Programación'),
('henry', 'bastidas', 'hbastidas@gmail.com', '3205558899', 'Bases de datos');


-- 5. INSERTAR LAS ASIGNATURAS INICIALES

INSERT INTO asignaturas
(codigo, nombre, descripcion, creditos, id_docente)
VALUES
('MAT101', 'Back-End básica',
 'Fundamentos de Back-End', 3, 1),

('PROG101', 'Introducción a la programación',
 'Conceptos iniciales de programación', 4, 2),

('BD101', 'Fundamentos de bases de datos',
 'Conceptos de bases de datos y SQL', 3, 3);


-- 6. CONSULTAR LOS DOCENTES

SELECT * FROM docentes;


-- 7. CONSULTAR LAS ASIGNATURAS

SELECT * FROM asignaturas;


-- 8. CONSULTAR ASIGNATURAS CON SUS DOCENTES

SELECT
    a.id_asignatura,
    a.codigo,
    a.nombre AS asignatura,
    a.creditos,
    CONCAT(d.nombres, ' ', d.apellidos) AS docente
FROM asignaturas AS a
INNER JOIN docentes AS d
    ON a.id_docente = d.id_docente;


-- 9. VERIFICAR LAS TABLAS Y SUS ESTRUCTURAS

SHOW TABLES;

DESCRIBE docentes;

DESCRIBE asignaturas;

SHOW CREATE TABLE asignaturas;
 