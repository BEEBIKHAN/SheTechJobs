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

  update(companyName, email, password, siret, id) {
    return this.database.query(
      `UPDATE company SET companyName = ?, email = ?, password = ?, siret = ? WHERE id = ?`,
      [companyName, email, password, siret, id]
    );
  }

  searchByEmail(email) {
    return this.database.query(`SELECT * FROM company WHERE email = ?`, [
      email,
    ]);
  }

  updateEmail(email, id) {
    return this.database.query(`UPDATE company SET email = ? WHERE id = ?`, [
      email,
      id,
    ]);
  }

  updatePassword(password, id) {
    return this.database.query(`UPDATE company SET password = ? WHERE id = ?`, [
      password,
      id,
    ]);
  }
}

module.exports = CompanyManager;
