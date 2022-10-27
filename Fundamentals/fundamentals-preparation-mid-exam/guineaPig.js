function piggiesCost (array){
    let food = Number(array.shift())*1000;
    let hay = Number(array.shift())*1000;
    let cover = Number(array.shift())*1000;
    let weight = Number(array.shift())*1000;
    let month = 30;

    for (let i=1 ; i<=month ; i++){
        food -= 300;
        if(i % 2 == 0){
            hay -= food*0.05;
        }
        if (i % 3 == 0){
            cover -= weight/3;
        }
    }
    food /= 1000;
    hay /= 1000;
    cover /=1000;
    if (food >=0 && hay >= 0 && cover >=0){
    console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`)
    }
    else {
        console.log(`Merry must go to the pet store!`);
    }

    // Every day Puppy eats 300 gr of food. Every second day Merry first feeds the pet, 
    // then gives it a certain amount of hay equal to 5% of the rest of the food. 
    // On every third day, Merry puts Puppy cover with a quantity of 1/3 of its weight. 
}

piggiesCost (["1",  

"1.5",  

"3",  

"1.5" 

]) 