
//PALINDROMA

//indicare all'utente di inserire una parola nel prompt 
const parolaUtente = prompt("Scrivi una parola palindroma")
   
//creare una funzione che compara la parola palindroma con la parola inserita dall'utente

if (parolaUtente){
    if (parolaPalindroma(parolaUtente)) {
        console.log("La parola e un 'palindroma'")
    } else {
        console.log("La parola NON E un 'palindroma', scrivi una parola palindroma")
    }
} else {
    console.log("Scrivi una parola palindroma")
}
/* function parolaPalindroma() */

function parolaPalindroma(parola){
    return parola === parola.split("").reverse().join("");
}





/* const character = "#";
const count = 8;
const rows = [];

for (let i = 0; i < count; i = i + 1) {
  rows.push(i);
  console.log(rows)
}

let result = "";

for (const row of rows){
    result = result + row;
} */