
export function validateRegister(userData){
    const  errors ={};

    if(!userData.username.trim()){
        errors.username = "Username is required";
    }
    else if(
        userData.username.length <3 || 
        userData.username.length >20){
            errors.username ="username must be 3-20 characters"
        }
// email
     if (!userData.email.trim()) {
        errors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)
    ) {
        errors.email = "Enter a valid email";
    }

 // Password   
     if (!userData.password) {
        errors.password = "Password is required";
    } else if (userData.password.length < 6) {
        errors.password = "Password must be at least 6 characters";
    }

// Full name
    if (!userData.fullName.trim()) {
        errors.fullName = "Full name is required";
    } else if (userData.fullName.length < 2) {
        errors.fullName = "Full name must be at least 2 characters";
    }

    return errors;
};



