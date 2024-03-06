-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-03-2024 a las 23:29:57
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `basededatos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--
-- Creación: 03-03-2024 a las 21:32:20
-- Última actualización: 03-03-2024 a las 22:04:08
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `tipo` varchar(255) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `materia_id` int(11) DEFAULT NULL,
  `seccion_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `tipo`, `fecha`, `materia_id`, `seccion_id`) VALUES
(1, 'Videoconferencia', '2024-01-22', 1, 1),
(2, 'Encuentro Presencial', '2024-02-01', 1, 1),
(3, 'Evaluación', '2024-02-08', 1, 1),
(4, 'Videoconferencia', '2024-02-15', 1, 1),
(5, 'Encuentro Presencial', '2024-02-22', 1, 1),
(6, 'Evaluación', '2024-02-29', 1, 1),
(7, 'Corte de Notas', '2024-03-07', 1, 1),
(8, 'Videoconferencia', '2024-01-22', 1, 2),
(9, 'Encuentro Presencial', '2024-01-29', 1, 2),
(10, 'Evaluación', '2024-02-05', 1, 2),
(11, 'Videoconferencia', '2024-02-12', 1, 2),
(12, 'Encuentro Presencial', '2024-02-19', 1, 2),
(13, 'Evaluación', '2024-02-26', 1, 2),
(14, 'Corte de Notas', '2024-03-04', 1, 2),
(15, 'Videoconferencia', '2024-01-22', 1, 3),
(16, 'Encuentro Presencial', '2024-01-29', 1, 3),
(17, 'Evaluación', '2024-02-05', 1, 3),
(18, 'Videoconferencia', '2024-02-12', 1, 3),
(19, 'Encuentro Presencial', '2024-02-19', 1, 3),
(20, 'Evaluación', '2024-02-26', 1, 3),
(21, 'Corte de Notas', '2024-03-04', 1, 3),
(22, 'Videoconferencia', '2024-01-22', 2, 1),
(23, 'Encuentro Presencial', '2024-01-29', 2, 1),
(24, 'Evaluación', '2024-02-05', 2, 1),
(25, 'Videoconferencia', '2024-02-12', 2, 1),
(26, 'Encuentro Presencial', '2024-02-19', 2, 1),
(27, 'Evaluación', '2024-02-26', 2, 1),
(28, 'Corte de Notas', '2024-03-04', 2, 1),
(29, 'Videoconferencia', '2024-01-22', 2, 2),
(30, 'Encuentro Presencial', '2024-01-29', 2, 2),
(31, 'Evaluación', '2024-02-05', 2, 2),
(32, 'Videoconferencia', '2024-02-12', 2, 2),
(33, 'Encuentro Presencial', '2024-02-19', 2, 2),
(34, 'Evaluación', '2024-02-26', 2, 2),
(35, 'Corte de Notas', '2024-03-04', 2, 2),
(36, 'Videoconferencia', '2024-01-22', 2, 3),
(37, 'Encuentro Presencial', '2024-01-29', 2, 3),
(38, 'Evaluación', '2024-02-05', 2, 3),
(39, 'Videoconferencia', '2024-02-12', 2, 3),
(40, 'Encuentro Presencial', '2024-02-19', 2, 3),
(41, 'Evaluación', '2024-02-26', 2, 3),
(42, 'Corte de Notas', '2024-03-04', 2, 3),
(43, 'Videoconferencia', '2024-01-22', 3, 1),
(44, 'Encuentro Presencial', '2024-01-29', 3, 1),
(45, 'Evaluación', '2024-02-05', 3, 1),
(46, 'Videoconferencia', '2024-02-12', 3, 1),
(47, 'Encuentro Presencial', '2024-02-19', 3, 1),
(48, 'Evaluación', '2024-02-26', 3, 1),
(49, 'Corte de Notas', '2024-03-04', 3, 1),
(50, 'Videoconferencia', '2024-01-22', 3, 2),
(51, 'Encuentro Presencial', '2024-01-29', 3, 2),
(52, 'Evaluación', '2024-02-05', 3, 2),
(53, 'Videoconferencia', '2024-02-12', 3, 2),
(54, 'Encuentro Presencial', '2024-02-19', 3, 2),
(55, 'Evaluación', '2024-02-26', 3, 2),
(56, 'Corte de Notas', '2024-03-04', 3, 2),
(57, 'Videoconferencia', '2024-01-22', 3, 3),
(58, 'Encuentro Presencial', '2024-01-29', 3, 3),
(59, 'Evaluación', '2024-02-05', 3, 3),
(60, 'Videoconferencia', '2024-02-12', 3, 3),
(61, 'Encuentro Presencial', '2024-02-19', 3, 3),
(62, 'Evaluación', '2024-02-26', 3, 3),
(63, 'Corte de Notas', '2024-03-04', 3, 3),
(64, 'Videoconferencia', '2024-01-22', 4, 1),
(65, 'Encuentro Presencial', '2024-01-29', 4, 1),
(66, 'Evaluación', '2024-02-05', 4, 1),
(67, 'Videoconferencia', '2024-02-12', 4, 1),
(68, 'Encuentro Presencial', '2024-02-19', 4, 1),
(69, 'Evaluación', '2024-02-26', 4, 1),
(70, 'Corte de Notas', '2024-03-04', 4, 1),
(71, 'Videoconferencia', '2024-01-22', 4, 2),
(72, 'Encuentro Presencial', '2024-01-29', 4, 2),
(73, 'Evaluación', '2024-02-05', 4, 2),
(74, 'Videoconferencia', '2024-02-12', 4, 2),
(75, 'Encuentro Presencial', '2024-02-19', 4, 2),
(76, 'Evaluación', '2024-02-26', 4, 2),
(77, 'Corte de Notas', '2024-03-04', 4, 2),
(78, 'Videoconferencia', '2024-01-22', 4, 3),
(79, 'Encuentro Presencial', '2024-01-29', 4, 3),
(80, 'Evaluación', '2024-02-05', 4, 3),
(81, 'Videoconferencia', '2024-02-12', 4, 3),
(82, 'Encuentro Presencial', '2024-02-19', 4, 3),
(83, 'Evaluación', '2024-02-26', 4, 3),
(84, 'Corte de Notas', '2024-03-04', 4, 3),
(85, 'Videoconferencia', '2024-01-22', 5, 1),
(86, 'Encuentro Presencial', '2024-01-29', 5, 1),
(87, 'Evaluación', '2024-02-05', 5, 1),
(88, 'Videoconferencia', '2024-02-12', 5, 1),
(89, 'Encuentro Presencial', '2024-02-19', 5, 1),
(90, 'Evaluación', '2024-02-26', 5, 1),
(91, 'Corte de Notas', '2024-03-04', 5, 1),
(92, 'Videoconferencia', '2024-01-22', 5, 2),
(93, 'Encuentro Presencial', '2024-01-29', 5, 2),
(94, 'Evaluación', '2024-02-05', 5, 2),
(95, 'Videoconferencia', '2024-02-12', 5, 2),
(96, 'Encuentro Presencial', '2024-02-19', 5, 2),
(97, 'Evaluación', '2024-02-26', 5, 2),
(98, 'Corte de Notas', '2024-03-04', 5, 2),
(99, 'Videoconferencia', '2024-01-22', 5, 3),
(100, 'Encuentro Presencial', '2024-01-29', 5, 3),
(101, 'Evaluación', '2024-02-05', 5, 3),
(102, 'Videoconferencia', '2024-02-12', 5, 3),
(103, 'Encuentro Presencial', '2024-02-19', 5, 3),
(104, 'Evaluación', '2024-02-26', 5, 3),
(105, 'Corte de Notas', '2024-03-04', 5, 3),
(106, 'Videoconferencia', '2024-01-22', 6, 1),
(107, 'Encuentro Presencial', '2024-01-29', 6, 1),
(108, 'Evaluación', '2024-02-05', 6, 1),
(109, 'Videoconferencia', '2024-02-12', 6, 1),
(110, 'Encuentro Presencial', '2024-02-19', 6, 1),
(111, 'Evaluación', '2024-02-26', 6, 1),
(112, 'Corte de Notas', '2024-03-04', 6, 1),
(113, 'Videoconferencia', '2024-01-22', 6, 2),
(114, 'Encuentro Presencial', '2024-01-29', 6, 2),
(115, 'Evaluación', '2024-02-05', 6, 2),
(116, 'Videoconferencia', '2024-02-12', 6, 2),
(117, 'Encuentro Presencial', '2024-02-19', 6, 2),
(118, 'Evaluación', '2024-02-26', 6, 2),
(119, 'Corte de Notas', '2024-03-04', 6, 2),
(120, 'Videoconferencia', '2024-01-22', 6, 3),
(121, 'Encuentro Presencial', '2024-01-29', 6, 3),
(122, 'Evaluación', '2024-02-05', 6, 3),
(123, 'Videoconferencia', '2024-02-12', 6, 3),
(124, 'Encuentro Presencial', '2024-02-19', 6, 3),
(125, 'Evaluación', '2024-02-26', 6, 3),
(126, 'Corte de Notas', '2024-03-04', 6, 3),
(127, 'Videoconferencia', '2024-01-22', 7, 1),
(128, 'Encuentro Presencial', '2024-01-29', 7, 1),
(129, 'Evaluación', '2024-02-05', 7, 1),
(130, 'Videoconferencia', '2024-02-12', 7, 1),
(131, 'Encuentro Presencial', '2024-02-19', 7, 1),
(132, 'Evaluación', '2024-02-26', 7, 1),
(133, 'Corte de Notas', '2024-03-04', 7, 1),
(134, 'Videoconferencia', '2024-01-22', 7, 2),
(135, 'Encuentro Presencial', '2024-01-29', 7, 2),
(136, 'Evaluación', '2024-02-05', 7, 2),
(137, 'Videoconferencia', '2024-02-12', 7, 2),
(138, 'Encuentro Presencial', '2024-02-19', 7, 2),
(139, 'Evaluación', '2024-02-26', 7, 2),
(140, 'Corte de Notas', '2024-03-04', 7, 2),
(141, 'Videoconferencia', '2024-01-22', 7, 3),
(142, 'Encuentro Presencial', '2024-01-29', 7, 3),
(143, 'Evaluación', '2024-02-05', 7, 3),
(144, 'Videoconferencia', '2024-02-12', 7, 3),
(145, 'Encuentro Presencial', '2024-02-19', 7, 3),
(146, 'Evaluación', '2024-02-26', 7, 3),
(147, 'Corte de Notas', '2024-03-04', 7, 3),
(148, 'Videoconferencia', '2024-01-22', 8, 1),
(149, 'Encuentro Presencial', '2024-01-29', 8, 1),
(150, 'Evaluación', '2024-02-05', 8, 1),
(151, 'Videoconferencia', '2024-02-12', 8, 1),
(152, 'Encuentro Presencial', '2024-02-19', 8, 1),
(153, 'Evaluación', '2024-02-26', 8, 1),
(154, 'Corte de Notas', '2024-03-04', 8, 1),
(155, 'Videoconferencia', '2024-01-22', 8, 2),
(156, 'Encuentro Presencial', '2024-01-29', 8, 2),
(157, 'Evaluación', '2024-02-05', 8, 2),
(158, 'Videoconferencia', '2024-02-12', 8, 2),
(159, 'Encuentro Presencial', '2024-02-19', 8, 2),
(160, 'Evaluación', '2024-02-26', 8, 2),
(161, 'Corte de Notas', '2024-03-04', 8, 2),
(162, 'Videoconferencia', '2024-01-22', 8, 3),
(163, 'Encuentro Presencial', '2024-01-29', 8, 3),
(164, 'Evaluación', '2024-02-05', 8, 3),
(165, 'Videoconferencia', '2024-02-12', 8, 3),
(166, 'Encuentro Presencial', '2024-02-19', 8, 3),
(167, 'Evaluación', '2024-02-26', 8, 3),
(168, 'Corte de Notas', '2024-03-04', 8, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materias`
--
-- Creación: 03-03-2024 a las 21:26:47
-- Última actualización: 03-03-2024 a las 21:27:37
--

CREATE TABLE `materias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `materias`
--

INSERT INTO `materias` (`id`, `nombre`) VALUES
(1, 'Matematica IV'),
(2, 'Diseño Logico II'),
(3, 'Entornos De desarrollo'),
(4, 'Analisis y Diseño de Sistemas'),
(5, 'Estructura de datos I'),
(6, 'Backend'),
(7, 'Base de Datos I'),
(8, 'Lógica Básica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--
-- Creación: 03-03-2024 a las 21:26:47
-- Última actualización: 03-03-2024 a las 21:27:37
--

CREATE TABLE `profesores` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `apellido` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`id`, `nombre`, `apellido`) VALUES
(1, 'Katiuska', 'Morillo'),
(2, 'Yerson', 'Gonzales'),
(3, 'Suleima', 'Espinoza'),
(4, 'Roberto', 'Di Michele');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores_materias`
--
-- Creación: 03-03-2024 a las 21:26:47
-- Última actualización: 03-03-2024 a las 21:27:37
--

CREATE TABLE `profesores_materias` (
  `profesor_id` int(11) NOT NULL,
  `materia_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesores_materias`
--

INSERT INTO `profesores_materias` (`profesor_id`, `materia_id`) VALUES
(1, 1),
(1, 2),
(2, 5),
(3, 3),
(3, 4),
(4, 6),
(4, 7),
(4, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `secciones`
--
-- Creación: 03-03-2024 a las 21:26:47
-- Última actualización: 03-03-2024 a las 21:27:37
--

CREATE TABLE `secciones` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `secciones`
--

INSERT INTO `secciones` (`id`, `nombre`) VALUES
(1, 'Semipresencial'),
(2, 'Virtual'),
(3, 'Fin de semana');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `materia_id` (`materia_id`),
  ADD KEY `seccion_id` (`seccion_id`);

--
-- Indices de la tabla `materias`
--
ALTER TABLE `materias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `profesores_materias`
--
ALTER TABLE `profesores_materias`
  ADD PRIMARY KEY (`profesor_id`,`materia_id`),
  ADD KEY `materia_id` (`materia_id`);

--
-- Indices de la tabla `secciones`
--
ALTER TABLE `secciones`
  ADD PRIMARY KEY (`id`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD CONSTRAINT `eventos_ibfk_1` FOREIGN KEY (`materia_id`) REFERENCES `materias` (`id`),
  ADD CONSTRAINT `eventos_ibfk_2` FOREIGN KEY (`seccion_id`) REFERENCES `secciones` (`id`);

--
-- Filtros para la tabla `profesores_materias`
--
ALTER TABLE `profesores_materias`
  ADD CONSTRAINT `profesores_materias_ibfk_1` FOREIGN KEY (`profesor_id`) REFERENCES `profesores` (`id`),
  ADD CONSTRAINT `profesores_materias_ibfk_2` FOREIGN KEY (`materia_id`) REFERENCES `materias` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
