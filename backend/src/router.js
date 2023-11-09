const express = require("express");

const router = express.Router();
const auth = require("./middlewares/auth");

const itemControllers = require("./controllers/itemControllers");
const companyControllers = require("./controllers/companyControllers");
const candidateControllers = require("./controllers/candidateControllers");
const offerControllers = require("./controllers/offerControllers");
const contratControllers = require("./controllers/contratControllers");
// const newsletterControllers = require("./controllers/newsletterController");
const departementControllers = require("./controllers/departementControllers");
const jobControllers = require("./controllers/jobControllers");
const applicationControllers = require("./controllers/applicationControllers");

// Les routes GET :

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);

// router.get("/company", companyControllers.company);
router.get("/candidate", candidateControllers.candidate);
router.get("/offer", offerControllers.offer);
router.get("/contrat", contratControllers.typeDeContrat);
// router.get("/newsletter", newsletterControllers.newsletter);
router.get("/departement", departementControllers.departement);
router.get("/job", jobControllers.job);
router.get("/application", applicationControllers.application);

// Les routes POST :
router.post("/items", itemControllers.add);
router.post(
  "/company",
  auth.validateCompany,
  auth.hashPassword,
  companyControllers.postCompany
);

// Les routes PUT :
router.put("/items/:id", itemControllers.edit);

// Les routes DELETE :
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
