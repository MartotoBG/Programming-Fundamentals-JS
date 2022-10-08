function range (first,last){
    let start = Math.min(first.charCodeAt(), last.charCodeAt());
    let end = Math.max(first.charCodeAt(), last.charCodeAt());
    let result = ``;
    for (let i = start+1 ; i<end ; i++){
        result += String.fromCharCode(i) + ` `;
    }
    console.log(result)
}

range(":","#")