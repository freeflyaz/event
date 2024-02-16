const express = require('express');
const router = express.Router();
const controller = require('./controller');



router.get('/', controller.getEvents);
//router.post('/', controller.postEvents);




module.exports = router;