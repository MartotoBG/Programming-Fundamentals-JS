function sumNumbers (numbers){
    let even = 0;
    let odd = 0;
    for (let i=0; i<numbers.length;i++){
        numbers[i]= Number(numbers[i]);
}
    for (let j=0 ; j<numbers.length;j++){
        if(numbers[j] % 2 === 0){
        even += Number(numbers[j]);
}
        else {
            odd +=Number(numbers[j])
        }
    }

    console.log(even-odd);

}

sumNumbers([1,2,3,4,5,6])