-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para cvm
CREATE DATABASE IF NOT EXISTS `cvm` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cvm`;

-- Volcando estructura para tabla cvm.administrativos
CREATE TABLE IF NOT EXISTS `administrativos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `apellido` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `cedula` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `telf_movil` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `email` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `direccion` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `nivel_instruccion` enum('N','B','U') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `id_usuarios` int DEFAULT NULL,
  `estatus` enum('Y','N') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla cvm.administrativos: ~1 rows (aproximadamente)
INSERT INTO `administrativos` (`id`, `nombre`, `apellido`, `cedula`, `telf_movil`, `email`, `direccion`, `nivel_instruccion`, `id_usuarios`, `estatus`) VALUES
	(1, 'Angello', 'Duran', '25463404', '4247110785', 'angelloprogramador@gmail.com', 'la castra', 'U', 1, 'Y');

-- Volcando estructura para tabla cvm.asigancion_docente
CREATE TABLE IF NOT EXISTS `asigancion_docente` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_docentes_secciones` int DEFAULT NULL,
  `id_docentes_materias` int DEFAULT NULL,
  `id_grado` int DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.asigancion_docente: ~0 rows (aproximadamente)

-- Volcando estructura para tabla cvm.asistencias
CREATE TABLE IF NOT EXISTS `asistencias` (
  `id` int DEFAULT NULL,
  `asistente` enum('Y','N') COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `id_materia` int DEFAULT NULL,
  `id_estudiante` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla cvm.asistencias: ~0 rows (aproximadamente)

-- Volcando estructura para tabla cvm.boletines
CREATE TABLE IF NOT EXISTS `boletines` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nota_final` int DEFAULT NULL,
  `id_periodo` int DEFAULT NULL,
  `id_materia` int DEFAULT NULL,
  `id_lapso` int DEFAULT NULL,
  `id_estudiante` int DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.boletines: ~0 rows (aproximadamente)

-- Volcando estructura para tabla cvm.docentes
CREATE TABLE IF NOT EXISTS `docentes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `apellido` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `cedula` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `telf_movil` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `direccion` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `nivel_instruccion` enum('N','B','U','P') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `id_usuarios` int DEFAULT NULL,
  `estatus` enum('Y','N') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.docentes: ~11 rows (aproximadamente)
INSERT INTO `docentes` (`id`, `nombre`, `apellido`, `cedula`, `telf_movil`, `email`, `direccion`, `nivel_instruccion`, `id_usuarios`, `estatus`) VALUES
	(1, 'carlo', 'durán', '195558968', '04245334879', 'elsecretodeloscielo@gmail.com', 'las golondrina', 'U', 2, 'Y'),
	(2, 'joel', 'arias', '193355687', '04247885698', 'joel4e@gmail.com', 'medellin', 'U', 3, 'Y'),
	(3, 'jon', 'doe', '135556698', '04247104587', 'jondoe@gmail.com', 'test', 'U', 5, 'N'),
	(4, 'Juan ', 'Jose', '17556455', '5555', 'juanjose@gmail.com', 'test', 'U', 8, 'Y'),
	(5, 'carlos', 'perez', '19569853', '5555', 'carlosperez@gmail.com', 'test', 'U', 9, 'Y'),
	(6, 'julian', 'duran', '24355137', '5555', 'test@gmail.com', 'test', 'U', 10, 'Y'),
	(7, 'winder', 'Medina', '2463404', '04247554587', 'winder@gmail.com', 'testfg', 'U', 11, 'N'),
	(8, 'joe', 'golberth', '7558965', '777', 'joe@gmail.com', 'test', 'P', 16, 'N'),
	(9, 'filipo', 'arquimedes', '5634499', '555', 'filip@outlook.com', 'filipinas', 'P', 17, 'N'),
	(10, 'stone', 'age', '25463404', '55555', 'stoneage@gmail.com', 'tkhjh', 'P', 18, 'Y'),
	(11, 'jon', 'doe88888', '2222', '222', 'angelloprogramador@gmail.com', 'yy', 'U', 19, 'N'),
	(12, 'daniel', 'servita', '555555', '55555', 'test@gmail.com', 'test', 'U', 20, 'N'),
	(13, 'jose', 'omar', '654321654', '63216542', 'joseomar@gmail.com', 'test', 'U', 22, 'Y'),
	(14, 'Angello', 'duran', '55555', '55555', 'angelloprogramador@gmail.com', 'test', 'U', 23, 'Y');

-- Volcando estructura para tabla cvm.docentes_materias
CREATE TABLE IF NOT EXISTS `docentes_materias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_docentes` int DEFAULT '0',
  `id_materias` int DEFAULT '0',
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla cvm.docentes_materias: ~0 rows (aproximadamente)

-- Volcando estructura para tabla cvm.docentes_secciones
CREATE TABLE IF NOT EXISTS `docentes_secciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_docente` int DEFAULT NULL,
  `id_seccion` int DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.docentes_secciones: ~0 rows (aproximadamente)

-- Volcando estructura para tabla cvm.estudiantes
CREATE TABLE IF NOT EXISTS `estudiantes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `apellido` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `cedula` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `tipo_documento` enum('V','E') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `nacionalidad` enum('VEN','COL') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `edad` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `genero` enum('M','F') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `direccion` varchar(250) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `id_usuario` int DEFAULT NULL,
  `id_detalles_estudiante` int DEFAULT NULL,
  `id_representante` int DEFAULT NULL,
  `id_mama` int DEFAULT NULL,
  `id_papa` int DEFAULT NULL,
  `id_seccion` int DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.estudiantes: ~0 rows (aproximadamente)
