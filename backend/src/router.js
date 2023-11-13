const express = require("express");

const router = express.Router();
const auth = require("./middlewares/auth");

const candidateControllers = require("./controllers/candidateControllers");

const itemControllers = require("./controllers/itemControllers");
// const entrepriseControllers = require("./controllers/entrepriseControllers");
// const annonceControllers = require("./controllers/annonceControllers");
// const contratControllers = require("./controllers/contratControllers");
// const cvControllers = require("./controllers/cvControllers");
// const localisationControllers = require("./controllers/localisationControllers");
// const metierControllers = require("./controllers/metierControllers");
const companyControllers = require("./controllers/companyControllers");
// const offerControllers = require("./controllers/offerControllers");
// const newsletterControllers = require("./controllers/newsletterController");
// const departementControllers = require("./controllers/departementControllers");
// const jobControllers = require("./controllers/jobControllers");
// const applicationControllers = require("./controllers/applicationControllers");

// Les routes GET :

/* router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.get("/entreprise", entrepriseControllers.entreprise);
router.get("/annonce", annonceControllers.annonce);
router.get("/typeDeContrat", contratControllers.typeDeContrat);
router.get("/cv", cvControllers.cv);
router.get("/localisation", localisationControllers.localisation);
router.get("/metier", metierControllers.metier);

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
router.delete("/items/:id", itemControllers.destroy); */

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

// Les routes PUT :
router.put("/items/:id", itemControllers.edit);

// Les routes DELETE :
router.delete("/items/:id", itemControllers.destroy);

module.exports = router;
