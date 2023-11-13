const argon2 = require("argon2");
const Joi = require("joi");

const checkIfGoodCandidate = (req, res, next) => {
  const { email, password } = req.query;

  if (email === "admin@gmail.com" && password === "secret") {
    next();
  } else {
    res
      .status(403)
      .send(`Désolé ! Vous n'êtes pas autorisé à accéder à cette route...`);
  }
};

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
  firstname: Joi.string().min(3).required(),
  lastname: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const validateCandidate = (req, res, next) => {
  const { error } = candidateSchema.validate(req.body);

  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
};

module.exports = { checkIfGoodCandidate, hashPassword, validateCandidate };
