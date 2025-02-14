
//PALINDROMA

//indicare all'utente di inserire una parola nel prompt 
const parolaUtente = prompt("Scrivi una parola")
   
//creare una funzione che compara la parola palindroma con la parola inserita dall'utente

if (parolaUtente){
    if (parolaPalindroma(parolaUtente)) {
        console.log("La parola corrisponde a 'palindroma'")
    } else {
        console.log("La parola NON CORRISPONDE a 'palindroma'")
    }
}else {
    console.log("scrivi una parola")
}

/* function parolaPalindroma() */

function parolaPalindroma(parola){
    return parola === "palindroma"
}






