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
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
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
  `status` TINYINT(1) NOT NULL,
  `candidate_id` INT NOT NULL, 
  `offer_id` INT NOT NULL,
  FOREIGN KEY (candidate_id) REFERENCES candidate(id),
  FOREIGN KEY (offer_id) REFERENCES offer(id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



-- Inserts pour la table admin
INSERT INTO admin (email, password) VALUES ('admin@example.com', 'adminpass');
INSERT INTO admin (email, password) VALUES ('manager@example.com', 'managerpass');
INSERT INTO admin (email, password) VALUES ('support@example.com', 'supportpass');

-- Inserts pour la table newsletter
INSERT INTO newsletter (email) VALUES ('user1@example.com');
INSERT INTO newsletter (email) VALUES ('user2@example.com');
INSERT INTO newsletter (email) VALUES ('user3@example.com');

-- Inserts pour la table company
INSERT INTO company (name, email, password, siret) VALUES ('Company A', 'contact@companya.com', 'companypass', 12345678901234);
INSERT INTO company (name, email, password, siret) VALUES ('Company B', 'contact@companyb.com', 'companypass', 23456789012345);
INSERT INTO company (name, email, password, siret) VALUES ('Company C', 'contact@companyc.com', 'companypass', 34567890123456);

-- Inserts pour la table candidate
INSERT INTO candidate (firstname, lastname, email, password, cv_link) VALUES ('John', 'Doe', 'johndoe@example.com', 'johndoe123', 'http://example.com/cv/johndoe.pdf');
INSERT INTO candidate (firstname, lastname, email, password, cv_link) VALUES ('Jane', 'Smith', 'janesmith@example.com', 'janesmith123', 'http://example.com/cv/janesmith.pdf');
INSERT INTO candidate (firstname, lastname, email, password, cv_link) VALUES ('William', 'Johnson', 'willjohnson@example.com', 'willjohnson123', 'http://example.com/cv/willjohnson.pdf');

-- Inserts pour la table contract
INSERT INTO contract (type) VALUES ('Full-time');
INSERT INTO contract (type) VALUES ('Part-time');
INSERT INTO contract (type) VALUES ('Internship');

-- Inserts pour la table departement
INSERT INTO departement (name) VALUES ('Marketing');
INSERT INTO departement (name) VALUES ('Sales');
INSERT INTO departement (name) VALUES ('IT');

-- Inserts pour la table job
INSERT INTO job (name) VALUES ('Software Developer');
INSERT INTO job (name) VALUES ('Sales Representative');
INSERT INTO job (name) VALUES ('Marketing Manager');

-- Les inserts pour les offres et applications nécessiteraient que les tables référencées aient déjà des données.
-- Par exemple, pour insérer une offre, vous devez avoir des identifiants valides de company, contract, departement et job.
-- Supposons que les ID nécessaires soient déjà en place :

-- Inserts pour la table offer
INSERT INTO offer (title, company_description, job_description, profile_required, status, company_id, contract_id, departement_id, job_id) VALUES ('Developer Needed', 'Company A is a leading software company...', 'Responsibilities include...', 'Looking for skilled Java developer...', 1, 1, 1, 1, 1);
INSERT INTO offer (title, company_description, job_description, profile_required, status, company_id, contract_id, departement_id, job_id) VALUES ('Sales Star', 'Company B is expanding its sales force...', 'You will drive sales...', 'Proven sales track record...', 1, 2, 2, 2, 2);
INSERT INTO offer (title, company_description, job_description, profile_required, status, company_id, contract_id, departement_id, job_id) VALUES ('Marketing Guru', 'Company C is looking for a marketing manager...', 'Devise marketing strategies...', 'Expert in digital marketing...', 1, 3, 3, 3, 3);

-- Inserts pour la table application
INSERT INTO application (candidate_id, offer_id, status) VALUES (1, 1, 1);
INSERT INTO application (candidate_id, offer_id, status) VALUES (2, 2, 1);
INSERT INTO application (candidate_id, offer_id, status) VALUES (3, 3, 1);

-- Notez que pour les tables offer et application, les valeurs pour company_id, contract_id, departement_id, job_id, candidate_id et offer_id doivent correspondre à des ID valides déjà présents dans les tables company, contract, departement, job, candidate et offer respectivement.


