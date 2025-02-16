//PARI E DISPARI

//funzione per generare numero casuale per il computer
function numeroRandomComputer() {
    return Math.floor(Math.random() * 5) + 1;
}

//verificare se il numero e pari o dispari

function numeroEvenOdd(numero) {           //true    //false
    return numero % 2 === 0 ? "Pari" : "Dispari";

}

function pariDispari() {
    // far scegliere e poi scrivere all'utente cosa sceglie tra pari e dispari
    let sceltaUtente //= prompt("Scegli 'pari' o 'dispari' e scrivilo").toLowerCase();
    while (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
        sceltaUtente = prompt("Scegli 'pari' o 'dispari' e scrivilo correttamente:").toLowerCase();
    }
    console.log(`La scelta utente è: ${sceltaUtente}`);

    /*    if (sceltaUtente === "pari" || sceltaUtente === "dispari"){
     console.log(`La scelta utente è: ${sceltaUtente}`);
    }
    else{
        console.log(`Hai sbagliato a scrivere`);
        
    } */
    //far inserire all'utente un numero da 1 a 5
    let numeroUtente;// = Number(prompt("Inserisci un numero a scelta tra 1 a 5"))
    while (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
        numeroUtente = Number(prompt("Inserisci un numero a scelta tra 1 e 5:"));}
    console.log(`Il numero del Utente è: ${numeroUtente}`)



    //let numero casuale da 1 a 5 per il Computer
    let numeroComputer = numeroRandomComputer();

    console.log(`Il numero del PC è: ${numeroComputer}`)





    // fare la somma tra numero inseriti dall'utente e numero randoma generato
    let somma = numeroUtente + numeroComputer;

    //funzione per verificare se la somma e pari o dispari
    let risultato = numeroEvenOdd(somma).toLowerCase(); // (restituisce "Pari" o "Dispari" .toLowerCase restituisce "pari" o "dispari")
    console.log(`Il risultato è: ${risultato}`)



    //loggare in console il vincitore
    if (risultato === sceltaUtente) {
        console.log("Vince l'Utente")
    } else {
        console.log("Vince il Computer")
    }
}

pariDispari();
