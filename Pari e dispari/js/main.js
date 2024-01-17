let pariDispari = prompt ("Scegli pari o dispari.");
console.log(`scelta pari o dispari ${pariDispari}`);

let numeroUtente = parseInt (prompt("Scegli un numero da 1 a 5."));
console.log(`numero scelto ${numeroUtente}`);


// genero (spero) numeri random
function numeroRandom(min, max){

    const newRandom = Math.floor(Math.random() * (max - min) + min);
    return newRandom
}

let numeroCasuale = numeroRandom (1, 5);
console.log(`numero scelto dal computer:${numeroCasuale}`); 



// OVVIAMENTE NON FUNZIONA NULLA :-(














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