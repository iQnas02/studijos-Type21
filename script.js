localStorage.setItem("key", "value");
// pirmas būdas
localStorage.setItem("artist", "Doja Cat");
localStorage.setItem("album", "Planet Her");
localStorage.setItem("track", "Woman");
localStorage.setItem("year", "2021");
localStorage.setItem("track", "Woman");
localStorage.setItem("track", "L");

let track = localStorage.getItem("track");
console.log(track); // will print out 'Doja Cat'


// antras būdas kaip rašyti
localStorage["artist"]= "Doja Cat";
let myData = localStorage["artist"]
console.log(myData);
localStorage["album"]= "Planet Her";
let myAlbum = localStorage["album"]
console.log(myAlbum);
localStorage["album"]= "Planet Her";
let myAlbum2 = localStorage["album"]
console.log(myAlbum2);
localStorage["year"]= "2021";
let myYear = localStorage["year"];
console.log(myYear);

// Duomenų šalinimas
// 1būdas: pašalinti viską iškart
localStorage.clear();

// 2būdas, pašalinti tik pasirinktus elementus
localStorage.removeItem("artist");

// kaip rasti localStorage: 1) inspect
// 2) aplication 3) localStorage išskleisti ir
// dešinėje rodys.