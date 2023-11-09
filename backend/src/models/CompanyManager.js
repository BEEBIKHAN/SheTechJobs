const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  insert(companyName, email, password, siret) {
    return this.database.query(
      `INSERT INTO company (name, email, password, siret) VALUES (?, ?, ?, ?)`,
      [companyName, email, password, siret]
    );
  }
}

module.exports = CompanyManager;
