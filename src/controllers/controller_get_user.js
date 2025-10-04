import model_get_users from "../models/model_get_user.js"



  const  controller_get_user = async (req,res) =>  { 
    try{const user_name = req.params.user
    

    if(user_name === undefined || user_name.trim() === ""){
      res.status(404).json({message:"No se ha ingresado usuario"})
      return
    }

    const response = await model_get_users(String(user_name))


    if (response.status === 404) {
      return res.status(404).json(response)
    }

    res.status(200).json(response)
    
    return
}
   catch (error) {
    console.error("Error en controller_get_user:", error);
    return res.status(500).json({ message: "Error interno en el servidor" });
  
}
    
    
   
}

export default controller_get_user