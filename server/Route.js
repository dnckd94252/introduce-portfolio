const WorkController = require('./controller/WorkController');

const expressRouter = require("express");
const Router = expressRouter.Router();
const fs = require("fs");

Router.route('/api/work').post(WorkController.create);


module.exports = Router;