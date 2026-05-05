const bd=require("../Base de données/bd")

exports.getAllCat= (req,res) => {
    bd.query('SELECT * FROM categorie', (err,results) => {
        if(err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.getCat=(req,res) =>{
    const idCat= req.params.idCat;
    bd.query('SELECT * FROM categorie where codeC= ?',[idCat],(err,results) => {
        if(err) return res.status(500).json(err);
        if(results.length === 0) return res.status(404).json({msg : 'categorie non trouver'})
        res.json(results[0]);
    })
}

exports.createCat=(req,res) =>{
    const {nomCat} =req.body;
    bd.query(
        "INSERT INTO categorie (nomCat) values (?)",[nomCat],(err,results) =>{
            if(err) return res.status(500).json(err);
            res.json({msg : "categorie ajoutée"})
        }
    );
}

exports.upddateCat=(req,res) => {
    const codeC =req.params.codeC;
    const {nomCat} =req.body;
    bd.query(
        "UPDATE categorie SET nomCat = ? where codeC=?",[nomCat, codeC],(err,results) => {
            if (err) return res.status(500).json(err);
            res.json({msg : 'categorie modifiée'});
        }
    );
}

exports.deleteCat=(req,res) => {
    const codeC =req.params.codeC;
    const {nomCat} =req.body;
    bd.query(
        "DELETE FROM categorie where codeC=?",[codeC],(err,results) => {
            if (err) return res.status(500).json(err);
            res.json({msg : 'categorie supprim'});
        }
    );
}
