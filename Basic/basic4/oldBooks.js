function solve(input) {
    let index = 0;
    let favouriteBook= input[index];
    index++
    let command = input[index];
    index++
    let booksCounter = 0;
    
    while (command !== "No More Books"){
     if (command === favouriteBook){
        console.log(`You checked ${booksCounter} books and found it.`);
        return;}
    booksCounter++;
    command = input[index];
    index++;
    
    }
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksCounter} books.`)
}

solve (["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])