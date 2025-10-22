export const create_cookie = async (res, token) =>{
    try{
        const cookie = res.cookie("token", token,{
        httpOnly:true,
        secure:false,
        sameSite: "strict",
        maxAge:10000*60
    })
    return true
    }
    catch(e){
        console.error("Error al crear cookie:", e.message);
        return false
    }

    

}

export const validate_cookie = (req) =>{
    try{
        const token = req.cookies.user;
        
        if(!token){
            return false
        }
        return true
    }
    catch(e){
        console.error("Error al validar cookie:", e.message);
        return false
    }


}

export default create_cookie