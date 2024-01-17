let pariDispari = prompt ("Scegli pari o dispari.");
console.log(`scelta pari o dispari ${pariDispari}`);

let numeroUtente = parseInt (prompt("Scegli un numero da 1 a 5."));
console.log(`numero scelto ${numeroUtente}`);


// controllo se è numero o meno   MA LO DEVE SCEGLIERE DI SOLO 2 CIFRE E DEVO ANCHE CONTROLLARE SE SCRIVE PARI O DISPARI
if (isNaN(numeroUtente)){
    alert (`Devi inserire solo numeri, riprova.`)
}


// genero (spero) numeri random
function numeroRandom(min, max){
    const newRandom = Math.floor(Math.random() * (max - min) + min);
    return newRandom;
}


// stampo il numero del pc (spero)
let numeroPc = numeroRandom (1, 5);
console.log(`numero scelto dal pc:${numeroPc}`); 


// sommo i numeri...
let risultato = numeroUtente + numeroPc;
console.log(`la somma è: ` + risultato); 


// funzione per sapere se il numero è pari o dispari
function scelta(numero){
    if (numero % 2 == 0) {
        valore = `pari`
        console.log(`il numero è pari`); 
    } else {
        valore = `dispari`
        console.log(`il numero è dispari`); 
    }
    return numero % 2 == 0;
}
console.log(scelta(risultato)); 


// stampo il vincitore
if (pariDispari == risultato){
    alert(`HAI VINTO`);
} else {
    alert(`HAI PERSO`);
}



// OVVIAMENTE NON SI COMPORTA COME VORREI :-(









// VELOCE TUTORAGGIO CON MATTIA


// function somma(a, b){
//     let risultato = a + b;
//     return risultato;
// }


// function ciao(nome){
//     console.log("ciao " + nome)
// }


// let abbello;
// let result = somma(3 , 2);
// let result2 = somma(1 , 2);
// ciao("Anna");