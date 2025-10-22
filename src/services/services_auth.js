
import { create_jwt } from "../utils/jwt.js"
import {model_auth} from "../models/model_auth.js"
import {compare_password} from "../utils/crypto.js"

const services_auth = async(user_name, password)=>{
    try{


        
    const response = await model_auth(user_name, password)

    
    if(response === 404){
        return {"status":404, "message":"Usuario no encontrado"}
    }
    
    //TODO: validar password con hash 

    const is_valid = await compare_password(password, response.password);
    console.log(is_valid)
    
    if(is_valid != true){
        return {"status":400, "message":"Usuario o password incorrectos"}
    }

    // TODO: Crear token jwt
    const payload = {"user_name":user_name}
    const token = await create_jwt(payload)
    if(token === false){
        return {"status":500, "message":"No se ha enviado payload"}
    }
    if(!token){
        return {"status":500, "message":"Error interno al crear tokenAuth"}
    }
    console.log(token)

    return {"status":200, "message":"Usuario validado con exito", token}
    }
    catch(e){
        return {"status":500, "message":"Error interno en el servidor"}
}
}

export default services_auth