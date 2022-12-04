function basketball (input){
    let year = Number(input[0]);
    let sneakers = year * 0.6;
    let teamclothes = sneakers * 0.8;
    let ball = teamclothes / 4;
    let accessories = ball / 5;
    let total = sneakers + teamclothes + ball + accessories + year
    console.log(total);
}

basketball (["365"])