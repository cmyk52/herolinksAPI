import services_get_users from "../services/services_get_user.js"



  const  controller_get_user = async (req,res) =>  { 

    try{
    const user_name = req.params.user
    const get_users = await services_get_users(user_name)


    if(get_users.status !== 200){
      res.status(get_users.status).json({message:`${get_users.message}`})
      return
    }

    res.status(200).json(get_users.data)
      
    return 
    
}
   catch (error) {
    console.error("Error en controller_get_user:", error);
    return res.status(500).json({ message: "Error interno en el servidor" });
  
}
    
    
   
}

export default controller_get_user