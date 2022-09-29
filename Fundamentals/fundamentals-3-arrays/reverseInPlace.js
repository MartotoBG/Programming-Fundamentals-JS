function reversePlace (input){
    let empty ="";
    for (let i=input.length-1; i>=0;i--){
        empty+= `${input[i]} `;
    }
    console.log(empty);
}

reversePlace(['a', 'b', 'c', 'd', 'e'])