const express = require("express");

const router = express.Router();
const auth = require("./middlewares/auth");

const candidateControllers = require("./controllers/candidateControllers");
const offerControllers = require("./controllers/offerControllers");
const contratControllers = require("./controllers/contratControllers");
const companyControllers = require("./controllers/companyControllers");
const departementControllers = require("./controllers/departementControllers");
const jobControllers = require("./controllers/jobControllers");
const applicationControllers = require("./controllers/applicationControllers");

// Les routes GET :
router.get("/typeDeContrat", contratControllers.typeDeContrat);
router.get("/contrat", contratControllers.typeDeContrat);
router.get("/departement", departementControllers.departement);
router.get("/job", jobControllers.job);
router.get("/application", applicationControllers.application);

// ---------------CANDIDATE -------------//
router.get("/candidate", candidateControllers.getAllCandidates);
router.post(
  "/candidate",
  auth.validateCandidate,
  auth.hashPassword,
  candidateControllers.postCandidate
);

router.post(
  "/login",
  auth.checkEmailCandidateIfExists,
  candidateControllers.verifyPassword
);

router.put(
  "/candidate/:id",
  auth.hashPassword,
  candidateControllers.updateCandidate
);

// ---------------- COMPANY --------------//
router.get(
  "/company",
  auth.checkIfIsAllowed,
  companyControllers.getAllCompanies
);
router.post(
  "/company",
  auth.validateCompany,
  auth.hashPassword,
  companyControllers.postCompany
);

router.put("/company/:id", auth.hashPassword, companyControllers.updateCompany);

router.post(
  "/login-company",
  // auth.checkIfIsAllowed,
  auth.checkEmailCompanyIfExist,
  companyControllers.verifyPassword
);

// -----------------ANNONCES (offer)----------------//

router.get("/offer", offerControllers.getAllOffers);
router.post("/offers", offerControllers.addOffer);
router.get("/offersList", offerControllers.listPublishedOffers);

module.exports = router;
