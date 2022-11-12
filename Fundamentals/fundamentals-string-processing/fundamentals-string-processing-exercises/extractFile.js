function extract (file){
    const directions = file.split('\\');
    const length = directions.length;
    
    let name = directions[length-1];
    let extension = name.split('.').pop();
    const lastDot = name.lastIndexOf('.');
    name = name.substring(0,lastDot)
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
    //File name: Template File extension: pptx
}

extract ('C:\\Internal\\training-internal\\Template.pptx')