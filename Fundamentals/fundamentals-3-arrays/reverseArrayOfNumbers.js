function reverseNumbers (reverse, numbers){
    let empty = "";
    for (let i = reverse-1; i>=0;i--){
        empty += `${numbers[i]} `;
    }
    console.log(empty);
}

reverseNumbers(3, [10, 20, 30, 40, 50])