INSERT INTO `estudiantes` (`id`, `nombre`, `apellido`, `cedula`, `tipo_documento`, `nacionalidad`, `edad`, `genero`, `email`, `direccion`, `fecha_nacimiento`, `id_usuario`, `id_detalles_estudiante`, `id_representante`, `id_mama`, `id_papa`, `id_seccion`) VALUES
	(1, 'Angello', 'Duran', '25463404', 'V', 'VEN', '26', 'M', 'angelloprogramador@gmail.com', 'test', '1997-01-13', 1, 1, 1, 1, 1, NULL),
	(2, 'julian', 'duran', '25169112', 'V', 'VEN', '27', 'M', 'julian@gmail.com', 'test', '1995-03-28', 12, 2, 2, 2, 2, NULL),
	(3, 'Angello', 'Duran', '25463404', 'V', 'VEN', '26', 'M', 'angelloprogramador@gmail.com', 'test', '1997-01-13', 15, 4, 3, 3, 3, NULL),
	(4, 'test', 'test', '25463404', 'V', 'VEN', '25', 'M', 'angelloprogramador@gmail.com', 'test', '1956-02-22', 21, 5, 4, 4, 4, NULL),
	(5, 'Angello', 'Duran', '25463404', 'V', 'VEN', '26', 'M', 'angelloprogramador@gmail.com', 'test', '1997-01-13', 24, 6, 5, 5, 5, NULL),
	(6, 'Angello', 'Duran', '25463404', 'E', 'VEN', '17', 'M', 'test@gmail.com', 'test', '2023-03-23', 25, 7, 6, 6, 6, NULL);

