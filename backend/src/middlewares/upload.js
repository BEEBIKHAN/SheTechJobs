const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename(req, file, cb) {
    const cvName = uuidv4() + path.extname(file.originalname);
    cb(null, `candidate-${cvName}`);
  },
});

const uploadFile = (req, res, next) => {
  const upload = multer({ storage });

  return upload.single("cvLink")(req, res, next);
};

module.exports = { uploadFile };
