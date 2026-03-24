//lfile hetha job te3ou enu yenteracti maa lbase ye5ou wala ysob feha
const db = require('../config/db');// lappelle taa db

class User {

    


    static async trouveEmail(email) {
            const sql = 'SELECT id, nom, prenom, email, password, 'participant' as role FROM participant WHERE email = ?
            UNION
            SELECT id, nom, prenom, email, password, 'organisateur' as role FROM organisateur WHERE email = ?';
            const [rows] = await db.query(sql, [email]);
            return rows[0]; 
        }

    static async cree(userData) {
        const { nom, prenom, email, password, role, num, cin } = userData;
        let sql;// nedwlariw lbar lbara ml if bch tkun global 
        if (role === 'participant') {
            sql = 'INSERT INTO participant (idPar) VALUES (?)';
        } else if (role === 'organisateur') {
            sql = 'INSERT INTO organisateur (idOrg) VALUES (?)';
        } else {
            return;
        }
        await db.query(sql, [userId]);
    }

}
