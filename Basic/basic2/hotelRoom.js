function solve(input) {
    let month = (input[0]);
    let days = Number(input[1]);
    let price1 = 0;
    let price2 = 0;
    if (days <= 7) {
        switch (month) {
            case "May":
            case "October":

                price1 = days * 50;
                price2 = days * 65; break;

            case "June":
            case "September":

                price1 = days * 75.2;
                price2 = (days * 68.7); break;

            case "July":
            case "August":

                price1 = days * 76;
                price2 = days * 77; break;
        }

    }
    if (days > 7 && days <= 14) {
        switch (month) {
            case "May":
            case "October":

                price1 = (days * 50) * 0.95;
                price2 = days * 65; break;

            case "June":
            case "September":

                price1 = days * 75.2;
                price2 = days * 68.7; break;

            case "July":
            case "August":

                price1 = days * 76;
                price2 = days * 77; break;
        }
    }







    if (days > 14) {
        switch (month) {
            case "May":
            case "October":

                price1 = (days * 50) * 0.7;
                price2 = (days * 65) * 0.9; break;

            case "June":
            case "September":

                price1 = (days * 75.2) * 0.8;
                price2 = (days * 68.7) * 0.9; break;

            case "July":
            case "August":

                price1 = (days * 76);
                price2 = (days * 77) * 0.9; break;
        }



    }
    console.log(`Apartment: ${price2.toFixed(2)} lv.`);
    console.log(`Studio: ${price1.toFixed(2)} lv.`);
}