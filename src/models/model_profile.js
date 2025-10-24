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

export const model_profile_pic = async() =>{

    return
}

export const model_profile_color = async() =>{

    return
}

export const model_profile_new_link = async() =>{

    return
}

// DELETE ITEMS

export const model_profile_delete_link = async() =>{

    return
}



export const model_profile_delete_pic = async() =>{

    return
}



export default model_profile_pic