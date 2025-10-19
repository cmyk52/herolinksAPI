import {jsonwebtoken_secret} from "../config.js"

console.log(jsonwebtoken_secret)

export const create_jwt = (payload) => {
    return jwt.sign(payload, jsonwebtoken_secret.JWT_SECRET, {
        expiresIn: jsonwebtoken_secret.JWT_EXPIRES
    })
}

export const validate_jwt = (payload) => {
    try{
    return jwt.verify(token, jsonwebtoken_secret.JWT_SECRET)
    }
    catch(e){
        return null
    }
}

export default create_jwt