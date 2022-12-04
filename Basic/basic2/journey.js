function solve(input) {
    let budget = Number(input[0]);
    let season = (input[1]);
    let destination = "";
    let relax = "";
    if (budget<=100){
        destination = "Bulgaria"
        switch (season){
            case "summer" :
                budget = budget * 0.3;
                relax = "Camp" ;break;
                
            case "winter" :
                budget = budget * 0.7;
                relax = "Hotel";  break;
        } 
    }

    if (budget<=1000 && budget > 100){
        destination = "Balkans"
        switch (season){
            case "summer" :
                budget = budget * 0.4; 
                relax = "Camp" ; break;
            case "winter" :
                budget = budget * 0.8;
                relax = "Hotel" ; break;
        } 
    } 

    if (budget>1000){
        destination = "Europe"
        switch (season){
            case "summer" :
                budget = budget * 0.9; 
                relax = "Hotel" ; break;
            case "winter" :
                budget = budget * 0.9; 
                relax = "Hotel" ; break;
        } 
    }  
    console.log(`Somewhere in ${destination}`);
    console.log(`${relax} - ${(budget).toFixed(2)}`)
    
}