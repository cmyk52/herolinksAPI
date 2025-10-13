const middleware_register = (req,res,next) => {
    try{
    let {user_name, email, password} = req.body
  

    if(!user_name || !email || !password){
        return res.status(400).json({message:"No se ingresaron todos los datos"})
    }



            next()
    }
    catch(e){
        res.status(500).json({message:`Se ha producido un error en el servidor, ${e}`})
    }
    
}
export default middleware_register