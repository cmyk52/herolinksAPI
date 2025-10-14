import {services_account_patch, services_account_delete} from "../services/services_account.js"
    



export const controller_account_patch = async (req, res) =>{
    // modificar password
    try{
        const {user_name, password, new_password} = req.body
        
        const res_new_password = await services_account_patch(user_name, password, new_password)

        if(res_new_password.status !== 200){
            
            res.status(res_new_password.status).json({message:`${res_new_password.message}`})
            return
        }
        
        res.status(200).json({message:"Password actualizada con exito"})
        return

    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Error interno del servidor"})
        return
    }
}



export const controller_account_delete = async (req, res) =>{
    // borrar cuenta
    try{
       const {user_name, password} = req.body

        const res_delete_services = await services_account_delete(user_name, password)

        if(res_delete_services.status !== 200){
            res.status(res_delete_services.status).json({message:res_delete_services.message})
            return
        }


        res.status(200).json({message:"Usuario borrado exitosamente"})
        return
    }
     catch(e){
        console.log(e)
        res.status(500).json({message:"Error interno del servidor"})
        return
    }
}

export default controller_account_patch