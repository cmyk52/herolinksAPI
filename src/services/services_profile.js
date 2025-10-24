import {model_profile_delete_pic, model_profile_delete_link } from "../models/model_profile.js"
import {model_profile_get} from "../models/model_profile.js"

// GET ITEMS PROFILE

export const services_profile_get = async (user_name) =>{
    try{
        const data_get_model = await model_profile_get(user_name)
        if(data_get_model.status != 200){
        return {"status":data_get_model.status, "message":"Usuario no existe o no tiene informacion"}
        }
        return { "status":200, "data":data_get_model.data}
    }
    catch(e){
        console.error(e)
        return {"status":500, "message":"Error interno del servidor"}
    }
}

// INSERT ITEMS PROFILE

export const services_insert_profile_pic = async() =>{

    return
}

export const services_profile_color = async() =>{

    return
}

export const services_profile_new_link = async() =>{

    return
}

// DELETE ITEMS PROFILE

export const services_delete_profile_delete_link = async() =>{

    return
}



export const sservices_delete_profile_pic = async() =>{

    return
}
