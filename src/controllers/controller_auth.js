import services_auth from "../services/services_auth.js"

// GET (verificar usuario)
export const controller_auth = async (req,res) =>{ 
    try{    
        
    const {user_name, password} = req.body
    console.log(user_name,password)
    
    
    const response = await services_auth(user_name, password)

    if(response.status !== 200){
        res.status(response.status).json({message:`${response.message}`})
        return
    }

    
    res.status(200).json({message:`Usuario logeado con exito`})
    return
}
catch(e){
    res.status(500).json({message:`Se ha producido un error en el servidor, ${e}`})
    return
}

}





export default controller_auth