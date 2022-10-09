function validator (password){
    let length = password.length;
    let invalid = false;
    let onlyLettersAndDigits = true;
    let digits = 0;
    if (length<6 || length >10){
        invalid = true;
        console.log("Password must be between 6 and 10 characters");
    }
    for (let i = 0; i<length ; i++){
        if ((password[i].charCodeAt()<48 || password[i].charCodeAt()>57) && (password[i].charCodeAt() < 65 || password[i].charCodeAt()>90) && (password[i].charCodeAt() <97 || password[i].charCodeAt()>122)){
            onlyLettersAndDigits = false;
            invalid = true;
        }
    }
    if (onlyLettersAndDigits == false){
        console.log("Password must consist only of letters and digits");
    }

    for (let j = 0; j<length; j++){
        if (password[j].charCodeAt()>=48 && password[j].charCodeAt()<=57){
            digits++;
        }
    }
    if (digits < 2){
        invalid=true;
        console.log("Password must have at least 2 digits");
    }

    // "Password must be between 6 and 10 characters"

    // · "Password must consist only of letters and digits"
    
    // · "Password must have at least 2 digits"
    if (invalid == false){
        console.log("Password is valid")
    }
}

validator ("000")