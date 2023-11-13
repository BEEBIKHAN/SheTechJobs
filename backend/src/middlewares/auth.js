const argon2 = require("argon2");
const Joi = require("joi");

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

module.exports = {
  hashPassword,
  validateCandidate,
  validateCompany,
};
