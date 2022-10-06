function judge (firstNumber,secondNumber,thirdNumber){
function negativeOrPositive (firstNumber,secondNumber,thirdNumber){
    let result = ``;
    if (firstNumber >=0){

        if (secondNumber >=0) {

            if (thirdNumber >=0){
                result = "Positive";
            }
            else {
                result = "Negative";
            }
        }

        else {
            if (thirdNumber >=0){
                result = "Negative";
            }
            else {
                result = "Positive"
            }
        }
    }
    else {
        if (secondNumber>=0){
            if (thirdNumber >=0){
                result = "Negative";
            }
            else {
                result = "Positive";
            }
        }
        else {
            if(thirdNumber>0){
                result = "Positive";
            }
            else {
                result= "Negative";
            }
        }
    }
    return result;
}
    console.log(negativeOrPositive(firstNumber,secondNumber,thirdNumber))
}

judge(2,3,4)