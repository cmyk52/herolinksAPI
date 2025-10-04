import {model_account_new_password, is_valid_old_password, model_account_delete} from "../models/model_account.js"
    



export const controller_account_patch = async (req, res) =>{
    // modificar password
    try{
        const {user_name, password, new_password} = req.body
        console.log(password)
        if(!user_name || !password || !new_password){
            res.status(401).json({message:"Faltan datos por ingresar"})
            return
        }

        // Validamos que la nueva password no sea identica a la anterior
        if(password === new_password){
        res.status(401).json({message:"La nueva password no puede ser igual que la anterior"})
        return
        }

        // Comparamos que la password antigua si corresponda 
        const is_same_password = await is_valid_old_password(user_name, password, new_password)

        if(is_same_password === false){
            res.status(401).json({message:"Password incorrecta"})
            return
        }

        const insert_new_password = await model_account_new_password(user_name, new_password)


        // Si la nueva password es valida y no se repite con la anterior, actualizaremos la password.
        if(insert_new_password === 0){
            res.status(401).json({message:"No fue posible ingresar nueva password"})
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

export default controller_account_patch