-- Volcando estructura para tabla cvm.estudiantes_detalles
CREATE TABLE IF NOT EXISTS `estudiantes_detalles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `talla_camisa` enum('N','S','M','U','L','XL') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `talla_pantalon` enum('N','S','M','U','L','XL') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `estatura` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `peso` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `grupo_sanguineo` enum('N','A+','O+','B+','AB+','A-','O-','B-','AB-') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `discapacidad` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `url_informe_medico` varchar(250) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `alergico` enum('Y','N') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `alergia` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `enfermo` enum('Y','N') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `enfermedad` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `medicado` enum('Y','N') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `medicamento` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.estudiantes_detalles: ~4 rows (aproximadamente)
INSERT INTO `estudiantes_detalles` (`id`, `talla_camisa`, `talla_pantalon`, `estatura`, `peso`, `grupo_sanguineo`, `discapacidad`, `url_informe_medico`, `alergico`, `alergia`, `enfermo`, `enfermedad`, `medicado`, `medicamento`) VALUES
	(1, 'N', 'N', '', '', 'N', '', '', 'N', '', 'N', '', 'N', ''),
	(2, 'N', 'N', '', '', 'N', '', '', 'N', '', 'N', '', 'N', ''),
	(3, 'S', 'S', '1.75', '56', 'A+', '', '', 'N', '', 'Y', 'hernia discal', 'Y', 'complejo B '),
	(4, 'S', 'S', '1.75', '56', 'A+', '', '', 'N', '', 'Y', 'hernia discal', 'Y', 'complejo B'),
	(5, 'S', 'M', '1.75', '55', 'A+', 'test', '', 'N', '', 'Y', 'hernia discal', 'Y', 'test'),
	(6, 'S', 'S', '1.75', '56', 'A+', '', '', 'N', '', 'N', '', 'N', ''),
	(7, 'S', 'S', '1.75', '56', 'O+', 'test', '', 'N', '', 'Y', 'hernia discal', 'Y', 'test');

-- Volcando estructura para tabla cvm.grados
CREATE TABLE IF NOT EXISTS `grados` (
  `id` int NOT NULL AUTO_INCREMENT,
  `formato` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `formato_2` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `formato_3` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla cvm.grados: ~4 rows (aproximadamente)
INSERT INTO `grados` (`id`, `formato`, `formato_2`, `formato_3`) VALUES
	(1, '1°', 'Primero', NULL),
	(2, '2°', 'Segundo', NULL),
	(3, '3°', 'Tercero', NULL),
	(4, '4°', 'Cuarto', NULL),
	(5, '5°', 'Quinto', NULL);

-- Volcando estructura para tabla cvm.lapsos
CREATE TABLE IF NOT EXISTS `lapsos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `formato` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `formato_1` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `formato_2` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.lapsos: ~2 rows (aproximadamente)
INSERT INTO `lapsos` (`id`, `formato`, `formato_1`, `formato_2`) VALUES
	(1, '1°', 'PRIMER', NULL),
	(2, '2°', 'SEGUNDO', NULL),
	(3, '3°', 'TERCER', NULL);

-- Volcando estructura para tabla cvm.madres
CREATE TABLE IF NOT EXISTS `madres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `apellido` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `cedula` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `tipo_documento` enum('V','E') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `edad` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `nacionalidad` enum('VEN','COL') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `estado_civil` enum('N','C','S') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `nivel_instruccion` enum('N','B','U','P') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `ocupacion` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `lugar_trabajo` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `habilidad` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `direccion_residencia` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `telf_movil` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `telf_residencia` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `telf_trabajo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `religion` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `vive_estudiante` enum('Y','N') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla cvm.madres: ~0 rows (aproximadamente)
INSERT INTO `madres` (`id`, `nombre`, `apellido`, `cedula`, `tipo_documento`, `fecha_nacimiento`, `edad`, `nacionalidad`, `estado_civil`, `nivel_instruccion`, `ocupacion`, `lugar_trabajo`, `habilidad`, `direccion_residencia`, `telf_movil`, `telf_residencia`, `telf_trabajo`, `religion`, `vive_estudiante`) VALUES
	(1, 'nileida', 'servita', '9240076', 'V', '2023-02-08', '56', 'VEN', 'N', 'N', 'test', 'test', '', 'test', '12345678', '', '', '', 'Y'),
	(2, 'nileida', 'servita', '9240076', 'V', '2023-01-30', '55', 'VEN', 'C', 'U', 'test', 'test', 'test', 'test', '04247104587', '', '', '', 'Y'),
	(3, 'nileida', 'servita', '9240076', 'V', '2023-02-09', '56', 'VEN', 'C', 'U', 'profesora de pre-escolar', 'unidad educativa blen san joan colinas', 'manualidades y musica', 'test', '5555', '5555', '5555', 'test', 'Y'),
	(4, 'test', 'test', '9240076', 'V', '2023-02-14', '25', 'COL', 'S', 'B', 'test', 'test', 'test', 'test', '55555', '', '', '', 'Y'),
	(5, 'nileida', 'servita', '9240076', 'E', '2023-03-13', '26', 'VEN', 'C', 'U', 'test', 'test', 'test', 'test', '555555', '55555', '55555', 'test', 'Y'),
	(6, 'nileida', 'servita', '9240076', 'V', '2023-03-14', '55', 'VEN', 'S', 'B', 'test', 'test', 'test', 'test', '55555', '5555', '555555', 'test', 'Y');

