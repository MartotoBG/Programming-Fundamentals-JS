function rotations (band , album , song){
    //(albumName.length * bandName.length) * song-name.length / 2
    //`The plate was rotated {rotations} times.
    let rotations = (band.length * album.length) * song.length /2
    console.log(`The plate was rotated ${Math.ceil(rotations/2.5)} times.`)
}

rotations ('Black Sabbath', 'Paranoid', 'War Pigs')