const Ticket = require('../model/ticket');
const Flight = require('../model/flight');

module.exports = {
    create, 
    addTicket,
}

function create(req, res) {
    Ticket.create(req.body, function (err, ticket){
        res.redirect('/tickets/new');
    });
}


function addTicket(req, res) {
    let seat = req.body.seat;
    let price = req.body.price;
    let flight = req.params.id;
    const ticket = new Ticket({seat, price, flight});
    ticket.save(function(err){
        if(err) return res.render('flights/new');
        res.redirect(`/flights/${req.params.id}`);
    });
}