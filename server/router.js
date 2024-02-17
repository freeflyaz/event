const express = require('express');
const router = express.Router();
const controller = require('./controller');



router.get('https://api-14yn.onrender.com/events', controller.getEvents);
router.post('https://api-14yn.onrender.com/events', controller.postEvents);




module.exports = router;