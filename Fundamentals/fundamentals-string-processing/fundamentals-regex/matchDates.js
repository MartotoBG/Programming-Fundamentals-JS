function match (array){
    const dates = array.shift();
 const pattern = /\b(?<day>\d{2})(?<separator>[.\-\/])(?<month>)[A-Z]{1}[a-z]{2}\k<separator>(?<year>)\d{4}\b/g;
 //Day: 11, Month: Dec, Year: 2010

    

    let validDates = dates.matchAll(pattern);

    for (const date of validDates){
       
       const currentDate = date[0];
       const day = currentDate[0] + currentDate[1];
       const month = currentDate[3] + currentDate[4] + currentDate[5];
       const year = currentDate[7] + currentDate[8] + currentDate[9] + currentDate[10];
       console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }
}

match (['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014'])