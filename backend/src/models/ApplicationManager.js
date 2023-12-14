/* eslint-disable camelcase */
/* eslint-disable no-undef */
const AbstractManager = require("./AbstractManager");

class ApplicationManager extends AbstractManager {
  constructor() {
    super({ table: "application" });
  }

  insert(application) {
    return this.database.query(
      `INSERT INTO application (application_status, candidate_id, offer_id) VALUES (?, ?, ?)`,
      [
        application.application_status,
        application.candidate_id,
        application.offer_id,
      ]
    );
  }

  insertWithMotivations(application) {
    return this.database.query(
      `INSERT INTO application (application_status, motivations, candidate_id, offer_id) VALUES (?, ?, ?, ?)`,
      [
        application.application_status,
        application.motivations,
        application.candidate_id,
        application.offer_id,
      ]
    );
  }

  findAllApplications() {
    return this.database.query(
      `SELECT 
        app.id as application_id, app.date, app.application_status, app.motivations, app.candidate_id, app.offer_id, 
        cand.id as candidate_id, cand.firstname, cand.lastname, cand.email, cand.cv_link, 
        off.id as offer_id, off.title, off.company_description, off.job_description, off.profile_required, off.status, off.date as offer_date, off.contract_id, off.departement_id, off.job_id, off.company_id
      FROM application as app
      INNER JOIN candidate as cand ON app.candidate_id = cand.id 
      INNER JOIN offer as off ON app.offer_id = off.id`
    );
  }

  findAllApplicationsById(id) {
    return this.database.query(
      `SELECT application.*, candidate.*, offer.* 
       FROM application 
       INNER JOIN candidate ON application.candidate_id = candidate.id 
       INNER JOIN offer ON application.offer_id = offer.id 
       WHERE application.id = ?`,
      [id]
    );
  }

  findListApplicationsByOffer(id) {
    return this.database.query(
      `SELECT
      application.*,
      candidate.firstname,
      candidate.lastname,
      candidate.cv_link,
      o.title AS offertitle,
      contract.type,
      d.name AS departementname,
      j.name AS jobname
  FROM
      application
  JOIN
      offer o ON application.offer_id = o.id
  JOIN
      contract ON o.contract_id = contract.id
  JOIN
      departement d ON o.departement_id = d.id
  JOIN
      job j ON o.job_id = j.id
  JOIN
      company ON o.company_id = company.id
  JOIN
      candidate ON application.candidate_id = candidate.id
  WHERE
      company.id = ?`,
      [id]
    );
  }

  updateStatus(application_status, id) {
    return this.database.query(
      `UPDATE application SET application_status = ? WHERE id = ?`,
      [application_status, id]
    );
  }
}

module.exports = ApplicationManager;
