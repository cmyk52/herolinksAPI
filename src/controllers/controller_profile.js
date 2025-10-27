import { services_profile_get, services_profile_new_link, services_profile_delete_link} from "../services/services_profile.js"

export const controller_profile_get = async (req,res)=>{
    try{
        
        const {user_name} = req.user
       
        const profile_get_data = await services_profile_get(user_name)
        console.log(profile_get_data.status + "controler")
        if(profile_get_data.status !== 200){
        res.status(profile_get_data.status).json({message:profile_get_data.message})
        return
        }
        return res.status(200).json({message:"Logeado con exito", "data": profile_get_data})
        
    }
    catch(e){
        console.error(e)
        return res.status(500).json({message:"Error interno del servidor controller"})
    
    }
    
}

// INSERT ITEMS

export const controller_profile_patch = async(req, res) =>{
    // TYPES: //
    // New_link (user_name, title, url)

try{    
    const {type, user_name,  title, url} = req.body
    
    switch(type){
    case "new_link": return insert_new_link(res, user_name, title, url ) 
       
    default: res.status(400).json({"message":"Operacion invalida"}) 
    return
    }



}

catch(e){
    res.status(500).json({"message":"Ha ocurrido un error en el servidor"})
    return
}}

const insert_new_link = async (res, user_name, title, url) =>{
    try{
        const services_insert_link = await services_profile_new_link(user_name, title, url)
        if(services_insert_link.status !== 200){
            return res.status(services_insert_link.status).json({message:`${services_insert_link.message}`})
        }
        res.status(200).json({message:"Link agregado correctamente"})
        return 
    }
    catch(e){
        console.error(e)
        return res.status(500).json({message:"Error interno en el servidor"})
    }
}



// DELETE ITEMS


export const controller_profile_delete = async(req, res) =>{
    // TYPES: 
    // Delete_link (user_name, id del link)

try{

        const {type, user_name, id} = req.body

        

    switch(type)
    {
        
        case "delete_link": return await profile_delete_old_link(res, user_name, id);
       
        default: res.status(400).json({message:"Operacion invalida"}) 
        return
    }

}

catch(e){
    res.status(500).json({message:"Ha ocurrido un error en el servidor"})
    return
}


    
}

const profile_delete_old_link = async (res, user_name, id) =>{
    try{
        const services_delete_link = await services_profile_delete_link(user_name, id)   
        if(!services_delete_link.status !== 200){
            return res.status(services_delete_link.status).json({message:`${services_delete_link.message}`})
        }
        res.status(200).json({message:"Enlace eliminado con exito"})
        return
    }
    catch(e){
        console.error(e)
        return res.status(500).json({message:"Error interno en el servidor"})
    }}

export default controller_profile_patch