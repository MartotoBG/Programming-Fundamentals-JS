function replace (string , char , result) {
    let finalResult = string.replace(`_`,char);
    if (finalResult === result){
        console.log(`Matched`);
    }
    else {
        console.log(`Not Matched`)
    }
}

replace ('Str_ng', 'i' , 'String')