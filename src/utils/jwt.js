import {jsonwebtoken_secret} from "../config.js"
import jwt from "jsonwebtoken"



export const create_jwt = async (payload) => {

    try{
        if(!payload){

            return false
        }
    return jwt.sign(payload, jsonwebtoken_secret.JWT_SECRET, {
        expiresIn: jsonwebtoken_secret.JWT_EXPIRES
    })}
    catch(e){
        return null
    }

}

export const validate_jwt = (payload) => {
    try{
    return jwt.verify(payload, jsonwebtoken_secret.JWT_SECRET)
    }
    catch(e){
        return null
    }
}

export default create_jwt