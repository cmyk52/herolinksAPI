export const middleware_profile_get = (req,res, next) =>{
    try{
        let  {user_name} = req.user
        console.log(user_name)
        user_name = String(user_name).trim().toLowerCase()
        
        


       
        if(!user_name || user_name.length === 0){
            return res.status(400).json({message:"No se han ingresado un usuario o no se ha logeado"})
        }
        req.user.user_name = user_name;
        
        next()

        
    }
    catch(e){
        console.error(e)
        return res.status(500).json({message:`Error interno del servidor middleware`})
    }
}


export const middleware_profile_patch = (req,res,next) =>{
    
    try{
        let {type,  title, url} = req.body
        let {user_name} = req.user

        if (type)          type = String(type).trim().toLowerCase()
        if (user_name)     user_name = String(user_name).trim().toLowerCase()
        if (title)         title = String(title).trim()
        if (url)           url = String(url).trim()


        const types_cases = ["new_link"]

        if(!type || !types_cases.includes(type) ){
            return res.status(400).json({message:"No se han ingresado el tipo de caso correcto en los parametros"})
        }

        if(type === "new_link" && (!user_name ||  !title || !url)){
            return res.status(400).json({message:"No se han ingresado todos los parametros"})
        }

        // Envio de los parametros sanitizados al controlador.
        req.body = { type, user_name,  title, url };
        next()
    }
    catch(e){
        console.error(e)
        return res.status(500).json({message:"Error interno del servidor / middleware"})
    }

}


export const middleware_profile_delete = (req,res, next)=>{


    try{
        let {type, user_name, profile_pic, url} = req.body

        if (type)          type = String(type).trim().toLowerCase()
        if (user_name)     user_name = String(user_name).trim().toLowerCase()
        if (url)           url = String(url).trim().toLowerCase()
        if (profile_pic)   profile_pic = String(profile_pic).trim().toLowerCase()
 
        const types_cases = ["delete_profile_pic", "delete_link"]

        if(!type || !types_cases.includes(type) ){
            return res.status(400).json({message:"No se han ingresado el tipo de caso correcto en los parametros"})
        }   

        if(type === "delete_profile_pic" && (!user_name || !profile_pic)){
            return res.status(400).json({message:"No se han ingresado todos los parametros"})
        }
        if(type === "delete_link" && (!user_name || !url)){
            return res.status(400).json({message:"No se han ingresado todos los parametros"})
        }
        req.body = {type, user_name, profile_pic, url}
        next()
        

    }
    catch(e){
        
        return res.status(500).json({message:"Error interno del servidor"})
    }


}

export default middleware_profile_patch