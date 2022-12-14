const {Router} = require('express');

const RepairController = require('../controllers/Repair');

const RepairRouter = Router();


RepairRouter.get('/', RepairController.getRepair);

module.exports = RepairRouter;

RepairRouter.post('/', RepairController.postRepair);