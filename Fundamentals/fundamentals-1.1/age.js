function solve (age){
    if (age <0){
        age = "out of bounds"
    }
    else if (age >=0 && age <=2){
        age = "baby"
    }
    else if (age<=13){
        age = "child"
    }
    else if (age<=19){
        age = "teenager"
    }
    else if (age<=65){
        age = "adult"
    }
    else if (age>=66){
        age = "elder"
    }else {
        age = "out of bounds"
    }
    console.log(age)


// 0-2 (age) – is a baby;

// ·3-13 (age) – is a child;

// 14-19 (age) – is a teenager;

// 20-65 (age) – is an adult;

// >=66 (age) – is an elder;

// · In all other cases print – "out of bounds";
}

solve(20)