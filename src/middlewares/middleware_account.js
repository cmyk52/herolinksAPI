const middleware_account = (req,res, next) =>{ 
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

export default middleware_account