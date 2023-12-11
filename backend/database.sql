CREATE TABLE `admin` (
 `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 `email` VARCHAR(255) NOT NULL,
 `password` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `newsletter` (
 `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 `email` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `company` (
 `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(255) NOT NULL,
 `email` VARCHAR(255) NOT NULL,
 `password` VARCHAR(255) NOT NULL,
 `siret` BIGINT(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `candidate` (
 `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 `firstname` VARCHAR(255) NOT NULL,
 `lastname` VARCHAR(255) NOT NULL,
 `email` VARCHAR(255) UNIQUE NOT NULL,
 `hashedPassword` VARCHAR(255) NOT NULL,
 `cv_link` VARCHAR(255)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `contract` (
 `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 `type` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `departement` (
 `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `job` (
 `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 `name` VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `offer` (
 `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 `title` VARCHAR(255) NOT NULL,
 `company_description` TEXT NOT NULL,
 `job_description` TEXT NOT NULL,
 `profile_required` TEXT NOT NULL,
 `status` TINYINT(1) NOT NULL,
 `date` DATETIME DEFAULT CURRENT_TIMESTAMP,
 `contract_id` INT NOT NULL,
 `departement_id` INT NOT NULL,
 `job_id` INT NOT NULL,
 `company_id` INT NOT NULL,
 FOREIGN KEY (contract_id) REFERENCES contract(id),
 FOREIGN KEY (departement_id) REFERENCES departement(id),
 FOREIGN KEY (job_id) REFERENCES job(id),
 FOREIGN KEY (company_id) REFERENCES company(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `application` (
 `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
 `date` DATETIME DEFAULT CURRENT_TIMESTAMP,
 `application_status` TINYINT(1) NOT NULL,
 `motivations` TEXT,
 `candidate_id` INT NOT NULL,
 `offer_id` INT NOT NULL,
 FOREIGN KEY (candidate_id) REFERENCES candidate(id),
 FOREIGN KEY (offer_id) REFERENCES offer(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/****************SECTION INSERT INTO*************************/

INSERT INTO `company` (`name`, `email`, `password`, `siret`) 
VALUES
('Ways up', 'waysup@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$CWamTLUMmddoJ72qFhGttg$DR0RRt38Mqs0RUt1uQqksDlAg/vNqVUagSBneOvNmG4', 64356909700544),
('Wild Code School', 'wcs@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$QltwaNxSn8XMDuZCKanrCw$1PNyH80lxpQ0sZxXXlDoLxNMSBsOzDeRuzX1osWlj2M', 64879909700544);
 
 
 INSERT INTO `candidate` (`firstname`, `lastname`, `email`, `hashedPassword`, `cv_link`)
    VALUES
    ('John', 'Doe', 'john.doe@email.com', '$argon2id$v=19$m=65536,t=5,p=1$JwWcvuajHV12uaWJVE2/XQ$dVEuVeiFt/DHQE5soahtnqNZ3v4MANuOHvDfKSeRGgo', 'cv_link_1'),
     ('Jane', 'Smith', 'jane.smith@email.com', '$argon2id$v=19$m=65536,t=5,p=1$KwWcvuajHV12uaWJVE2/XQ$dVEuVeiFt/DHQE5soahtnqNZ3v4MANuOHvDfKSeRGgo', 'cv_link_2'),
     ('Mike', 'Johnson', 'mike.johnson@email.com', '$argon2id$v=19$m=65536,t=5,p=1$LwWcvuajHV12uaWJVE2/XQ$dVEuVeiFt/DHQE5soahtnqNZ3v4MANuOHvDfKSeRGgo', 'cv_link_3');




INSERT INTO `contract` (`type`) VALUES
('CDI'),
('CDD'),
('Alternance / pro'),
('Stage');


INSERT INTO `departement` (`name`) VALUES
('Ain'),
('Aisne'),
('Allier'),
('Alpes-de-Haute-Provence'),
('Hautes-Alpes'),
('Alpes-Maritimes'),
('Ardèche'),
('Ardennes'),
('Ariège'),
('Aube'),
('Aude'),
('Aveyron'),
('Bouches-du-Rhône'),
('Calvados'),
('Cantal'),
('Charente'),
('Charente-Maritime'),
('Cher'),
('Corrèze'),
('Corse-du-Sud'),
('Côte-d Or'),
('Côtes-d Armor'),
('Creuse'),
('Dordogne'),
('Doubs'),
('Drôme'),
('Eure'),
('Eure-et-Loir'),
('Finistère'),
('Gard'),
('Haute-Garonne'),
('Gers'),
('Gironde'),
('Hérault'),
('Ille-et-Vilaine'),
('Indre'),
('Indre-et-Loire'),
('Isère'),
('Jura'),
('Landes'),
('Loir-et-Cher'),
('Loire'),
('Haute-Loire'),
('Loire-Atlantique'),
('Loiret'),
('Lot'),
('Lot-et-Garonne'),
('Lozère'),
('Maine-et-Loire'),
('Manche'),
('Marne'),
('Haute-Marne'),
('Mayenne'),
('Meurthe-et-Moselle'),
('Meuse'),
('Morbihan'),
('Moselle'),
('Nièvre'),
('Nord'),
('Oise'),
('Orne'),
('Pas-de-Calais'),
('Puy-de-Dôme'),
('Pyrénées-Atlantiques'),
('Hautes-Pyrénées'),
('Pyrénées-Orientales'),
('Bas-Rhin'),
('Haut-Rhin'),
('Rhône'),
('Haute-Saône'),
('Saône-et-Loire'),
('Sarthe'),
('Savoie'),
('Haute-Savoie'),
('Paris'),
('Seine-Maritime'),
('Seine-et-Marne'),
('Yvelines'),
('Deux-Sèvres'),
('Somme'),
('Tarn'),
('Tarn-et-Garonne'),
('Var'),
('Vaucluse'),
('Vendée'),
('Vienne'),
('Haute-Vienne'),
('Vosges'),
('Yonne'),
('Territoire de Belfort'),
('Essonne'),
('Hauts-de-Seine'),
('Seine-Saint-Denis'),
('Val-de-Marne'),
('Val-d Oise');


INSERT INTO `job` (`name`) VALUES
('Administratrice de base de données'),
('Architecte big data'),
('Architecte big data'),
('Architecte de solutions Blockchain'),
('Business analyst'),
('Cheffe de projet informatique'),
('Conceptrice de Data Visualisation'),
('Data analyst'),
('Data scientist'),
('Data miner'),
('Data protection officer'),
('Designer web'),
('Développeuse Blockchain'),
('Développeuse mobile'),
('Développeuse web back-end'),
('Développeuse web front-end'),
('Développeuse web full-stack'),
('Développeuse DevOps'),
('Experte en réseaux informatiques'),
('Ingénieure en cybersécurité'),
('Ingénieure en intelligence artificielle'),
('Ingénieure logiciels'),
('Ingénieure solution Cloud'),
('No code'),
('Spécialiste du cloud');


INSERT INTO `offer` (`title`, `company_description`, `job_description`, `profile_required`, `status`,`date`, `contract_id`, `departement_id`, `job_id`, `company_id`)
VALUES
('Software Engineer - Full-time Position','companydesc','web dev','profile1','1','2023-12-08 19:07:35','1','1','1','1'),
('Junior Developpeuse','companydesc','Designer','Certifiée de REACT','1','2022-12-08 08:07:35','1','4','3','1');


INSERT INTO `application` (`date`, `application_status`, `motivations`, `candidate_id`, `offer_id`) 
VALUES ('2022-10-06 06:07:25', '1', 'Je suis inspiré de votre annonce.', '1', '1'),
('2023-12-08 08:07:35', '1', 'Developpeuse depuis 10 ans .', '2', '2');


