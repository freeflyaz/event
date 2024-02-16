const express = require('express');
const router = express.Router();
const controller = require('./controller');



router.get('/events', controller.getEvents);
router.post('/events', controller.postEvents);




module.exports = router;