-- Volcando estructura para tabla cvm.materias
CREATE TABLE IF NOT EXISTS `materias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `materia` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `descripcion` varchar(250) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `icon` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `img` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.materias: ~12 rows (aproximadamente)
INSERT INTO `materias` (`id`, `materia`, `descripcion`, `icon`, `img`) VALUES
	(1, 'CASTELLANO', 'literatura', 'book.png', 'castellano.jpg'),
	(2, 'INGLES Y OTRAS LENGUAS EXTRANJERAS', 'idiomas', 'notebook.png', 'ingles.jpg'),
	(3, 'MATEMATICAS', 'ciencias de las matemáticas', 'calculadora.png', 'matematicas.jpg'),
	(4, 'EDUCACION FISICA', 'deportes y ejercicios', 'futbol.png', 'educacion_fisica.jpg'),
	(5, 'ARTE Y PATRIMONIO', 'ciencias artisticas', 'pintura.png', 'artes.jpg'),
	(6, 'CIENCIAS NATURALES', 'ciencias de la naturalesa', 'sprout.png', 'naturaleza.jpg'),
	(7, 'GEOGRAFIA, HISTORIA Y CIUDADANIA', 'historia universal', 'geography.png', 'geografia.jpg'),
	(8, 'FISICA', 'ciencias de la fisica', 'atom.png', 'fisica.jpg'),
	(9, 'QUIMICA', 'ciencias de la quimica', 'flask.png', 'quimica.jpg'),
	(10, 'BIOLOGIA', 'ciancias biológicas', 'dna.png', 'biologia.jpg'),
	(11, 'FORMACION PARA LA SOBERANIA NACIONAL', 'formacion para el trabajo', 'briefcase.png', 'formacion.jpg'),
	(12, 'CIENCIAS DE LA TIERRA', 'ciencias del ecosistema', 'solar-system.png', 'tierra.jpg');

-- Volcando estructura para tabla cvm.modulos
CREATE TABLE IF NOT EXISTS `modulos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `descripcion` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `status` enum('Y','N') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.modulos: ~3 rows (aproximadamente)
INSERT INTO `modulos` (`id`, `titulo`, `descripcion`, `status`) VALUES
	(1, 'Inicio', 'Pagina principal', 'Y'),
	(2, 'Administracion', 'Administracion del Sistema', 'Y'),
	(3, 'Academicos', 'Gestion Académica', 'Y');

-- Volcando estructura para tabla cvm.notas
CREATE TABLE IF NOT EXISTS `notas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nota` int DEFAULT NULL,
  `id_periodo` int DEFAULT NULL,
  `id_planificacion` int DEFAULT NULL,
  `id_materia` int DEFAULT NULL,
  `id_lapso` int DEFAULT NULL,
  `id_estudiante` int DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.notas: ~0 rows (aproximadamente)

