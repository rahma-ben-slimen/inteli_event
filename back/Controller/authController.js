const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Register Function
exports.register = async (req, res) => {
    try {
        const { nom, prenom, email, password, role, num, cin} = req.body;
        if (!nom || !prenom || !email || !password || !role || !num || !cin) {
            return res.json({ error: 'Tous les champs sont obligatoires.' });
        }
        const Utilisateurexistant = await User.trouveEmail(email);
        if (Utilisateurexistant) {
            return res.json({ error: 'adresse email existe déjà.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const result = await User.cree({ nom, prenom, email, password: hashedPassword, role, num, cin});
        
        await User.cree(result.insertId, role);

        res.json({ message: 'Utilisateur enregistré avec succès !' });

    } catch (err) {
        console.error(err);
        res.json({ error: 'Server error' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByEmail(email);
        if (!user) {
            return res.json({ error: 'Identifiants invalides' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.json({ error: 'Identifiants invalides' });
        }
        const role = await User.donnerRole(user.id);
        // genera jwb
        const token = jwt.sign(
            { userId: user.id, role: role }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );
       // hethy lreponse ili bch yraj3ha lback ll front
        res.json({
            token,
            user: {
                id: user.id,
                nom: user.nom,
                prenom: user.prenom,
                email: user.email,
                role: role
            }
        });

    } catch (err) {
        console.error(err);
        res.json({ error: 'Server error' });
    }
};