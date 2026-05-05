const express = require('express');
const router = express.Router();

const controller = require('..reservationController.js');

router.post('/reserve', controller.creerReservation);

module.exports = router;
