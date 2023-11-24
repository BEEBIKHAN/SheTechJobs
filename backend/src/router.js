const express = require("express");

const router = express.Router();
const auth = require("./middlewares/auth");

const candidateControllers = require("./controllers/candidateControllers");
const offerControllers = require("./controllers/offerControllers");
const companyControllers = require("./controllers/companyControllers");

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
router.get("/offers", offerControllers.getAllOffers);
router.get("/offers/:id", offerControllers.getAllOffersById);

router.post("/offer", offerControllers.addOffer);

module.exports = router;
