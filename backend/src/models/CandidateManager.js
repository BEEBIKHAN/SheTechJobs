const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  // C'EST ICI QU'ON VA METTRE TOUTES NOS METHODES DE REQUETES

  insert(firstname, lastname, email, hashedPassword) {
    return this.database.query(
      `INSERT INTO candidate (firstname, lastname, email, hashedPassword) VALUES (?, ?, ?, ?)`,
      [firstname, lastname, email, hashedPassword]
    );
  }

  update(firstname, lastname, email, hashedPassword, id) {
    return this.database.query(
      `UPDATE candidate SET firstname = ?, lastname = ?, email = ?, hashedPassword = ? WHERE id = ?`,
      [firstname, lastname, email, hashedPassword, id]
    );
  }
}

module.exports = CandidateManager;
