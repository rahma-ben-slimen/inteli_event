require('dotenv').config(); // Must be at the top
const express = require('express');
const cors = require('cors');
const db = require('./config/db'); // Import the database config

const app = express();
app.use(express.json());
app.use(cors());

async function testConnection() {
    try {
        const connection = await db.getConnection();
        console.log('Connexion à la base de données réussie');
        connection.release();
    } catch (err) {
        console.error('Échec de la connexion à la base de donnéesq')
    }
}

testConnection();


const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes); 


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(` Serveur fonctionnant sur le port ${PORT}`);// jebou num lport ml .env
});