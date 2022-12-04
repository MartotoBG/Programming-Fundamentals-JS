function solve (input){
    let figure = (input[0]);
    let num1 = Number(input[1]);
    let num2 = Number(input[2]);
    if (figure === "square"){
        
          console.log ((num1*num1).toFixed(3));
    }
    else if (figure === "rectangle"){
        console.log ((num1*num2).toFixed(3));
    }
    else if (figure === "circle") 
         
    console.log ((Math.PI*(num1*num1)).toFixed(3))

        
    
        else if (figure === "triangle")
        
        console.log ((0.5 * (num1*num2)).toFixed(3));
    
}   
solve (["square",5])