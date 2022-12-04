function solve(input) {
    let groups = Number(input[0]);
    let musala = 0;
    let monblan = 0;
    let klimimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    for (i = 1; i < input.length; i++){
    groupMembers = Number(input[i]) 
        if (groupMembers<6){
            musala +=groupMembers
        }
        else if (groupMembers<13){
            monblan +=groupMembers
        }
        else if (groupMembers<26){
            klimimandjaro +=groupMembers
        }
        else if (groupMembers<41){
            k2 +=groupMembers
        }
        else {
            everest +=groupMembers
        }
        
    }
    let climbers = musala+monblan+klimimandjaro+k2+everest
    console.log (`${((musala/climbers)*100).toFixed(2)}%`)
    console.log (`${((monblan/climbers)*100).toFixed(2)}%`)
    console.log (`${((klimimandjaro/climbers)*100).toFixed(2)}%`)
    console.log (`${((k2/climbers)*100).toFixed(2)}%`)
    console.log (`${((everest/climbers)*100).toFixed(2)}%`)

}
solve(["10", "10", "5", "1", "100",
    "12", "26", "17",
    "37", "40", "78"])