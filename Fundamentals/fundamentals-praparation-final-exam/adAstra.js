function timeLeft (array){
    let newArray = array[0].split(/[#|]/g);
    console.log(newArray)
    
}

timeLeft([

    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    
    ])