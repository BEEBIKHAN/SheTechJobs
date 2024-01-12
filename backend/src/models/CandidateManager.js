const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  // C'EST ICI QU'ON VA METTRE TOUTES NOS METHODES DE REQUETES

  insert(firstname, lastname, email, password) {
    return this.database.query(
      `INSERT INTO candidate (firstname, lastname, email, password) VALUES (?, ?, ?, ?)`,
      [firstname, lastname, email, password]
    );
  }

  update(firstname, lastname, email, password, id) {
    return this.database.query(
      `UPDATE candidate SET firstname = ?, lastname = ?, email = ?, password = ? WHERE id = ?`,
      [firstname, lastname, email, password, id]
    );
  }

  addCv(cv, id) {
    return this.database.query(
      `UPDATE candidate SET cv_link = ? WHERE id = ?`,
      [cv, id]
    );
  }

  searchByEmail(email) {
    return this.database.query(`SELECT * FROM candidate WHERE email = ?`, [
      email,
    ]);
  }

  updateEmail(email, id) {
    return this.database.query(`UPDATE candidate SET email = ? WHERE id = ?`, [
      email,
      id,
    ]);
  }

  updatePassword(password, id) {
    return this.database.query(
      `UPDATE candidate SET password = ? WHERE id = ?`,
      [password, id]
    );
  }
}

module.exports = CandidateManager;
