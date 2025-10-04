import { pool } from "../config.js"

const model_register = async (user_name, hashed_password, email) =>{
    try{
        const sql = 'INSERT INTO users (user_name, password, email) VALUES(?,?,?)'
        const [result] = await pool.execute(sql, [user_name, hashed_password, email])
        console.log(result)
        return result
    }
    catch(e){
        if(e.code === "ER_DUP_ENTRY"){
            console.log(e.code)
        }
        return e
    }
}

export default model_register