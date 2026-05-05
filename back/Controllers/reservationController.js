const Reservation = require('../models/reservationModel');
exports.creerReservation = (req, res) => {
  Reservation.ajouterReservation(req.body, (err) => {
    if (err) return res.json(err);
    res.json('Réservation réussie');
  });
};
