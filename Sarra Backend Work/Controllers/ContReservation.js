const bd=require("../Base de données/bd")

exports.ajoutRes=(req,res) =>{
  const {nbPlace,} =req.body;
  const idEvent=req.params.idE;
  const idPar =req.user.id;
  bd.query(
    "INSERT INTO reservation (nbPlace,idEvent, idPar, status_R) values (?,?,?,?)",[nbPlace, idEvent, idPar, "en attente"],(err,results) =>{
      if(err) return res.status(500).json(err);
      res.json({msg : "Reservation ajoutée"})
    }
  );
}

exports.updateStatusRes = (req, res) => {
  const id = req.params.id;
  const { status_R } = req.body;

  bd.query(
    'UPDATE reservation SET status_R = ? WHERE codeR = ?',
    [status_R, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ msg: 'Statut reservation modifié' });
    }
  );
};

exports.getAllRes = (req, res) => {
  bd.query('SELECT * FROM reservation', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getResrEvent=(req,res) =>{
  const idR= req.params.idR;
  const idE= req.params.idE;
  bd.query('SELECT * FROM reservation where codeR= ? and idEvent= ?',[idR,idE],(err,results) => {
    if(err) return res.status(500).json(err);
    if(results.length === 0) return res.status(404).json({msg : 'reservation non trouver'})
    res.json(results[0]);
  })
}



