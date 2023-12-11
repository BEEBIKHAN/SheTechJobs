const express = require("express");
const uploadMiddleware = require("./middlewares/upload");

const router = express.Router();
const auth = require("./middlewares/auth");

const candidateControllers = require("./controllers/candidateControllers");
const offerControllers = require("./controllers/offerControllers");
const companyControllers = require("./controllers/companyControllers");
const departementControllers = require("./controllers/departementControllers");
const contractControllers = require("./controllers/contractControllers");
const jobControllers = require("./controllers/jobControllers");
const applicationControllers = require("./controllers/applicationControllers");

// CANDIDATE :

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
// cv is here
router.post("/moncv", uploadMiddleware.uploadFile, candidateControllers.sendCv);
// application from here
router.get("/application", applicationControllers.getAllApplications);
router.get("/application/:id", applicationControllers.getAllApplicationsById);

// CV :
router.post("/moncv", uploadMiddleware.uploadFile, candidateControllers.sendCv);

// APPLICATIONS :
router.get("/applications", applicationControllers.getAllApplications);
router.get("/application/:id", applicationControllers.getAllApplicationsById);
router.post("/application", applicationControllers.postApplication);
router.post(
  "/application-motivations",
  applicationControllers.postApplicationWithMotivations
);

// COMPANY :
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
  auth.checkEmailCompanyIfExist,
  companyControllers.verifyPassword
);

// OFFERS :
router.get("/offers", offerControllers.getAllOffers);
router.get("/offers/:id", offerControllers.getAllOffersById);
router.get("/offer/:companyId", offerControllers.getListOfferByCompany);
router.get("/offers/search/:title", offerControllers.findAllOffersByWord);
router.get(
  "/offers/search/type/:type",
  offerControllers.findAllOffersByContract
);

router.post("/offers", offerControllers.addOffer);
router.put("/offers/:id", offerControllers.editOffer);
router.delete("/offers/:id", offerControllers.deleteOffer);

// DEPARTEMENTS, CONTRACTS AND JOBS :
router.get("/departement", departementControllers.getAllDepartement);

router.get("/contract", contractControllers.getAllContract);

router.get("/job", jobControllers.getAllJob);

module.exports = router;
