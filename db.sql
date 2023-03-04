-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.27-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para atoiga
CREATE DATABASE IF NOT EXISTS `atoiga` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `atoiga`;

-- Copiando estrutura para tabela atoiga.tb_adm
CREATE TABLE IF NOT EXISTS `tb_adm` (
  `id_adm` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(50) DEFAULT NULL,
  `senha` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_adm`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela atoiga.tb_cli
CREATE TABLE IF NOT EXISTS `tb_cli` (
  `id_cli` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `data_nasc` varchar(50) DEFAULT NULL,
  `rg` varchar(50) DEFAULT NULL,
  `cpf` varchar(50) DEFAULT NULL,
  `tel` varchar(50) DEFAULT NULL,
  `cel` varchar(50) DEFAULT NULL,
  `cep_cli` varchar(50) DEFAULT NULL,
  `num_cli` varchar(50) DEFAULT NULL,
  `rua_cli` varchar(50) DEFAULT NULL,
  `bairro_cli` varchar(50) DEFAULT NULL,
  `cidade_cli` varchar(50) DEFAULT NULL,
  `empresa` varchar(50) DEFAULT NULL,
  `cep_empr` varchar(50) DEFAULT NULL,
  `num_empr` varchar(50) DEFAULT NULL,
  `rua_empr` varchar(50) DEFAULT NULL,
  `bairro_empr` varchar(50) DEFAULT NULL,
  `cidade_empr` varchar(50) DEFAULT NULL,
  `dt_criacao` datetime DEFAULT current_timestamp(),
  `dt_att` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  PRIMARY KEY (`id_cli`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=71 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela atoiga.tb_hist_pag
CREATE TABLE IF NOT EXISTS `tb_hist_pag` (
  `id_hist_pag` int(11) NOT NULL AUTO_INCREMENT,
  `id_valores` int(11) NOT NULL,
  `valor_pago` float NOT NULL,
  `dt_criacao` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id_hist_pag`),
  KEY `FK_tb_hist_pag_tb_valores` (`id_valores`),
  CONSTRAINT `FK_tb_hist_pag_tb_valores` FOREIGN KEY (`id_valores`) REFERENCES `tb_valores` (`id_valores`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela atoiga.tb_juros
CREATE TABLE IF NOT EXISTS `tb_juros` (
  `juros` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportação de dados foi desmarcado.

-- Copiando estrutura para tabela atoiga.tb_valores
CREATE TABLE IF NOT EXISTS `tb_valores` (
  `id_valores` int(11) NOT NULL AUTO_INCREMENT,
  `id_cli` int(11) DEFAULT NULL,
  `valor_pego` float DEFAULT NULL,
  `valor_devido` float DEFAULT NULL,
  `dt_criacao` datetime DEFAULT current_timestamp(),
  PRIMARY KEY (`id_valores`) USING BTREE,
  KEY `FK_tb_valores_tb_cli` (`id_cli`),
  CONSTRAINT `FK_tb_valores_tb_cli` FOREIGN KEY (`id_cli`) REFERENCES `tb_cli` (`id_cli`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Exportação de dados foi desmarcado.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
