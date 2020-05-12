var express = require('express');
var router = express.Router();

let userController = require('../controllers/users.controller');
/* GET home page. */
router.post('/create', userController.createUser);
router.post('/verify', userController.verifyUser);
router.get('/getall', userController.getAllUser);
module.exports = router;