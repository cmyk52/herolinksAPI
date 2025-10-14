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

           if(insert_new_password  === undefined){
            return {"status":500, "message":"Error interno del servidor"}
        }
        
        return {"status": 200, "message":"Password actualizada con exito"}

    }
    catch(e){
        console.log(e)

        return {"status":500, "message":"Error interno del servidor"}
    }
}


export const services_account_delete = async (user_name, password) =>{
    try{
       
        const is_delete = await model_account_delete(user_name, password)

        if(is_delete === 0){
            return {"status":404,"message":"Usuario no existe"}
        }
        if(is_delete === -1){
            return {"status":401, "message":"Password incorrecta"}
        }
        if(is_delete === undefined){
            return {"status":500, "message":"Error interno del servidor"}
        }

        return {"status":200,"message":"Usuario borrado exitosamente"}
    }
     catch(e){
        console.log(e)
 
        return {"status":500, "message":"Error interno del servidor"}
    }
}

export default services_account_patch