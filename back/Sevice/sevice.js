require("dotenv").config();
const bd = require("../Base de données/bd");
const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

console.log("reservation route loaded");

bd.connect((err) => {
    if (err) {
        console.error('Erreur connection BD :', err);
        return;
    }

    console.log('connecté à MySQL');

    app.listen(PORT, () => {
        console.log("Service connecté sur le port " + PORT);
    });
});
