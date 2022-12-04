function project (input) {
    let name = input [0];
    let projects = Number(input [1]);
    let time = projects * 3;
    console.log (`The architect ${name} will need ${time} hours to complete ${projects} project/s.`)
}
project (["Marto","4"])