function equal(bigArray) {
    let length = bigArray.length;
    let count = 0;
    for (let i = 0; i < length; i++) {
        let rowArray = bigArray[i];
        let rowLength = rowArray.length;
        let previousArray = bigArray[i - 1];
        let nextArray = bigArray[i + 1];
        for (let j = 0; j < rowLength; j++) {
            if (i == 0) {
                if (j == 0) {
                    if (rowArray[j] == rowArray[j + 1] ) {
                        count++;
                    }
                    if (rowArray[j] == nextArray[j]){
                        count++;
                    }
                }
                else if (j == rowLength - 1) {
                    if (rowArray[j] == rowArray[j - 1]) {
                        count++;
                    }
                    if (rowArray[j] == nextArray[j]){
                        count++;
                    }
                }
                else {
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
            else if (i == length - 1) {

                if (j == 0) {
                    if (rowArray[j] == rowArray[j + 1]) {
                        count++;
                    }
                    if (rowArray[j] == previousArray[j]) {
                        count++;
                    }
                }
                else if (j == rowLength - 1) {
                    if (rowArray[j] == rowArray[j - 1]) {
                        count++;
                    }
                    if (rowArray[j] == previousArray[j]) {
                        count++;
                    }
                }
                else {
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
            else {
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
    console.log(count / 2);
}

equal(
   [[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]])