-- Volcando estructura para tabla cvm.notas_acumulativas
CREATE TABLE IF NOT EXISTS `notas_acumulativas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nota` int DEFAULT '0',
  `id_estudiante` int DEFAULT '0',
  `id_planificacion_actividades` int DEFAULT '0',
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla cvm.notas_acumulativas: ~0 rows (aproximadamente)

-- Volcando estructura para tabla cvm.notas_recuperativas
CREATE TABLE IF NOT EXISTS `notas_recuperativas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nota_recuperativa` int DEFAULT NULL,
  `estatus` enum('Y','N') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `id_nota` int DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.notas_recuperativas: ~0 rows (aproximadamente)

-- Volcando estructura para tabla cvm.padres
CREATE TABLE IF NOT EXISTS `padres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `apellido` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `cedula` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `tipo_documento` enum('V','E') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `edad` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `nacionalidad` enum('VEN','COL') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `estado_civil` enum('N','C','S') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `nivel_instruccion` enum('N','B','U','P') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `ocupacion` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL,
  `lugar_trabajo` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `habilidad` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `direccion_residencia` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `telf_movil` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `telf_residencia` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `telf_trabajo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `religion` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `vive_estudiante` enum('Y','N') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci ROW_FORMAT=DYNAMIC;

-- Volcando datos para la tabla cvm.padres: ~0 rows (aproximadamente)
INSERT INTO `padres` (`id`, `nombre`, `apellido`, `cedula`, `tipo_documento`, `fecha_nacimiento`, `edad`, `nacionalidad`, `estado_civil`, `nivel_instruccion`, `ocupacion`, `lugar_trabajo`, `habilidad`, `direccion_residencia`, `telf_movil`, `telf_residencia`, `telf_trabajo`, `religion`, `vive_estudiante`) VALUES
	(1, 'moises', 'duran', '9727838', 'V', '2023-02-09', '57', 'VEN', 'N', 'N', 'test', 'test', '', 'test', '555555555', '', '', '', 'Y'),
	(2, 'moises', 'duran', '9727838', 'V', '2023-02-18', '56', 'VEN', 'C', 'P', 'test', 'test', 'test', 'test', '0424', '', '', '', 'Y'),
	(3, 'moises', 'duran', '9727838', 'V', '2023-02-05', '57', 'VEN', 'C', 'P', 'directo ipas', 'IPASME', 'test', 'tetstt', '5555', '5555', '5555', 'test', 'Y'),
	(4, 'moises', 'duran', '9727838', 'V', '2023-02-23', '555', 'COL', 'S', 'B', 'test', 'test', 'test', 'test', '5555', '', '', '', 'Y'),
	(5, 'moises', 'duran', '555555', 'E', '2023-03-15', '26', 'VEN', 'C', 'U', 'test', 'test', 'tes', 'test', '555555', '55555', '55555', '555555', 'Y'),
	(6, 'moises', 'duran', '5555', 'E', '2023-03-22', '20', 'VEN', 'S', 'U', 'test', 'test', 'test', 'test', '5555', '5555', '5555', 'test', 'Y');

-- Volcando estructura para tabla cvm.periodo_escolar
CREATE TABLE IF NOT EXISTS `periodo_escolar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `periodo` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `estatus` enum('Y','N') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.periodo_escolar: ~1 rows (aproximadamente)
INSERT INTO `periodo_escolar` (`id`, `periodo`, `estatus`) VALUES
	(1, '2022-2023', 'Y');

-- Volcando estructura para tabla cvm.planificacion
CREATE TABLE IF NOT EXISTS `planificacion` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT '0',
  `descripcion` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `porcentaje` int DEFAULT NULL,
  `id_periodo` int DEFAULT NULL,
  `id_materia` int DEFAULT NULL,
  `id_docente` int DEFAULT NULL,
  `id_lapso` int DEFAULT NULL,
  `id_grado` int DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.planificacion: ~4 rows (aproximadamente)
INSERT INTO `planificacion` (`id`, `titulo`, `descripcion`, `porcentaje`, `id_periodo`, `id_materia`, `id_docente`, `id_lapso`, `id_grado`) VALUES
	(1, 'ecuaciones cuadraticas', 'test', 25, 1, 3, 10, 1, 2),
	(2, 'test', 'test', 25, 1, 3, 10, 1, 2),
	(3, 'test', 'test', 25, 1, 3, 10, 1, 2),
	(4, 'test', 'test', 25, 1, 3, 10, 1, 2),
	(5, 'gatitos felices', 'goldos', 25, 1, 8, 10, 1, 1);

-- Volcando estructura para tabla cvm.planificacion_actividades
CREATE TABLE IF NOT EXISTS `planificacion_actividades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `actividad` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `porcentaje` int DEFAULT NULL,
  `id_planificacion` int DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla cvm.planificacion_actividades: ~7 rows (aproximadamente)
