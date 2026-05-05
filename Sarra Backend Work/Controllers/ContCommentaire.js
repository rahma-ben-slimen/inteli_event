const bd=require("../Base de données/bd")

exports.getAllCom = (req, res) => {
  bd.query('SELECT * FROM commentaire', (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.getCom=(req,res) =>{
    const id1= req.params.id1;
    const id2= req.params.id2;

    bd.query('SELECT * FROM commentaire where idEvent= ? and idPar= ?',[id1, id2],(err,results) => {
        if(err) return res.status(500).json(err);
        if(results.length === 0) return res.status(404).json({msg : 'commentaire non trouver'})
        res.json(results[0]);
    })
}

exports.createCom=(req,res) =>{
    const {contenu} =req.body;
    const id1= req.params.id1;
    const id2= req.params.id2;

    bd.query(
        "INSERT INTO commentaire (idEvent, idPar, contenu) values (?,?,?)",[id1,id2, contenu],(err,results) =>{
            if(err) return res.status(500).json(err);
            res.json({msg : "commentaire ajoutée"})
        }
    );
}

exports.deleteCom=(req,res) => {
    const id1= req.params.id1;
    const id2= req.params.id2;
    bd.query(
        "DELETE FROM commentaire where idEvent=? and idPar=?",[id1,id2],(err,results) => {
            if (err) return res.status(500).json(err);
            res.json({msg : 'commentaire supprimée'});
        }
    );
}