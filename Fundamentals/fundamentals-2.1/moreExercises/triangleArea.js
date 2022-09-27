function calculateArea (a,b,c){
    let S = (a+b+c)/2;
    let Heron = Math.sqrt(S*(S-a)*(S-b)*(S-c));
    console.log(Heron);
}


calculateArea (2, 3.5 ,4)