INSERT INTO `planificacion_actividades` (`id`, `actividad`, `porcentaje`, `id_planificacion`) VALUES
	(1, 'taller', 5, 1),
	(2, 'examen', 20, 1),
	(3, 'test', 25, 2),
	(4, 'test', 25, 3),
	(5, 'test', 25, 4),
	(6, 'comer', 5, 5),
	(7, 'dormir', 15, 5),
	(8, 'tarea', 5, 5);

-- Volcando estructura para tabla cvm.planificacion_secciones
CREATE TABLE IF NOT EXISTS `planificacion_secciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_planificacion` int DEFAULT '0',
  `id_seccion` int DEFAULT '0',
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla cvm.planificacion_secciones: ~4 rows (aproximadamente)
INSERT INTO `planificacion_secciones` (`id`, `id_planificacion`, `id_seccion`) VALUES
	(1, 1, 1),
	(2, 2, 1),
	(3, 3, 1),
	(4, 4, 1),
	(5, 5, 1);

-- Volcando estructura para tabla cvm.representantes
CREATE TABLE IF NOT EXISTS `representantes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `apellido` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `cedula` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `tipo_documento` enum('V','E') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `edad` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `nacionalidad` enum('VEN','COL') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `estado_civil` enum('N','C','S') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `nivel_instruccion` enum('N','B','U','P') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `ocupacion` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `lugar_trabajo` varchar(250) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `habilidad` varchar(250) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `direccion_residencia` varchar(250) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `telf_movil` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `telf_residencia` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `telf_trabajo` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `religion` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `vive_estudiante` enum('Y','N') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `parentesco` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.representantes: ~0 rows (aproximadamente)
INSERT INTO `representantes` (`id`, `nombre`, `apellido`, `cedula`, `tipo_documento`, `fecha_nacimiento`, `edad`, `nacionalidad`, `estado_civil`, `nivel_instruccion`, `ocupacion`, `lugar_trabajo`, `habilidad`, `direccion_residencia`, `telf_movil`, `telf_residencia`, `telf_trabajo`, `religion`, `vive_estudiante`, `parentesco`) VALUES
	(1, 'nileida', 'servita', '9240076', 'V', '2023-02-08', '56', 'VEN', 'N', 'N', 'test', 'test', '', 'test', '12345678', '', '', '', 'N', 'Madre'),
	(2, 'moises', 'duran', '9727838', 'V', '2023-02-18', '56', 'VEN', 'C', 'P', 'test', 'test', 'test', 'test', '0424', '', '', '', 'N', 'Padre'),
	(3, 'nileida', 'servita', '9240076', 'V', '2023-02-09', '56', 'VEN', 'C', 'U', 'profesora de pre-escolar', 'unidad educativa blen san joan colinas', 'manualidades y musica', 'test', '5555', '5555', '5555', 'test', 'N', 'Madre'),
	(4, 'moises', 'duran', '9727838', 'V', '2023-02-23', '555', 'COL', 'S', 'B', 'test', 'test', 'test', 'test', '5555', '', '', '', 'N', 'Padre'),
	(5, 'nileida', 'servita', '9240076', 'E', '2023-03-13', '26', 'VEN', 'C', 'U', 'test', 'test', 'test', 'test', '555555', '55555', '55555', 'test', 'N', 'Madre'),
	(6, 'moises', 'duran', '5555', 'E', '2023-03-22', '20', 'VEN', 'S', 'U', 'test', 'test', 'test', 'test', '5555', '5555', '5555', 'test', 'N', 'Padre');

-- Volcando estructura para tabla cvm.secciones
CREATE TABLE IF NOT EXISTS `secciones` (
  `id` int NOT NULL AUTO_INCREMENT,
  `seccion` enum('A','B','C') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.secciones: ~3 rows (aproximadamente)
INSERT INTO `secciones` (`id`, `seccion`) VALUES
	(1, 'A'),
	(2, 'B'),
	(3, 'C');

-- Volcando estructura para tabla cvm.seccion_grado
CREATE TABLE IF NOT EXISTS `seccion_grado` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_seccion` int DEFAULT '0',
  `id_grado` int DEFAULT '0',
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volcando datos para la tabla cvm.seccion_grado: ~8 rows (aproximadamente)
INSERT INTO `seccion_grado` (`id`, `id_seccion`, `id_grado`) VALUES
	(1, 1, 1),
	(2, 1, 2),
	(3, 1, 3),
	(4, 1, 4),
	(5, 1, 5),
	(6, 2, 1),
	(7, 2, 2),
	(8, 2, 3);

