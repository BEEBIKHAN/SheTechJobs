const AbstractManager = require("./AbstractManager");

class OfferManager extends AbstractManager {
  constructor() {
    super({ table: "offer" });
  }

  insert(offer) {
    return this.database.query(
      `INSERT INTO offer (title, company_description, job_description, profile_required, status, contract_id, departement_id, job_id, company_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        offer.title,
        offer.company_description,
        offer.job_description,
        offer.profile_required,
        offer.status,
        offer.contract_id,
        offer.departement_id,
        offer.job_id,
        offer.company_id,
      ]
    );
  }

  update(offer, id) {
    return this.database.query(
      `UPDATE offer SET title = ?, company_description = ?, job_description = ?, profile_required = ? WHERE id = ?`,
      [
        offer.title,
        offer.company_description,
        offer.job_description,
        offer.profile_required,
        id,
      ]
    );
  }

  updateOfferStatus(status, id) {
    return this.database.query(`UPDATE offer SET status = ? WHERE id = ?`, [
      status,
      id,
    ]);
  }

  findAllOffers() {
    return this.database.query(
      `SELECT o.id, o.title, o.company_description, o.job_description, o.profile_required, o.status, o.date, contract.type, departement.name AS localisation, job.name AS métier FROM offer AS o JOIN contract ON o.contract_id = contract.id JOIN departement ON o.departement_id = departement.id JOIN job ON o.job_id = job.id ORDER BY o.date ASC`,
      []
    );
  }

  findAllOffersById(id) {
    return this.database.query(
      `SELECT o.id, o.title, o.company_description, o.job_description, o.profile_required, o.status, o.date, contract.type, departement.name AS localisation, job.name AS métier FROM offer AS o JOIN contract ON o.contract_id = contract.id JOIN departement ON o.departement_id = departement.id JOIN job ON o.job_id = job.id WHERE o.id = ? ORDER BY o.date ASC`,
      [id]
    );
  }

  findAllOffersByWord(title) {
    return this.database.query(
      `SELECT o.id, o.title, o.company_description, o.job_description, o.profile_required, o.status, o.date, contract.type, departement.name AS localisation, job.name AS métier FROM offer AS o JOIN contract ON o.contract_id = contract.id JOIN departement ON o.departement_id = departement.id JOIN job ON o.job_id = job.id WHERE o.title LIKE ? ORDER BY o.date ASC`,
      [`%${title}%`]
    );
  }

  findAllOffersByContract(type) {
    return this.database.query(
      `SELECT o.id, o.title, o.company_description, o.job_description, o.profile_required, o.status, o.date, contract.type, departement.name AS localisation, job.name AS métier FROM offer AS o JOIN contract ON o.contract_id = contract.id JOIN departement ON o.departement_id = departement.id JOIN job ON o.job_id = job.id WHERE contract.type LIKE ? ORDER BY o.date ASC`,
      [`%${type}%`]
    );
  }

  ListOffersByCompany(companyId) {
    return this.database.query(
      `SELECT o.id, o.title, o.company_description, o.job_description, o.profile_required, o.status, o.date, contract.type, departement.name AS localisation, job.name AS métier FROM offer AS o JOIN contract ON o.contract_id = contract.id JOIN departement ON o.departement_id = departement.id JOIN job ON o.job_id = job.id WHERE o.company_id = ? ORDER BY o.date ASC`,
      [companyId]
    );
  }
}

module.exports = OfferManager;
