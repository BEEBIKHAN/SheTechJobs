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
}
module.exports = OfferManager;
