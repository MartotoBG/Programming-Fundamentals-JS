function calculate (radius, height){
    let volume = ((Math.PI * radius * radius * height)/3).toFixed(4);
    let S = Math.sqrt(radius * radius + height * height);
    let totalSurfaceArea = Math.PI * radius * S + Math.PI * radius * radius;
    console.log(`volume = ${volume}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`)
    
}


calculate(3,5)