function sumNumbers (numbers){
    let zero = 0;

    for (let i=0; i<numbers.length;i++){
        numbers[i]= Number(numbers[i]);
}
    for (let j=0 ; j<numbers.length;j++){
        if(numbers[j] % 2 === 0){
        zero += Number(numbers[j]);
}
    }
console.log(zero);

}
sumNumbers(['1','2','3','4','5','6'])