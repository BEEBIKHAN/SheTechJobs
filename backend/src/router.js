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
const authControllers = require("./controllers/authControllers");
const newsletterControllers = require("./controllers/newsletterControllers");

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

router.put("/candidate-email/:id", candidateControllers.UpdateEmailCandidate);
router.put(
  "/candidate-password/:id",
  candidateControllers.UpdatePasswordCandidate
);
router.delete("/candidate/:id", candidateControllers.destroyCandidate);

// cv is here
router.post("/moncv", uploadMiddleware.uploadFile, candidateControllers.sendCv);
// application from here
router.get("/application", applicationControllers.getAllApplications);
router.get("/application/:id", applicationControllers.getAllApplicationsById);
router.put(
  "/applicationstatus/:id",
  applicationControllers.updateApplicationStatus
);

// CV :
router.post("/moncv", uploadMiddleware.uploadFile, candidateControllers.sendCv);

// APPLICATIONS :
router.get("/applications", applicationControllers.getAllApplications);
router.get("/application/:id", applicationControllers.getAllApplicationsById);
router.get(
  "/applications-by-candidate/:candidateId",
  applicationControllers.getListApplicationsByCandidate
);
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

router.post("/logout", authControllers.logout);

router.put("/company/:id", auth.hashPassword, companyControllers.updateCompany);

router.post(
  "/login-company",
  auth.checkEmailCompanyIfExist,
  companyControllers.verifyPassword
);

router.put("/company-email/:id", companyControllers.UpdateEmailCompany);
router.put("/company-password/:id", companyControllers.UpdatePasswordCompany);
router.delete("/company/:id", companyControllers.destroyCompany);

router.get(
  "/offers/:id/applications",
  applicationControllers.getListApplicationsByOffer
);

// OFFERS :
router.get("/offers", offerControllers.getAllOffers);
router.get("/offers/:id", offerControllers.getAllOffersById);
router.get(
  "/offers-by-company/:companyId",
  offerControllers.getListOfferByCompany
);

router.get("/offer/:companyId", offerControllers.getListOfferByCompany);
router.get("/offers/search/:title", offerControllers.findAllOffersByWord);
router.get(
  "/offers/search/type/:type",
  offerControllers.findAllOffersByContract
);

router.post("/offers", offerControllers.addOffer);
router.put("/offers/:id", offerControllers.editOffer);
router.put("/offer/status/:id", offerControllers.updateOfferStatus);

router.delete("/offers/:id", offerControllers.deleteOffer);

// DEPARTEMENTS, CONTRACTS AND JOBS :
router.get("/departement", departementControllers.getAllDepartement);

router.get("/contract", contractControllers.getAllContract);

router.get("/job", jobControllers.getAllJob);

router.get("/newsletter", newsletterControllers.getUsers);
router.post("/newsletter", newsletterControllers.registerUser);
router.post("/send-newsletter", newsletterControllers.sendNewsletter);

module.exports = router;
