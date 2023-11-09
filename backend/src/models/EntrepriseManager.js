// const { entreprise } = require("../controllers/entrepriseControllers");
const AbstractManager = require("./AbstractManager");

class EntrepriseManager extends AbstractManager {
  constructor() {
    super({ table: "entreprise" });
  }

  insert(
    companyName,
    logo,
    siret,
    address,
    postcode,
    city,
    email,
    phoneNumber,
    password,
    companyDescription,
    adminClientId
  ) {
    return this.database.query(
      `INSERT INTO entreprise (nom, logo, SIRET, adresse, code_postal, ville, email, telephone, mot_de_passe, description_entreprise, adminclient_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        companyName,
        logo,
        siret,
        address,
        postcode,
        city,
        email,
        phoneNumber,
        password,
        companyDescription,
        adminClientId,
      ]
    );
  }
}

// INSERT INTO entreprise (companyName, logo, siret, address, postcode, city, email, phoneNumber, password, companyDescription, adminClientId) VALUES ('Ways Up', 'waysup.png', '64356909700544', '3bis place de l\'Adjudant Vincenot', '75020', 'Paris', 'waysup@gmail.com', '0135779709' , 'waysup321', 'Filiale du groupe international RAJA, Welcome Office est spécialisé dans la vente en ligne de fournitures, aménagement et de mobilier de bureau. Leader sur Internet, Welcome Office c\'est 60.000 références livrées partout en France en 24/48h auprès de plus de 100.000 clients B to B', '1');

module.exports = EntrepriseManager;
