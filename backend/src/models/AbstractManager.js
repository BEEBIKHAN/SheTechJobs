class AbstractManager {
  constructor({ table }) {
    this.table = table;
  }

  // Lecture des données d'une table par id :
  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  // Lecture de toutes les données de la table :
  findAll() {
    return this.database.query(`select * from  ${this.table}`);
  }

  // Suppression des données de la table par l'id :
  delete(id) {
    return this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = AbstractManager;
