const bd=require("../Base de données/bd")

exports.getAllEvents = (req, res) => {
  bd.query('SELECT * FROM evenement', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getEvent=(req,res) =>{
    const id= req.params.id;
    bd.query('SELECT * FROM evenement where idEvent= ?',[id],(err,results) => {
        if(err) return res.status(500).json(err);
        if(results.length === 0) return res.status(404).json({msg : 'evenement non trouver'})
        res.json(results[0]);
    })
}

//متع ال organisateur الواحد
exports.getEventOrg=(req,res) =>{
    const idE= req.params.idE;
    const idO= req.params.idO;
    bd.query('SELECT * FROM evenement where idEvent= ? and idOrg= ?',[idE,idO],(err,results) => {
        if(err) return res.status(500).json(err);
        if(results.length === 0) return res.status(404).json({msg : 'evenement non trouver'})
        res.json(results[0]);
    })
}

exports.createEvent = (req,res) => {
    const {titre, descriptions, date_E, lieu, codeC}=req.body;
    const  idOrg=req.params.idOrg;
    bd.query(
        "INSERT INTO EVENEMENT (titre, descriptions, date_E, lieu, statut, codeC, idOrg) values (?,?,?,?,?,?)",[titre, descriptions, date_E, lieu, "En attente",codeC, idOrg], (err, result) => {
            (err, result) =>{
                if (err) return res.statut(500).json(err);
                res.json({msg : "Event ajouté"})
            }
        }
    )
}

exports.updateEvent = (req, res) => {
  const id = req.params.id;
  const { titre, descriptions, date_E, lieu, codeC} = req.body;

  bd.query(
    `UPDATE evenement 
     SET titre=?, descriptions=?, date_E=?, lieu=?, codeC=?
     WHERE idEvent=?`,
    [titre, descriptions, date_E, lieu, codeC, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ msg: 'Event modifié' });
    }
  );
};

exports.deleteEvent = (req, res) => {
  const id = req.params.id;

  bd.query(
    'DELETE FROM evenement WHERE idEvent = ?',
    [id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ msg: 'Event supprimé' });
    }
  );
};

exports.updateStatusEvent = (req, res) => {
  const id = req.params.id;
  const { statut } = req.body;

    bd.query(
    'UPDATE evenement SET statut = ? WHERE idEvent = ?',
    [statut, id],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json({ msg: 'Statut modifié' });
    }
  );
};