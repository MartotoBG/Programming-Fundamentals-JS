function solve(input) {
    let index = 0;
    let poorGrades = Number(input[index]);
    let poorGradeCounter = 0;
    index++;
    let problem ;
    let problems = 0;
    let total=0;
    let grade;
    let numbers = 0;
    while (true){
        problem=input[index];
   if (problem=="Enough"){

   
    console.log(`Average score: ${(total/numbers).toFixed(2)}`);
    console.log(`Number of problems: ${problems}`);
    console.log(`Last problem: ${input[input.length-3]}`);
    break;
}
grade = Number(input[++index]);
if (grade<=4){
    poorGradeCounter++;
    if (poorGrades == poorGradeCounter){
        console.log(`You need a break, ${poorGradeCounter} poor grades.`);
        break;
    }
}
total +=grade;
problems++;
index++;
numbers++;
}
}
solve (["3",

"Money",

"6",

"Story",

"4",

"Spring Time",

"5",

"Bus",

"6",

"Enough"])