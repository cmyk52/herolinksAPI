import model_register from "../models/model_register.js"
import to_hash from "../utils/crypto.js"
// POST (crear usuario)

const controller_register = async (req,res) =>{
    try{

    // Sanitizando los inputs
    let {user_name, email, password} = req.body
    user_name = String(user_name).trim().toLocaleLowerCase()
    email = String(email).trim().toLocaleLowerCase()
    password = String(password).trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!user_name || !email || !password){
        return res.status(404).json({message:"No se ingresaron todos los datos"})
    }

    if (!emailRegex.test(email)) {
                return res.status(400).json({ message: "El formato de correo electrónico no es válido" });
            }


    // SALT
    const hashed_password = await to_hash(password)
   

    // Si todo esta ok, enviar el post con nuevo usuario
    const response = await model_register(user_name, hashed_password, email)
    console.log(response)
    
    // Entrada duplicada
    if(response.code === "ER_DUP_ENTRY"){
        res.status(400).json({message:"Usuario ya existe"})
        return
    }


    res.status(200).json({message:"Usuario creado con exito"})

    
}
    
    catch(e){
        console.log(e)
        
        return 
    }
}

export default controller_register