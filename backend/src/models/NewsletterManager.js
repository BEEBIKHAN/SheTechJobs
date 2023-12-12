const AbstractManager = require("./AbstractManager");

class NewsletterManager extends AbstractManager {
  constructor() {
    super({ table: "newsletter" });
  }

  // C'EST ICI QU'ON VA METTRE TOUTES NOS METHODES DE REQUETES
  findByEmail(email) {
    return this.database.query("SELECT * FROM newsletter WHERE email = ?", [
      email,
    ]);
  }

  insert(email) {
    return this.database.query(`INSERT INTO newsletter (email) VALUES (?)`, [
      email,
    ]);
  }
}

module.exports = NewsletterManager;
