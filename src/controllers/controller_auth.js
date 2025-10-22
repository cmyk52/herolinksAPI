import services_auth from "../services/services_auth.js"
import {create_cookie} from "../utils/cookie.js"



// GET (verificar usuario)
export const controller_auth = async (req,res) =>{ 
    try{    
        
    const {user_name, password} = req.body
    
    
    
    const response = await services_auth(user_name, password)

    if(response.status !== 200){
        res.status(response.status).json({message:`${response.message}`})
        return
    }
   
    const is_created_cookie = await create_cookie(res, response.token)
    
    if(is_created_cookie === false){
        return res.status(401).json({message:"No fue psible crear cookie"})
    }
   

    res.status(200).json({message:`Usuario logeado con exito`, token:response.token})
    return
}
catch(e){
    res.status(500).json({message:`Se ha producido un error en el servidor, ${e}`})
    return
}

}





export default controller_auth