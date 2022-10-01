function findSameElements(firstElements,secondElements){
    let firstLength = firstElements.length;
    let secondLength = secondElements.length;
    let first = ``;
    let second = ``;
    for (let i = 0; i<firstLength;i++){

        for (let j = 0; j<secondLength; j++){
            if (firstElements[i] == secondElements[j]){
                console.log(firstElements[i]);
            }
        }
    }
}

findSameElements

(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

['s', 'o', 'c', 'i', 'a', 'l']);