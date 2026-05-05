const db = require('../config/db');

exports.addComment = (d, cb) => {
  db.query(
    'INSERT INTO commentaire (contenu, dateC, idEvent, idPar) VALUES (?, ?, ?, ?)',
    [d.contenu, d.dateC, d.idEvent, d.idPar],
    cb
  );
};
exports.getCommentsByEvent = (id, cb) => {
  db.query(
    'SELECT * FROM commentaire WHERE idEvent = ? ORDER BY dateC DESC',
    [id],
    cb
  );
};
