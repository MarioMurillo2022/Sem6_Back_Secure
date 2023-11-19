import { db } from "../database/conn.js";

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

        res.json({ mesaje: "autenticacion exitosa" })
    } else {

        res.status(404).json({ mesaje: "autenticacion no exitosa" })
    }
};

export {
    autenticacion
}