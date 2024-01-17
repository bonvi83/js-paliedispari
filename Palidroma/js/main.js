let utente;


// chiedo all'utente di digitare una parola
utente = prompt("Inserisci una parola e ti dirò se è palindroma");


// costruzione formula
function palindroma(parola) {
    let lunghezza = parola.length;
    for (var i = 0; i <= lunghezza / 2;)
        if (parola[i++] !== parola [lunghezza - i]) return "NON palindroma";
        return "palindroma"
}


// comunico il risultato
let risultato = document.getElementById("risposta");
risultato.innerHTML = (palindroma(utente))