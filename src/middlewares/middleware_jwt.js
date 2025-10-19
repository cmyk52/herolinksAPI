import {validate_jwt} from "../utils/jwt.js"

const auth_succes = (req, res, next) =>{
    try{
        const auth_header = req.header["authorization"]
        if(!auth_header){

        }
        next()
    }
    catch(e){
        return res.status(401).json({message:"No cuenta con credenciales validadas"})
    }

}

export default auth_succes