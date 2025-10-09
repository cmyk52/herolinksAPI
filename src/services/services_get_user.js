  import model_get_users from "../models/model_get_user.js"

   const services_get_users = async (user_name) =>{

  try{

    const response_model = await model_get_users(String(user_name))
    console.log(response_model)

    if (response_model .status !== 200) {
      return {"status": response_model.status, "message":"Usuario no existe"}
    }

    

    return {"status":response_model.status, data: response_model.data }

    }
    catch(e){
        console.log(e)
        return {"status": 500, "message":"Error interno en el servidor"}
    }

  }

export default services_get_users