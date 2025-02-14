
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
    console.log("scrivi un'altra parola")
}

/* function parolaPalindroma() */

function parolaPalindroma(parola){
    return parola === "palindroma"
}






//PARI E DISPARI

// far scegliere e poi scrivere all'utente cosa sceglie tra pari e dispari

//far inserire all'utente un numero da 1 a 5


//creare una funzione che genera un numero casuale da 1 a 5 per il pc


// fare la somma tra numero inseriti dall'utente e numero randoma generato

//funzione per verificare se la somma e pari o dispari

//loggare in console il vincitore




