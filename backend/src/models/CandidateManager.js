const AbstractManager = require("./AbstractManager");

class CandidateManager extends AbstractManager {
  constructor() {
    super({ table: "candidate" });
  }

  // C'EST ICI QU'ON VA METTRE TOUTES NOS METHODES DE REQUETES

  // Création de candidate :
  insert(firstname, lastname, email, hashedPassword) {
    return this.database.query(
      `INSERT INTO candidate (firstname, lastname, email, hashedPassword) VALUES (?, ?, ?, ?)`,
      [firstname, lastname, email, hashedPassword]
    );
  }

  // Modification de candidate :
  update(firstname, lastname, email, hashedPassword, id) {
    return this.database.query(
      `UPDATE candidate SET firstname = ?, lastname = ?, email = ?, hashedPassword = ? WHERE id = ?`,
      [firstname, lastname, email, hashedPassword, id]
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

  updatePassword(hashedPassword, id) {
    return this.database.query(
      `UPDATE candidate SET hashedPassword = ? WHERE id = ?`,
      [hashedPassword, id]
    );
  }
}

module.exports = CandidateManager;
