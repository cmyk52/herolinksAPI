import {model_account_new_password, is_valid_old_password, model_account_delete} from "../models/model_account.js"

export const services_account_patch = async (user_name, password, new_password) =>{
    // modificar password
    try{
        
        

        // Validamos que la nueva password no sea identica a la anterior
        if(password === new_password){
        
        return {"status": 401, "message":"La nueva password no puede ser igual que la anterior"}
        }

        // Comparamos que la password antigua si corresponda 
        const is_same_password = await is_valid_old_password(user_name, password, new_password)

        if(is_same_password === false){
            
            return {"status": 401, "message":"Password incorrecta"}
        }

        const insert_new_password = await model_account_new_password(user_name, new_password)


        // Si la nueva password es valida y no se repite con la anterior, actualizaremos la password.
        if(insert_new_password === 0){
            
            return {"status": 401, "message":"No fue posible ingresar nueva password"}
        }

        
        return {"status": 200, "message":"Password actualizada con exito"}

    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Error interno del servidor"})
        return
    }
}

// TODO Modificar para procesar lo solicitado del controlador
export const services_account_delete = async (req, res) =>{
    try{
       const {user_name, password} = req.body

        const is_delete = await model_account_delete(user_name, password)

        if(is_delete === 0){
            return res.status(404).json({message:"Usuario no existe"})
        }
        if(is_delete === -1){
            return res.status(401).json({message:"Password incorrecta"})
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

export default services_account_patch