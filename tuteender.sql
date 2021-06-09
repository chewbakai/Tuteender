-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2021 at 04:13 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tuteender`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `picture` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `school` varchar(255) NOT NULL,
  `selectDegree` varchar(255) DEFAULT NULL,
  `selectYear` varchar(255) DEFAULT NULL,
  `course` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `code`, `picture`, `firstName`, `lastName`, `school`, `selectDegree`, `selectYear`, `course`, `email`, `username`, `password`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(2, 'hoxkejaFDpQAg0v8Vwv6BU3xsh8Kow5J', 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/kyrah_ceniza.jpg', 'Kyrah', 'Ceniza', 'University of San carlos', '3', '3', 'BS Information Technology', '18400129@usc.edu.ph', 'kai', '$2b$10$RvQjj2lWNG5obqo9Gn8sleDVl/JYvIliZmHgS/UtYyvIqSZbUCkdy', '2021-06-07 18:42:50', '2021-06-07 18:42:50', NULL),
(6, 'agBOLvrzDUuOGaXegUiKPwYz6IXM5po2', 'https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png', 'test', 'test', 'test', '3', '3', 'BSIT', 'test@test.com', 'test', '$2b$10$MK8QDpanKhBFerCZTHDl8OfvZXe.NT4tjFqwva98J/cPVGruu51Tu', '2021-06-09 02:06:32', '2021-06-09 02:06:32', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210523044006-create-accounts.js'),
('20210605061804-create-tutor.js');

-- --------------------------------------------------------

--
-- Table structure for table `tutors`
--

CREATE TABLE `tutors` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `rate` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tutors`
--

INSERT INTO `tutors` (`id`, `title`, `picture`, `rate`, `description`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Private Tutor', 'https://miro.medium.com/max/2000/1*VBbT6zfn9Qvi8WCx23fMxg.png', '250/hr', ' Knowledgeable into teaching life skill set, personal development subjects, mindfulness, discipline, and awareness', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 'Online Private Tutor ', 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_470493341_20001333200092800_398689.jpg', '450/hr', 'Online Private Tutor – for logic Puzzles, Math subject and strategic online activities)\r\nKnows how to communicate in English and with experience handling foreign tutee/student\r\n', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 'English Tutor', 'https://www.englishforum.com/wp-content/uploads/2020/10/english-forum-cover-talk.png', '300/hr', 'need english tutor for my daughter- 8 years old. will pay good.', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, '<h1>Code Help </h1>', 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', '300/hr', 'someone who will teach me to code in python, c, cpp or teach you wordpress', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 'Expert Tutors in Economics, Management and Business', 'https://leverageedu.com/blog/wp-content/uploads/2020/05/Difference-between-Micro-and-Macro-Economics.jpg', '600/hr', 'Right now, we are in need of tutors for these subjects:\r\n\r\nEconomics\r\nOperations Management\r\nAccounting\r\nManagement\r\nBusiness Law', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 'Online Tutor for economics', 'https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_272/understanding_economics_1200x627.jpg?quality=89&w=800', '450/hr', 'help me with my economic subject before i fail', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 'test', '', 'test', 'test', '2021-06-09 02:05:09', '2021-06-09 02:05:09', '0000-00-00 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `tutors`
--
ALTER TABLE `tutors`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tutors`
--
ALTER TABLE `tutors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
