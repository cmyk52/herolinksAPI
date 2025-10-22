import {validate_jwt} from "../utils/jwt.js"

export const auth_success = (req, res, next) =>{
    // TO DO:Validar header, ya que thunderclient lo recibe como undefined
    try{
        const token_auth = req.cookies.token

        if(!token_auth){
            return res.status(401).json({message:"Usuario no logeado"})
        }
        
        const payload = validate_jwt(token_auth)

        if(!payload){
            return res.status(401).json({message:"Token no es valido"})
        }

        req.user = payload
        next()
    }
    catch(e){
        
        return res.status(500).json({ message: "Error interno al validar token" });
    }

}

export default auth_success