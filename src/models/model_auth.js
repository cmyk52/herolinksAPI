import {pool} from "../config.js"

export const model_auth = async (user_name)=>{

    
    try{
    const [rows] = await pool.execute('SELECT user_name, password FROM users WHERE user_name = ?', [user_name])
    if(!rows || rows.length == 0){
        const status = 404
        return status
    }
    return rows[0]
    }
    catch(e){ console.log(e)
        return e
    }

}




export default model_auth


