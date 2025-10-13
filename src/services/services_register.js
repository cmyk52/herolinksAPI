import model_register from "../models/model_register.js"
import to_hash from "../utils/crypto.js"

const services_register = async (user_name, email, password) =>{
    try{
    // SALT
    const hashed_password = await to_hash(password)
   

    // Si todo esta ok, enviar el post con nuevo usuario
    const response = await model_register(user_name, hashed_password, email)
    console.log(response)
    
    // Entrada duplicada
    if(response.code === "ER_DUP_ENTRY"){
        
        return {status:400, message:"Usuario ya existe"}
    }
    return {status:200, message:"Usuario creado con exito"}
}
catch(e){
  
    return {status:500, message:"Ha ocurrido un error en el servidor"}
}
}

export default services_register