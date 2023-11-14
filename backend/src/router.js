const express = require("express");

const router = express.Router();
const auth = require("./middlewares/auth");

const candidateControllers = require("./controllers/candidateControllers");

const contratControllers = require("./controllers/contratControllers");
const companyControllers = require("./controllers/companyControllers");
const offerControllers = require("./controllers/offerControllers");
const departementControllers = require("./controllers/departementControllers");
const jobControllers = require("./controllers/jobControllers");
const applicationControllers = require("./controllers/applicationControllers");

// Les routes GET :
router.get("/typeDeContrat", contratControllers.typeDeContrat);

router.get("/offer", offerControllers.offer);
router.get("/contrat", contratControllers.typeDeContrat);
router.get("/departement", departementControllers.departement);
router.get("/job", jobControllers.job);
router.get("/application", applicationControllers.application);

router.get("/candidate", candidateControllers.getAllCandidates);
router.post(
  "/candidate",
  auth.validateCandidate,
  auth.hashPassword,
  candidateControllers.postCandidate
);
router.put(
  "/candidate/:id",
  auth.hashPassword,
  candidateControllers.updateCandidate
);

router.post(
  "/company",
  auth.validateCompany,
  auth.hashPassword,
  companyControllers.postCompany
);

module.exports = router;
