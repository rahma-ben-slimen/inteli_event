const db = require('../config/db');

exports.ajouterReservation = (d, cb) => {

  db.query(
    'SELECT prixBillet FROM evenment WHERE idEvent = ?',
    [d.idEvent],
    (Err, resultat) => {

      if (Err) return cb(Err);

      const total = resultat[0].prixBillet * d.nbPlace;

      db.query(
  'INSERT INTO reservations (dateR, nbPlace, billetN, prixB, qte, status_R, idEvent) VALUES (?, ?, ?, ?, ?, ?, ?)',
  [
    d.dateR,
    d.nbPlace,
    d.billetN,
    total,
    d.nbPlace,          
    'pending',          
    d.idEvent
  ],
  cb
);

    }
  );
};
