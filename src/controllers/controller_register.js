import services_register from "../services/services_register.js"
// POST (crear usuario)

const controller_register = async (req,res) =>{
    try{

    // Sanitizando los inputs
    let {user_name, email, password} = req.body
      user_name = String(user_name).trim().toLocaleLowerCase()
    email = String(email).trim().toLocaleLowerCase()
    password = String(password).trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "El formato de correo electrónico no es válido" });
        }
    
    // Solicitud al servicio
    const created_user = await services_register(user_name, email, password)

    if(created_user.status !== 200){
        res.status(created_user.status).json(created_user.message)
        return
    }

    res.status(200).json({message:"Usuario creado con exito"})
    return

    
}
    
    catch(e){
        res.status(500).json({message:"Ha ocurrido un error en el servidor"})
        
        return 
    }
}

export default controller_register