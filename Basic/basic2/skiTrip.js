function solve(input) {

    let days = Number(input[0]);
    let typeRoom = (input[1]);
    let star = (input[2]);
    let price = 0;
    let finalprice = 0;
    if (days < 10) {
        switch (typeRoom) {
            case "room for one person": price = days * 18 - 18;
            if (star === "positive") {
                finalprice = price * 1.25;
                console.log(finalprice.toFixed(2))
            }
            else if (star === "negative") {
                finalprice = price * 0.9;
                console.log(finalprice.toFixed(2))
            } ; break;
            case "apartment": price = (days * 25 - 25) * 0.7;
            if (star === "positive") {
                finalprice = price * 1.25;
                console.log(finalprice.toFixed(2))
            }
            else if (star === "negative") {
                finalprice = price * 0.9;
                console.log(finalprice.toFixed(2))
            } ; break;
            case "president apartment": price = (days * 35 - 35) * 0.9;
            if (star === "positive") {
                finalprice = price * 1.25;
                console.log(finalprice.toFixed(2))
            }
            else if (star === "negative") {
                finalprice = price * 0.9;
                console.log(finalprice.toFixed(2))
            } ; break;
        }

    }
    else if (days >= 10 && days <= 15) {
        switch (typeRoom) {
            case "room for one person": price = days * 18 - 18;
            if (star === "positive") {
                finalprice = price * 1.25;
                console.log(finalprice.toFixed(2))
            }
            else if (star === "negative") {
                finalprice = price * 0.9;
                console.log(finalprice.toFixed(2))
            } ; break;



            case "apartment": price = (days * 25 - 25) * 0.65;
            if (star === "positive") {
                finalprice = price * 1.25;
                console.log(finalprice.toFixed(2))
            }
            else if (star === "negative") {
                finalprice = price * 0.9;
                console.log(finalprice.toFixed(2))
            } ; break;


                
            case "president apartment": price = (days * 35 - 35) * 0.85;
                console.log(price.toFixed(2)); break;
        }
    }
    else if (days >= 15) {
        switch (typeRoom) {
            case "room for one person": price = days * 18 - 18;
            if (star === "positive") {
                finalprice = price * 1.25;
                console.log(finalprice.toFixed(2))
            }
            else if (star === "negative") {
                finalprice = price * 0.9;
                console.log(finalprice.toFixed(2))
            } ; break;
            case "apartment": price = (days * 25 - 25) * 0.5;
            if (star === "positive") {
                finalprice = price * 1.25;
                console.log(finalprice.toFixed(2))
            }
            else if (star === "negative") {
                finalprice = price * 0.9;
                console.log(finalprice.toFixed(2))
            } ; break;
            case "president apartment": price = (days * 35 - 35) * 0.8;
            if (star === "positive") {
                finalprice = price * 1.25;
                console.log(finalprice.toFixed(2))
            }
            else if (star === "negative") {
                finalprice = price * 0.9;
                console.log(finalprice.toFixed(2))
            } ; break;
        }
    }
    

}