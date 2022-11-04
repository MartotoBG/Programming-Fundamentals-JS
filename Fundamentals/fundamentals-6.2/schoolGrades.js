function averageGrades (array){
    

    const students = {};
    array.forEach(student => {
        student = student.split(` `);
       const name = student.shift();
       const grades = student.slice(0);
       if (students[name]){
        for (let i = 0 ; i< grades.length; i++){
            students[name].push(grades[i]);
        }
       }
       else {
       students[name] = grades;
       }
    });
    let entries = Object.entries(students);
    entries.sort((a,b) => a[0].localeCompare(b[0]))
   for (const [name,grades] of entries){
    let sum = 0;
    for (let i = 0 ; i<grades.length; i++){
        sum += Number(grades[i]);
    }
    let average = sum / grades.length;
    console.log(`${name}: ${average.toFixed(2)}`)
    
   }
}

averageGrades (['Lilly 4 6 6 5',

'Tim 5 6',

'Tammy 2 4 3',

'Tim 6 6'])