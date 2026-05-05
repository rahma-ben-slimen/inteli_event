const bd=require("../Base de données/bd")

exports.getAllUsers=(req,res)=>{
    bd.query(
        "SELECT * FROM utilisateur",(err, results)=>{
        if(err) return res.status(500).json(results);
        res.json(results);
    }
    );
};

exports.getUser=(req,res) =>{
    const id= req.params.id;
    bd.query('SELECT * FROM utilisateur where id=?',[id],(err,results) => {
        if(err) return res.status(500).json(err);
        if(results.length === 0) return res.status(404).json({msg : 'Utilisateur non trouvé'})
        res.json(results[0]);
    })
}

exports.updateUser=(req,res)=>{
    const id=req.params.id;
    const{nom,prenom,roles, status_compte}=req.body;
    bd.query(
        "UPDATE utilisateur set nom=?, prenom=?, roles=?, status_compte=? WHERE id=?",[nom, prenom, roles, status_compte, id],(err,results)=>{
            if(err) return res.status(500).json(err);
            res.json({msg : "Les informations d'utilisateur sont modifiés"});
        }
    );
}

exports.deleteUser=(req,res)=>{
    const id=req.params.id;
    bd.query(
        "DELETE FROM utilisateur where id=?",[id],(err,results)=>{
            if (err) return res.status(500).json(err);
            res.json({msg : "Utilisateur est supprimé avec succés"});
        }
    );
};

exports.updateStatus=(req,res)=>{
    const id=req.params.id;
    const{status_compte}=req.body;
    bd.query(
        "UPDATE utilisateur set status_compte=? where id=?",[status_compte,id],(err,results)=>{
            if (err) return res.status(500).json(err);
            
            res.status(200).json({
                msg : "Status du compte modifié"
            });
        }
    );
};
