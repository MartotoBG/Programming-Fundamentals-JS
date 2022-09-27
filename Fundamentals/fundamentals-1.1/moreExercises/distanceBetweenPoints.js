function distanceBetweenPoints (x1,y1,x2,y2){
    let a = x2 - x1;
    let a1 = a*a;
    let b = y2 - y1;
    let b1 = b * b ;
    let distance = Math.sqrt(a1+b1);
    console.log(distance)
   // let distance = Math.sqrt(x2 - x1)
}

distanceBetweenPoints (2.34, 15.66, -13.55, -2.9985)