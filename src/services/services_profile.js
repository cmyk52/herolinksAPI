import { model_profile_delete_link, model_profile_new_link } from "../models/model_profile.js"
import {model_profile_get} from "../models/model_profile.js"

// GET ITEMS PROFILE

export const services_profile_get = async (user_name) =>{
    try{
        const data_get_model = await model_profile_get(user_name)
        if(data_get_model.status !== 200){
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



export const services_profile_new_link = async(user_name, title, url) =>{
    try{
        const model_insert_link = await model_profile_new_link(user_name, title, url)
        if(model_insert_link.status !== 200){
            return {"status":model_insert_link.status, "message":`${model_insert_link.message}`}
        }
        return {"status":200, "message":`${model_insert_link.message}`}
    }
    catch(e){
        console.error(e)
        return {"status":500, "message":"Error interno del servidor"}
    }

}

// DELETE ITEMS PROFILE

export const services_profile_delete_link = async(user_name, id) =>{
    try{    
    const model_delete_link = await model_profile_delete_link(user_name, id)
    
    if(model_delete_link !== 200){
    return {"status":model_delete_link.status, "message":`${model_delete_link.message}`}
    }
    return {"status":200, "message":`${model_insert_link.message}`}
}

    catch(e){
        console.error(e)
        return {"status":500, "message":"Error interno del servidor"}
    }
}


