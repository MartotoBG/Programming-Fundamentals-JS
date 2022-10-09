function loadingBar (number){
    let result = `${number}% [`
    if (number == 100){
        console.log("100% Complete!")
    }
    else {
    for (let i=0 ; i<10; i++){
        if (i<number/10){
            result+= "%"
        }
        else {
            result+=".";
        }
        if (i==9){
            result+= "]\nStill loading..."
        }
    }
    console.log(result);
    }
    

//30% [%%%.......] Still loading...
}

loadingBar (70)