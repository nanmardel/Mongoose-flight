
const Flight = require("../model/flight");
const Ticket = require("../model/ticket");


module.exports = {
    index,
    new: newFlight,
    create,
    show,
}
function show(req, res) {
    // const newFlight = new Flight();
    // const departureTime = newFlight.departure;
    // let timeZoneOffset = departureTime.getTimezoneOffset()*60000;
    // const departureDate = new Date(departureTime - timeZoneOffset).toISOString()
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets){
            res.render('flights/show',{title: 'Flight Detail', flight, tickets}); // departureDate
        });
    });
  }


function create(req, res) {
    const flight = new Flight (req.body);
    flight.save(function(err){
        if (err) return res.render('flights/new');
        res.redirect('/flights/new')
    });
}


function newFlight(req, res) {
    // const newFlight = new Flight();
    // const departureTime = newFlight.departs;
    // let timeZoneOffset = departureTime.getTimezoneOffset()*60000;
    // const departureDate = new Date(departureTime - timeZoneOffset).toISOString()
    res.render('flights/new');
    
}


function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights});
    });
};





