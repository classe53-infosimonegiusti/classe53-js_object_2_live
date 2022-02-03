/* Semplificazione per oggetti ES6 */


const nome = "pippo";
const eta = "20";
const email = "test@test.it";
const citta = "firenze";

// sintassi pre es6 o flessibile
let prova = {
    'nome': nome,
    'eta': eta,
    'email': email,
    'provincia': citta
};

// sintassi es6 rapida
let provaEs6 = {
    nome,
    eta,
    email,
    citta
}








/* chiavi dinamiche */


let chiaveDinamica = prompt('Che CHIAVE vuoi aggiungere?');

let valoreDinamico = prompt('Che VALORE vuoi aggiungere?');

let provaDinamica = {
    'nome': nome,
    'eta': eta,
    'email': email,
    'provincia': citta,
    [chiaveDinamica]: valoreDinamico,
}

console.log(provaDinamica);


//crea una chiave di nome chiaveDinamica con valore del contenuto della variabile valoreDinamico
provaDinamica.chiaveDinamica = valoreDinamico;

//questa stessa sintassi, con le parentesi quadre, la potresti scrivere con:
provaDinamica['chiaveDinamica'] = valoreDinamico;


//per rendere realmente "dinamica" la chiaveDinamica, devo scrivere:
provaDinamica[chiaveDinamica] = valoreDinamico;









/* Operatore di spread */

const obj1 = {
    'nome': 'pippo',
    'citta': 'paperopoli'
}

const obj2 = {
    'colore': 'rosso',
    'citta': 'roma'
}

//se uso questa sintassi, devo stare attento perchè modificando objCopyAttenzione 
//mi ritrovere a modificare anche l'obj originale
const objCopyAttenzione = obj1;

//in questo modo, con l'operatore spread, faccio una copia vera e propria 
//e modificando objCopyCorretta non altero l'originale

const objCopyCorretta = {...obj1};

//posso usare lo spread anche per unire due oggetto
// in caso di omonimie di attributi, conta l'ordine
const objUnione = {...obj1, colore: 'verde', ...obj2};

console.log(objUnione);








/* operatori REST */

function sommatoriaEMedia (...elementi) {
    let somma = 0;
    for (let i = 0; i< elementi.length; i++) {
        somma += elementi[i];
    }
    const media = somma / elementi.length;
    return [somma, media];
}

let risultatato = sommatoriaEMedia(1,2,3,4,5);
let [somma, media] = risultatato;

console.log(somma);
console.log(media);



function concatena(operatore, ...stringhe) {
    let ritorno = '';
    for (let i = 0; i<stringhe.length; i++) {
        ritorno +=  operatore + stringhe[i];
    }
    return ritorno;
}

console.log(concatena('*', 'ciao', 'casa', 'mondo', 'rosso'));




/* destructuring degli oggetti */

let provaDestructuring = {
    'nomeTest': 'pippo',
    'etaTest': '40',
    'emailTest': 'ciao@pippo.it',
    'provincia Test': 'paperopoli'
};

//questa sintassi puo anche essere espressa 
//let nomeTest = provaDestructuring.nomeTest;
//let emailTest = provaDestructuring.emailTest;

//cosi!
let {nomeTest, emailTest} = provaDestructuring;

console.log(nomeTest);
console.log(emailTest);




