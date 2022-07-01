-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Ven 01 Juillet 2022 à 13:51
-- Version du serveur :  10.1.19-MariaDB
-- Version de PHP :  5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `energie-generation`
--

-- --------------------------------------------------------

--
-- Structure de la table `newsletter`
--

CREATE TABLE `newsletter` (
  `id` int(11) NOT NULL,
  `nom` varchar(25) NOT NULL,
  `email` varchar(150) NOT NULL,
  `langue` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `newsletter`
--

INSERT INTO `newsletter` (`id`, `nom`, `email`, `langue`) VALUES
(1, 'sh', 'vfdg', '1'),
(2, 'tf', 'oftduk@gmail.com', '1'),
(3, 'tf', 'oftduk@gmail.com', '1'),
(4, 'tf', 'oftduk@gmail.com', '1'),
(5, 'djamila', 'djamilatou2912@gmail.com', '2'),
(6, 'djamila', 'gertrudehounake@gmail.com', '1'),
(7, 'djamila', 'djamilatou2912@gmail.com', '2'),
(8, 'ezok', 'ezokovichtbb@gmail.com', '0'),
(17, 'ezok', 'mamadou', '0'),
(28, 'ezok', 'gigi@gmail.com', 'Je prefere recevoir les information en francais');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
