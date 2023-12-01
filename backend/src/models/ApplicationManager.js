/* eslint-disable camelcase */
/* eslint-disable no-undef */
const AbstractManager = require("./AbstractManager");

class ApplicationManager extends AbstractManager {
  constructor() {
    super({ table: "application" });
  }

  insert(application) {
    return this.database.query(
      `INSERT INTO application(appstatus, candidate_id, offer_id) values (?, ?, ?)`,
      [application.appstatus, application.candidate_id, application.offer_id]
    );
  }

  findAllApplications() {
    return this.database.query(
      `SELECT 
        app.id as application_id, app.date, app.appstatus, app.candidate_id, app.offer_id, 
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
}
module.exports = ApplicationManager;
