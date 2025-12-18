import  {sanitizer}  from "../utils/sanitizer.js"
export const middleware_auth = (req,res, next) =>{ 
    
    const sanitized_body = sanitizer(req.body)
        
        if(!sanitized_body.user_name || !sanitized_body.password){
        return res.status(400).json({message:"No se ha ingresado usuario o password"})
    }
    req.body = sanitized_body
    next()
}

export default middleware_auth