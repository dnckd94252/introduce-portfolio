const WorkController = require("./controller/WorkController");
const express = require("express");
const Router = express.Router();

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/image");
  },
  filename: async function (req, file, cb) {
    const extension = path.extname(file.originalname);
    const basename = path.basename(file.originalname, extension);
    await cb(null, basename + "-" + Date.now() + extension);
  },
});

const upload = multer({ storage : storage });

Router.route("/api/work").post(upload.any(['image' , 'mockup']), WorkController.create).get(WorkController.get);


module.exports = Router;
