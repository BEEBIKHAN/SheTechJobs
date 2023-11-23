const AbstractManager = require("./AbstractManager");

class DepartementManager extends AbstractManager {
  constructor() {
    super({ table: "departement" });
  }

  // C'EST ICI QU'ON VA METTRE TOUTES NOS METHODES DE REQUETES
}

module.exports = DepartementManager;