-- Volcando estructura para tabla cvm.sub_modulos
CREATE TABLE IF NOT EXISTS `sub_modulos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `descripcion` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `status` enum('Y','N') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `id_modulo` int DEFAULT NULL,
  `url` varchar(100) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.sub_modulos: ~3 rows (aproximadamente)
INSERT INTO `sub_modulos` (`id`, `titulo`, `descripcion`, `status`, `id_modulo`, `url`) VALUES
	(1, 'Inicio', 'Pagina principal', 'Y', 1, 'index.php'),
	(2, 'Docentes', 'Administracion de Docentes', 'Y', 2, 'docentes.php'),
	(3, 'Estudiantes', 'Administracion de Estudiantes', 'Y', 2, 'estudiantes.php'),
	(4, 'Planificación', 'Planificacion académica', 'Y', 3, 'planificacion.php'),
	(5, 'Asignación de Materias', 'Asignar materia a docentes', 'N', 2, 'asignacion_materias_docentes.php');

-- Volcando estructura para tabla cvm.tipos_usuarios
CREATE TABLE IF NOT EXISTS `tipos_usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo_usuario` varchar(50) COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.tipos_usuarios: ~4 rows (aproximadamente)
INSERT INTO `tipos_usuarios` (`id`, `tipo_usuario`) VALUES
	(1, 'master'),
	(2, 'admin'),
	(3, 'teacher'),
	(4, 'student');

-- Volcando estructura para tabla cvm.tusuarios_smodulos
CREATE TABLE IF NOT EXISTS `tusuarios_smodulos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_tipo_usuario` int DEFAULT NULL,
  `id_sub_modulo` int DEFAULT NULL,
  `access` enum('Y','N') COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.tusuarios_smodulos: ~8 rows (aproximadamente)
INSERT INTO `tusuarios_smodulos` (`id`, `id_tipo_usuario`, `id_sub_modulo`, `access`) VALUES
	(1, 4, 1, 'Y'),
	(2, 4, 2, 'Y'),
	(3, 4, 3, 'Y'),
	(4, 3, 4, 'Y'),
	(5, 2, 1, 'Y'),
	(6, 2, 2, 'Y'),
	(8, 2, 5, 'Y');

-- Volcando estructura para tabla cvm.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `pass` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `estatus` enum('Y','N') CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `permisos` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `id_tipo_usuario` int DEFAULT NULL,
  KEY `Índice 1` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- Volcando datos para la tabla cvm.usuarios: ~25 rows (aproximadamente)
INSERT INTO `usuarios` (`id`, `email`, `pass`, `estatus`, `permisos`, `id_tipo_usuario`) VALUES
	(1, 'angelloprogramador@gmail.com', '3ee171f0b0aabdc0c979f18775213bf7', 'Y', '[R,U,D,I]', 2),
	(2, 'elsecretodeloscielos@gmail.com', '3ee171f0b0aabdc0c979f18775213bf7', 'Y', '[R,U,D]', 3),
	(3, 'joel4e@gmail.com', '3ee171f0b0aabdc0c979f18775213bf7', 'Y', '[R,U,D]', 3),
	(4, 'jondoe@gmail.com', 'a1b04ef4203bd3e4c22489d0c406e685', 'Y', '[R,U]', 3),
	(5, 'jondoe@gmail.com', 'a1b04ef4203bd3e4c22489d0c406e685', 'Y', '[R,U]', 3),
	(6, 'jorge@gmail.com', 'c53ad6d6847259935b676496407377d2', 'Y', '[R,U]', 3),
	(7, 'test@gmail.com', '6074c6aa3488f3c2dddff2a7ca821aab', 'Y', '[R,U]', 3),
	(8, 'test@gmail.com', '6074c6aa3488f3c2dddff2a7ca821aab', 'Y', '[R,U]', 3),
	(9, 'test@gmail.com', '6074c6aa3488f3c2dddff2a7ca821aab', 'Y', '[R,U]', 3),
	(10, 'test@gmail.com', '330fbf8e909dbb1b917abdb2e9adad49', 'Y', '[R,U]', 3),
	(11, 'angelloprogramador1@gmail.com', '6dddf77d3838f3239c8ada4237dc9217', 'Y', '[R,U]', 3),
	(12, 'julian@gmail.com', '88e0b7c1443c78ddf96c5016828aa912', 'Y', '[R,U]', 4),
	(13, 'test@gmail.com', '992e63080ee1e47b99f42b8d64ede953', 'Y', '[R,U]', 3),
	(14, 'angelloprogramador2@gmail.com', '3ee171f0b0aabdc0c979f18775213bf7', 'N', '[R,U]', 4),
	(15, 'angelloprogramador3@gmail.com', '3ee171f0b0aabdc0c979f18775213bf7', 'N', '[R,U]', 4),
	(16, 'joe@gmail.com', '9e39c7b2e4922a07bcecf0a7d615ef7d', 'Y', '[R,U]', 3),
	(17, 'filip@gmail.com', 'b5afd61a87272dc6ef06d5132c526a5b', 'Y', '[R,U]', 3),
	(18, 'stoneage@gmail.com', '3ee171f0b0aabdc0c979f18775213bf7', 'Y', '[R,U]', 3),
	(19, 'angelloprogramador4@gmail.com', '934b535800b1cba8f96a5d72f72f1611', 'Y', '[R,U]', 3),
	(20, 'test@gmail.com', '5b1b68a9abf4d2cd155c81a9225fd158', 'Y', '[R,U]', 3),
	(21, 'angelloprogramador5@gmail.com', '3ee171f0b0aabdc0c979f18775213bf7', 'N', '[R,U]', 4),
	(22, 'angelloprogramador@gmail.com', '2f8f3307f02209ef5db66aec02d6bc05', 'Y', '[R,U]', 3),
	(23, 'angelloprogramador@gmail.com', 'c5fe25896e49ddfe996db7508cf00534', 'Y', '[R,U]', 3),
	(24, 'angelloprogramador@gmail.com', '3ee171f0b0aabdc0c979f18775213bf7', 'N', '[R,U]', 4),
	(25, 'test@gmail.com', '3ee171f0b0aabdc0c979f18775213bf7', 'N', '[R,U]', 4);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
