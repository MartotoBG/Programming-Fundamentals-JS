function slice1 (){
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    
    for( let i = 0; i < arr.length; i++){ 
    
        if ( arr[i] === 5) { 
    
            arr.splice(i,1); 
        }
        
    }
    console.log(arr)
}

slice1()