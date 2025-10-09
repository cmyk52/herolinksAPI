const middleware_get_users = (req,res, next) =>{ 
    
    const user_name = req.params.user


        
        if (!user_name || typeof user_name !== "string" || user_name.trim() === "") {
  return res.status(400).json({ message: "Parametro usuario no fue ingresado" })
}





    
    next()
}

export default middleware_get_users 