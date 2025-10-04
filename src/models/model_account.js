import {pool} from "../config.js"
import {to_hash, compare_password} from "../utils/crypto.js"

export const is_valid_old_password = async (user_name, password, new_password)=>{    
    try{


        const query = 'SELECT user_name, password FROM users WHERE user_name = ?'
        const value = [user_name]
        const [rows] = await pool.execute(query, value)

        if (rows.length === 0) {
            return false 
        }

        const comparation_password = await compare_password(password, rows[0].password)
       
        return comparation_password
        }

    catch(e){
        console.error(e)
        return
    }

    }

export const model_account_new_password = async(user_name, new_password) =>{
    try{

        

        const new_password_hashed = await to_hash(new_password)
        const query = 'UPDATE users SET password = ? WHERE user_name = ?'
        const values = [new_password_hashed, user_name]
        const [result] = await pool.execute(query, values)
        
    return result.affectedRows
        
    }
    catch(e){
        console.error(e)
        return
    }

} 

export const model_account_delete = async(user_name, password) =>{
    try {
        const query = 'SELECT password FROM users WHERE user_name = ?'
        const [rows] = await pool.execute(query, [user_name])

        if(rows.length === 0) return 0

        const valid = await compare_password(password, rows[0].password)
        if(!valid) return -1  // contraseña incorrecta

        const delQuery = 'DELETE FROM users WHERE user_name = ?'
        const [result] = await pool.execute(delQuery, [user_name])
        return result.affectedRows
    } catch(e) {
        console.error(e)
        return
    }
}

export default model_account_new_password