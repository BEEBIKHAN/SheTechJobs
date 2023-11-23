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

  listOffers(title, departement, profileRequired) {
    return this.database.query(
      `
        SELECT
        offer.*,
        offer.title AS title,
        offer.profile_required AS profileRequired,
        departement.name AS departement,
        contract.type AS type_of_contract,
        job.name AS job_name
        FROM
        offer
        JOIN
            departement AS departement ON offer.departement_id = departement.id
        JOIN
            contract AS contract ON offer.contract_id = contract.id
        JOIN
            job AS job ON offer.job_id = job.id

        WHERE
        (offer.departement_id = ? AND offer.contract_id = ? AND offer.job_id = ?)
        ORDER BY
         offer.date ASC;
        `,
      [title, departement, profileRequired]
    );
  }
}
module.exports = OfferManager;
