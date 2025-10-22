import {services_insert_profile_pic} from "../services/services_profile.js"

export const controller_profile_get = async (req,res)=>{
    res.status(200).json({message:"Logeado con exito"})
    return
}

// INSERT ITEMS

export const controller_profile_patch = async(req, res) =>{
    // TYPES: //
    // Profile_pic (user_name, profile_pic)
    // Profile_color (user_name, profile_color)
    // New_link (user_name, icon, title, url, link_color)

try{    
    const {type, user_name, profile_pic, profile_color, icon, title, url, link_color} = req.body
    
    switch(type){
    case "new_link": 
    case "profile_pic": return profile_pic_function(user_name, profile_pic)
    case "profile_color": 
        
    default: res.status(400).json({message:"Operacion invalida"}) 
    return
    }



}

catch(e){
    res.status(500).json({message:"Ha ocurrido un error en el servidor"})
    return
}

}

async function profile_pic_function(user_name, profile_pic) {
    try{
    const new_profile_pic = await services_insert_profile_pic(user_name, profile_pic)
    if(new_profile_pic !== 200){
        res.status(new_profile_pic.status).json({message:`${new_profile_pic.message}`})
    }
    return  res.status(200).json({message:"Se inserto imagen de perfil exitosamente"})
    }
    catch(e){
        
        return res.status(500).json({message:"Ha ocurrido un error en el servidor"})
    }

    
}


// DELETE ITEMS


export const controller_profile_delete = async(req, res) =>{
    // TYPES: 
    // Delete_profile_pic (user_name, profile_pic)
    // Delete_link (user_name, url)

try{

        const {type, user_name, profile_pic, url} = req.body

    switch(type)
    {
        case "delete_profile_pic": 
        
        const response_delete_pic = await model_profile_delete_pic(user_name, profile_pic) 
        res.status(200).json({message:"Imagen de perfil eliminada con exito"})
        return 
        
        case "delete_link": 

        const response_delete_link = await model_profile_delete_link(user_name, url) 
        res.status(200).json({message:"Enlace eliminado con exito"})
        return

        //todo
        default: res.status(400).json({message:"Operacion invalida"}) 
        return
    }

}

catch(e){
    res.status(500).json({message:"Ha ocurrido un error en el servidor"})
    return
}


    
    
}

export default controller_profile_patch