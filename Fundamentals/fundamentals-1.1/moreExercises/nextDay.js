function solve (year, month, day){
    // let day1 = new Date(`${year}-${month}-${day}`);
    
   let tomorrow = new Date(year, month , day);

    tomorrow.setDate(tomorrow.getDate() + 1);

    const tomorrow1 = tomorrow.toDateString()

    const year1 = tomorrow.getUTCFullYear();

    const month1 = tomorrow.getMonth();

    const day2= tomorrow.getDate()
    
    console.log(`${year1}-${month1}-${day2}`)

}

solve (2016, 9, 30)