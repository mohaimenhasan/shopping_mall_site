var express = require('express');
var router = express.Router();

let storeController = require('../controllers/store.controller');
/* GET home page. */
router.post('/create', storeController.create_store);
router.post('/update_lease_paid', storeController.update_lease_paid);
router.post('/update_rent_paid', storeController.update_rent_paid);
module.exports = router;