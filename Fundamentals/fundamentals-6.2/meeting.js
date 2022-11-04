function meet (array){
    const meetings = {};
    array.forEach(element => {
        const [day,name] = element.split(` `);
       
        
        if (meetings[day]){
            console.log(`Conflict on ${day}!`);
        }
        else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });
    
   for (let [day,name] of Object.entries(meetings)){
    console.log(`${day} -> ${name}`)
   }
   
}

meet (['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])