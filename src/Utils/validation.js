export const checkValidation = (email,password)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if(!emailRegex.test(email)){
        return "Please enter a valid email address";
    }
    if(!passwordRegex.test(password)){
        return "Please enter a valid password";
    }
}