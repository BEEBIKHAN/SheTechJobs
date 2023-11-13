const express = require("express");

const router = express.Router();

const candidateControllers = require("./controllers/candidateControllers");

const auth = require("./middlewares/auth");

/* const itemControllers = require("./controllers/itemControllers");
const entrepriseControllers = require("./controllers/entrepriseControllers");
const annonceControllers = require("./controllers/annonceControllers");
const contratControllers = require("./controllers/contratControllers");
const cvControllers = require("./controllers/cvControllers");
const localisationControllers = require("./controllers/localisationControllers");
const metierControllers = require("./controllers/metierControllers"); */

/* router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.get("/entreprise", entrepriseControllers.entreprise);
router.get("/annonce", annonceControllers.annonce);
router.get("/typeDeContrat", contratControllers.typeDeContrat);
router.get("/cv", cvControllers.cv);
router.get("/localisation", localisationControllers.localisation);
router.get("/metier", metierControllers.metier);

router.put("/items/:id", itemControllers.edit);
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

module.exports = router;
