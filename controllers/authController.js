import { db } from "../database/conn.js";
import jwt from 'jsonwebtoken';


const autenticacion = async (req, res) => {

    console.log("Entre a metodo de Auth");

    let params = [
        req.body.user_name,
        req.body.pass
    ]

    const sql = ` select user_name, email, id_role from tbl_users 
                    where user_name =  $1
                    and pass = $2 
                    and is_active = true` ;

    const result = await db.query(sql, params);

    if (result.length > 0) {

        const payload = {
            user_name: result[0].user_name,
            email: result[0].email,
            id_role: result[0].id_role
        }

        const token = jwt.sign(payload, 'secret', { expiresIn: '1h' });

        res.json({ token })

    } else {

        res.status(404).json({ mesaje: "autenticacion no exitosa" })
    }
};

export {
    autenticacion
}