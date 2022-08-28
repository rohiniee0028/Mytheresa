export const validation = (values)=>{
    let errors = {};
    
    if(!values.firstName){
        errors.fullName = "First name is required"
    }
    if(!values.lastName){
        errors.lastName = "Last name is required"
    }
    if(!values.email){
        errors.email = "Email is required"
    }else if(!/\$+@\$+\.\$+/.test(values.email)){
        errors.email = "Email is invalid"
    }
    if(!values.pwd){
        errors.pwd = "Password is required"
    }else if(values.pwd.length < 5){
        errors.pwd = "Password must be more than five"
    }

    return errors;
}