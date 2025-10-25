import {pool} from "../config.js"

// GET ITEMS PROFILE

export const model_profile_get = async(user_name) =>{
    try{
        const query = 'SELECT title, url FROM users u JOIN links l ON u.id = l.user_id WHERE u.user_name = ?'
        const value = [user_name]
        const [rows] = await pool.execute(query,value)
        if(rows.length === 0){
            return {"status":404, "message":"No existen links para este usuario"}
        }
        return {"status":200, "data":rows}
    }
    catch(e){
        console.error(e)
        return {"status":500, "message":"Error interno del servidor"}
    }
}


// INSERT ITEMS

export const model_profile_new_link = async(user_name, title, url) =>{
    try{
        const values = [title, url, user_name]
        const query = 'INSERT INTO links (user_id, title, url) SELECT u.id, ?, ? FROM users u WHERE u.user_name = ?'
        const [rows] = await pool.execute(query, values)
        if(rows.affectedRows != 1){
            return {"status":401, "message":"No fue posible insertar el nuevo link"}
        }
        return {"status":200, "message":"Link agregado con exito"}
    }
    catch(e){
        console.error(e)
        return {"status":500, "message":"Error interno del servidor"}
    }


}

// DELETE ITEMS

export const model_profile_delete_link = async() =>{

    return
}



export const model_profile_delete_pic = async() =>{

    return
}



export default model_profile_get