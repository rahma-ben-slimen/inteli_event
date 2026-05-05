require("dotenv").config();
const bd= require("../Base de données/bd");
const even = require("../Routes/EventRoute");

const PORT = process.env.PORT;

bd.connect((err) => {
    if(err){
        console.error('Erreur connection BD :' , err);
        return;
    }
    console.log('connecté à MySQL');

    even.listen(PORT , () => {
    console.log(" Service connect sur le port "+ PORT);
    });
});






//Nada Work
/*const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestion_event'
});

app.post('/api/register', async (req, res) => {
    const { nom, prenom, email, password } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const sql = "INSERT INTO utilisateur (nom, prenom, email, password) VALUES (?, ?, ?, ?)";
    db.query(sql, [nom, prenom, email, hashedPassword], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ message: "Cet email est déjà utilisé !" });
            }
            return res.status(500).json(err);
        }
        res.status(201).json({ message: "Compte créé avec succès !" });
    });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM utilisateur WHERE email = ?";
    
    db.query(sql, [email], async (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0) return res.status(404).json({ message: "Compte inexistant !" });

        const user = results[0];
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            res.status(200).json({ message: "Connexion réussie !", user });
        } else {
            res.status(401).json({ message: "Mot de passe incorrect !" });
        }
    });
});

app.listen(3000, () => {
    console.log("Backend connecté sur le port 3000");
});*/