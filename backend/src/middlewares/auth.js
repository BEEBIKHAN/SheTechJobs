const argon2 = require("argon2");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const models = require("../models");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((hashedPassword) => {
      console.info("Mot de passe du body :", req.body.password);
      console.info("Résultat de hashedPassword : ", hashedPassword);
      req.body.hashedPassword = hashedPassword;
      console.info(
        "Resultat de mon req.body.hashedPassword :",
        req.body.hashedPassword
      );
      delete req.body.password;
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const candidateSchema = Joi.object({
  firstname: Joi.string().min(1).required(),
  lastname: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const companySchema = Joi.object({
  companyName: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  siret: Joi.number().integer().min(14).required(),
});

const validateCandidate = (req, res, next) => {
  const { error } = candidateSchema.validate(req.body);

  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
};

const validateCompany = (req, res, next) => {
  const { error } = companySchema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
};

const checkEmailCandidateIfExists = (req, res, next) => {
  const { email } = req.body;

  models.candidate.searchByEmail(email).then(([candidate]) => {
    if (candidate.length !== 0) {
      // eslint-disable-next-line prefer-destructuring
      req.candidate = candidate[0];
      console.info("req.candidate : ", req.candidate);
      next();
    } else {
      res.sendStatus(401);
    }
  });
};

const checkEmailIfExist = (req, res, next) => {
  const { email } = req.body;

  models.company.searchByEmail(email).then(([company]) => {
    if (company.length !== 0) {
      // eslint-disable-next-line prefer-destructuring
      req.company = company[0];
      // console.info("req.company : ", req.company);
      next();
    } else {
      res.sendStatus(401);
    }
  });
};

const checkIfIsAllowed = (req, res, next) => {
  try {
    const { authToken } = req.cookies;
    console.info("token de checkIfIsAllowed: ", authToken);

    if (!authToken) {
      return res.sendStatus(401);
    }

    const payload = jwt.verify(authToken, process.env.JWT_SECRET);

    req.candidate = payload;
    console.info(payload);

    return next();
  } catch {
    return res.sendStatus(401);
  }
};

module.exports = {
  hashPassword,
  validateCandidate,
  checkIfGoodCandidate,
  checkEmailCandidateIfExists,
  checkIfIsAllowed,
  checkEmailIfExist,
  validateCompany,
};
