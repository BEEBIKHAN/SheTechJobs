const AbstractManager = require("./AbstractManager");

class ContractManager extends AbstractManager {
  constructor() {
    super({ table: "contract" });
  }

  // C'EST ICI QU'ON VA METTRE TOUTES NOS METHODES DE REQUETES
}

module.exports = ContractManager;
