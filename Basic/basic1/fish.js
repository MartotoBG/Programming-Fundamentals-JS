function fish (input) {
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);
    let tankVolumeInCm = lenght * width * height;
    let tankVolume =  tankVolumeInCm / 1000;
    let total = tankVolume - (tankVolume * (percentage / 100))
    console.log (total)
}

fish (["85","75","47","17"])