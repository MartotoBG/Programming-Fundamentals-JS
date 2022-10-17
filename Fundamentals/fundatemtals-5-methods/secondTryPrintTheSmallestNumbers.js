function print (array){
    array.sort((a,b) => a-b);
    console.log(array[0] + ` ` + array[1]);
}

print([30, 15, 50, 5])