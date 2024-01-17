let utente;
let risultato = document.getElementById("risposta");


// chiedo all'utente di digitare una parola
utente = prompt("Inserisci una parola e ti dirò se è palindroma");


function palindroma(parola) {
    let lunghezza = parola.length;
    for (var i = 0; i <= lunghezza / 2;)
        if (parola[i++] == parola [lunghezza - i]) return "NON è palindroma";
    return "è palindroma"
}


risposta.innerHTML = (palindroma(utente))