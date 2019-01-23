-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 17, 2019 at 12:28 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medilog`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `username` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(3, 'a', '0cc175b9c0f1b6a831c399e269772661');

-- --------------------------------------------------------

--
-- Table structure for table `description`
--

CREATE TABLE `description` (
  `id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `blood_group` text NOT NULL,
  `heart_rate` text NOT NULL,
  `blood_pressure` text NOT NULL,
  `blood_sugar` text NOT NULL,
  `cholesterol_level` text NOT NULL,
  `allergies` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `description`
--

INSERT INTO `description` (`id`, `patient_id`, `date_updated`, `blood_group`, `heart_rate`, `blood_pressure`, `blood_sugar`, `cholesterol_level`, `allergies`) VALUES
(1, 11, '2019-01-16 22:54:11', 'B+', '72 ', '120/80', '100', '80', 'Caterpillar, Dust'),
(2, 8, '2019-01-16 23:30:19', 'O+', '70', '110/90', '90', '70', 'none');

-- --------------------------------------------------------

--
-- Table structure for table `disease`
--

CREATE TABLE `disease` (
  `id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `disease` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `disease`
--

INSERT INTO `disease` (`id`, `patient_id`, `disease`) VALUES
(1, 8, 'chollera'),
(2, 8, 'diarrhoea');

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `doctor_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `nmc_no` text NOT NULL,
  `description` text NOT NULL,
  `contact_no` text NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`doctor_id`, `name`, `email`, `password`, `nmc_no`, `description`, `contact_no`, `address`) VALUES
(1, 'Sabil', 'a@gmail.com', '0cc175b9c0f1b6a831c399e269772661', '1', 'mbbs', '99', 'ktm'),
(2, 'Sabil', 'dr@gmail.com', '0cc175b9c0f1b6a831c399e269772661', '999', 'MBBS', '986017270', 'Kathmandu');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `patient_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `age` text NOT NULL,
  `gender` enum('male','female') NOT NULL,
  `address` text NOT NULL,
  `contact_no` text NOT NULL,
  `citizenship_no` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`patient_id`, `name`, `email`, `password`, `age`, `gender`, `address`, `contact_no`, `citizenship_no`) VALUES
(8, 'Awan', 'awan@gmail.com', '0cc175b9c0f1b6a831c399e269772661', '19', 'male', 'K U ', '9841490870', '071-26-04736'),
(11, 'Ashish ', 'ashish@gmail.com', '0cc175b9c0f1b6a831c399e269772661', '23', 'male', 'Kathmandu', '9841490870', '072-121-1828'),
(12, 'Sailesh', 'sailesh@gmail.com', '0cc175b9c0f1b6a831c399e269772661', '24', 'male', 'Gangtok', '9860173749', '091-383-1811'),
(13, 'Shirish', 'shirish@gmail.com', '0cc175b9c0f1b6a831c399e269772661', '20', 'female', 'Lalitpur', '98718263907', '099-213-3380');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` int(11) NOT NULL,
  `admin_id` int(11) NOT NULL,
  `patient_id` int(11) NOT NULL,
  `doctor_id` int(11) NOT NULL,
  `hash` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `admin_id`, `patient_id`, `doctor_id`, `hash`) VALUES
(56, 3, 0, 0, 'd5ec228a77c02ddad6bdcf7681cb12dc'),
(90, 0, 8, 0, 'c791a60b1c4745b1e9ed27f77d4d3799'),
(91, 3, 0, 0, '9fb93c01a7b293135099a314a18ddd22'),
(92, 0, 0, 1, '274fb3dbe5fd710415ee3b5adaec52ad');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `description`
--
ALTER TABLE `description`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `disease`
--
ALTER TABLE `disease`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`doctor_id`);

--
-- Indexes for table `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`patient_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `description`
--
ALTER TABLE `description`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `disease`
--
ALTER TABLE `disease`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `doctor_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `patient`
--
ALTER TABLE `patient`
  MODIFY `patient_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `sessions`
--
ALTER TABLE `sessions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
