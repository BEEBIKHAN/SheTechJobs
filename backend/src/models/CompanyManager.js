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

  findListApplicationsByOffer() {
    return this.database.query(`SELECT
    a.id AS application_id,
    c.firstname AS candidate_firstname,
    c.cv_link AS candidate_cv,
    a.motivations AS application_motivations,
    o.title AS offer_title,
    o.date AS offer_date,
    co.id AS company_id,
    j.name AS job_name,
    d.name AS department_name,
    ct.type AS contract_type
FROM
    application a
JOIN
    candidate c ON a.candidate_id = c.id
JOIN
    offer o ON a.offer_id = o.id
JOIN
    company co ON o.company_id = co.id
JOIN
    job j ON o.job_id = j.id
JOIN
    departement d ON o.departement_id = d.id
JOIN
    contract ct ON o.contract_id = ct.id;

`);
  }
}

module.exports = CompanyManager;
