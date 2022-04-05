
var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// router.get("/", function (req, res, next) {
//   res.send("respond with a resource");
// });

router.get('/', flightsCtrl.index);
// GET /flights/new
router.get('/new', flightsCtrl.new);

router.post('/', flightsCtrl.create);

router.get('/:id', flightsCtrl.show);


module.exports = router;
