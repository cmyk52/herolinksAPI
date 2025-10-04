export const middleware_auth = (req,res, next) =>{ 
    const {user_name, password} = req.body
        console.log(user_name,password)
        if(!user_name || !password){
        return res.status(400).json({message:"No se ha ingresado usuario o password"})
    }
    next()
}

export default middleware_auth