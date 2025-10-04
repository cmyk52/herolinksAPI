import bcrypt from "bcryptjs";

export const to_hash = async (password)=> {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        return hash
    }
    catch{
        return
    }
    
}

export const compare_password = async (password, response_password) =>{
    const is_true = bcrypt.compare(password, response_password);
    return is_true
}

export default to_hash