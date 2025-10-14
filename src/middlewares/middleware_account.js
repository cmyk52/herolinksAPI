const middleware_account = (req,res, next) =>{ 

    try{
    const method = req.method
    const {user_name, password, new_password} = req.body


    if(method === 'PATCH'){        
        if(!user_name || !password || !new_password){
        return res.status(400).json({message:"No se ha ingresado usuario, password y nueva password"})
    }
    }
    if(method === 'DELETE'){
        if(!user_name || !password){
        return res.status(400).json({message:"No se ha ingresado usuario o password"})
    }
    }




    
    next()
}
catch(e){
    return res.status(500).json({message:"Error interno del servidor"})
}
}

export default middleware_account