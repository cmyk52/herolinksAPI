import {pool} from "../config.js"

const model_get_users = async (user_name)=>{
    
    try{

      user_name = String(user_name)

        const [rows] = await pool.execute(
      `SELECT 
          u.id AS user_id, 
          u.user_name, 
          u.email, 
          COALESCE(
            JSON_ARRAYAGG(
              JSON_OBJECT(
                'id', l.id,
                'title', l.title,
                'url', l.url
              )
            ),
            JSON_ARRAY()
          ) AS links
        FROM users u
        LEFT JOIN links l ON u.id = l.user_id
        WHERE u.user_name = ?
        GROUP BY u.id, u.user_name, u.email`,
      [String(user_name)]
    )

    if (!rows || rows.length === 0) {
      return { status: 404, message: "Usuario no encontrado" }
    }

    return rows[0] 
}
catch(e){ console.log(e)
    const status = 500
    return status
    
    
}

}

export default model_get_users
