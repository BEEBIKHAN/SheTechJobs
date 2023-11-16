CREATE TABLE Admin (
    admin_id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    date_creation DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE Candidat (
    candidat_id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    cv_link VARCHAR(2048)
);

CREATE TABLE Entreprise (
    entreprise_id INT AUTO_INCREMENT PRIMARY KEY,
    nom_entreprise VARCHAR(255) NOT NULL,
    secteur_activite VARCHAR(255),
    contact_email VARCHAR(255) NOT NULL
);

CREATE TABLE Metier (
    metier_id INT AUTO_INCREMENT PRIMARY KEY,
    nom_metier VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE TypeContrat (
    type_contrat_id INT AUTO_INCREMENT PRIMARY KEY,
    nom_type VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Departement (
    departement_id INT AUTO_INCREMENT PRIMARY KEY,
    nom_departement VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Annonce (
    annonce_id INT AUTO_INCREMENT PRIMARY KEY,
    entreprise_id INT NOT NULL,
    metier_id INT NOT NULL,
    type_contrat_id INT NOT NULL,
    departement_id INT NOT NULL,
    titre VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    date_publication DATETIME DEFAULT CURRENT_TIMESTAMP,
    date_expiration DATETIME,
    salaire_propose DECIMAL(10,2),
    FOREIGN KEY (entreprise_id) REFERENCES Entreprise(entreprise_id) ON DELETE CASCADE,
    FOREIGN KEY (metier_id) REFERENCES Metier(metier_id),
    FOREIGN KEY (type_contrat_id) REFERENCES TypeContrat(type_contrat_id),
    FOREIGN KEY (departement_id) REFERENCES Departement(departement_id)
);

CREATE TABLE Candidature (
    candidature_id INT AUTO_INCREMENT PRIMARY KEY,
    candidat_id INT NOT NULL,
    annonce_id INT NOT NULL,
    date_candidature DATETIME DEFAULT CURRENT_TIMESTAMP,
    statut VARCHAR(255) DEFAULT 'en cours',
    FOREIGN KEY (candidat_id) REFERENCES Candidat(candidat_id) ON DELETE CASCADE,
    FOREIGN KEY (annonce_id) REFERENCES Annonce(annonce_id) ON DELETE CASCADE
);

