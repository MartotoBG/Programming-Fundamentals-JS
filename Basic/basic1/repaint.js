function paint (input) {
    let nailon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);
    let nailon1 = (nailon + 2) * 1.5;
    let paint1 = paint * 14.5;
    let razreditel1 = razreditel * 5;
    let materials = nailon1 + (paint1 + (paint1*0.1)) + razreditel1 + 0.4 
    let workhours = hours *materials *0.3
    let total = nailon1 + (paint1 + (paint1*0.1)) + razreditel1 + 0.4 + workhours
    console.log (total)
}

paint (["10","11","4","8"])