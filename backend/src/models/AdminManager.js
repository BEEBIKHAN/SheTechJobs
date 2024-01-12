const AbstractManager = require("./AbstractManager");

class AdminManager extends AbstractManager {
  constructor() {
    super({ table: "admin" });
  }

  insert(email, password) {
    return this.database.query(
      `INSERT INTO admin (email, password) VALUES (?, ?)`,
      [email, password]
    );
  }
}
module.exports = AdminManager;
