function equal(bigArray) {
    let length = bigArray.length;
    let count = 0;
    for (let i = 0; i < length; i++) {
        let rowArray = bigArray[i];
        let rowLength = rowArray.length;
        let previousArray = bigArray[i - 1];
        let nextArray = bigArray[i + 1];
        for (let j = 0; j < rowLength; j++) {
            if (i == 0) { // за първия масив
                if (j == 0) { // тоест е първото число от първия масив и затова проверявам само отдясно и отдолу
                    if (rowArray[j] == rowArray[j + 1] ) {
                        count++;
                    }
                    if (rowArray[j] == nextArray[j]){
                        count++;
                    }
                }
                else if (j == rowLength - 1) { // тоест е последното число от първия масив и затова проверявам само отдолу и отляво
                    if (rowArray[j] == rowArray[j - 1]) {
                        count++;
                    }
                    if (rowArray[j] == nextArray[j]){
                        count++;
                    }
                }
                else { // за всички останали в първия масив, които не са първо и последно число следователно проверяваме дали са еднакви с числото отдолу, отляво и отдясно
                    if (rowArray[j] == rowArray[j - 1]) { 
                        count++;
                    }
                    if(rowArray[j] == nextArray[j]){
                        count++;
                    }
                    if (rowArray[j] == rowArray[j + 1]){
                        count++;
                    }
                }
            }
            else if (i == length - 1) { // за последния масив

                if (j == 0) { // за първия елемент от последния масив затова проверявам дали са еднакви само с отдясно и отгоре
                    if (rowArray[j] == rowArray[j + 1]) {
                        count++;
                    }
                    if (rowArray[j] == previousArray[j]) {
                        count++;
                    }
                }
                else if (j == rowLength - 1) { // за последния елемент от последния масив затова проверявам само с отляво и отгоре
                    if (rowArray[j] == rowArray[j - 1]) {
                        count++;
                    }
                    if (rowArray[j] == previousArray[j]) {
                        count++;
                    }
                }
                else { // за всички останали в първия масив, които не са първо и последно число следователно проверяваме дали са еднакви с числото отгоре, отляво и отдясно
                    if (rowArray[j] == rowArray[j - 1]) {
                        count++;
                    }
                    if (rowArray[j] == previousArray[j]) {
                        count++;
                    }
                    if (rowArray[j] == rowArray[j + 1]){
                        count++;
                    }
                }
            }
            else { // ако сме стигнали до този else това означава че числото има съседно от четирите страни и проверяваме всяко дали се повтаря
                if (rowArray[j] == rowArray[j + 1]) {
                    count++;
                }
                if (rowArray[j] == rowArray[j - 1]){
                    count++;
                }
                if (rowArray[j] == previousArray[j]) {
                    count++;
                }
                if (rowArray[j] == nextArray[j]){
                    count++;
                }
            }
        }
    }
    console.log(count / 2); // делим на две тъй като като минаваме през числата по лигиката горе, която съм написал, 
    //то всяка двойка ще ми я брои два пъти, примерно ако имаме първи масив започващ с "2" "2", 
    //то първо ще ги преброи като индекс 0 = индекс 1 и ще приключи операцията, после отива на индекс 1 и ще го провери
    // и ще види че е равен на индекс 0 и така ще го преброи 2 пъти
    // надявам се да сте ме разбрали защо го делим на 2 :D
}

equal(
   [[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]])