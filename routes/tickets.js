const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


router.get('/tickets', ticketsCtrl.create);
router.get('/:id/tickeet', ticketsCtrl.addTicket);


module.exports = router;