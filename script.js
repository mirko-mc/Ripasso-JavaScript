// 1. Crea una funzione che controlli due numeri interi. Ritorna "true" se uno dei due è 50 o se la somma dei due è 50.
function controllaCinquanta(n1, n2) {
  return n1 === 50 || n2 === 50 || n1 + n2 === 50;
}
console.log(`ESERCIZIO 1: ${controllaCinquanta(50, 50)}`);

// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.
function rimuoviCarattere(testo, posizione) {
  return testo.slice(0, posizione - 1) + testo.slice(posizione - 1 + 1);
}
console.log(`ESERCIZIO 2: ${rimuoviCarattere("EPICODE", 2)}`);

// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna "true" se rispecchiano queste condizioni, altrimenti ritorna "false".
function compresi(n) {
  return (n > 39 && n < 61) || (n > 69 && n < 101);
}
console.log(`ESERCIZIO 3: 39 => ${compresi(39)}`);
console.log(`ESERCIZIO 3: 40 => ${compresi(40)}`);
console.log(`ESERCIZIO 3: 60 => ${compresi(60)}`);
console.log(`ESERCIZIO 3: 61 => ${compresi(61)}`);
console.log(`ESERCIZIO 3: 69 => ${compresi(69)}`);
console.log(`ESERCIZIO 3: 70 => ${compresi(70)}`);
console.log(`ESERCIZIO 3: 100 => ${compresi(100)}`);
console.log(`ESERCIZIO 3: 101 => ${compresi(101)}`);

// 4. Crea una funzione che accetti un nome di una città come parametro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti "false".
function citta(nome) {
  if (
    nome.toLowerCase().startsWith("los") ||
    nome.toLowerCase().startsWith("new")
  )
    return nome;
  return false;
}
console.log(`ESERCIZIO 4: Los Santos => ${citta("Los Santos")}`);
console.log(`ESERCIZIO 4: New York => ${citta("New York")}`);
console.log(`ESERCIZIO 4: Vice City => ${citta("Vice City")}`);

// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.
function sommaElementi(a) {
  let somma = 0;
  a.forEach((elemento) => {
    somma += elemento;
  });
  return somma;
}
console.log(`ESERCIZIO 5: ${sommaElementi([5, 7, 9, 1, 5, 3, 8])}`);

// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna "true", altrimenti ritorna "false".
function nonContiene(n) {
  if (n.indexOf(1) < 0 && n.indexOf(3) < 0) return true;
  else return false;
}
console.log(`ESERCIZIO 6: 1,3,5,7 => ${nonContiene([1, 3, 5, 7])}`);
console.log(`ESERCIZIO 6: 2,4,6,8 => ${nonContiene([2, 4, 6, 8])}`);

/*
    7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
        Angolo acuto: meno di 90° => ritorna "acuto"
        Angolo ottuso: tra i 90° e i 180°=> ritorna "ottuso"
        Angolo retto: 90° => ritorna "retto"
        Angolo piatto: 180° => ritorna "piatto"
*/
function angoli(gradi) {
  if (gradi < 90) return "Angolo Acuto";
  else if (gradi === 90) return "Angolo Retto";
  else if (gradi === 180) return "Angolo Piatto";
  else if (gradi > 90 && gradi < 180) return "Angolo Ottuso";
}
console.log(`ESERCIZIO 7: 90 => ${angoli(90)}`);
console.log(`ESERCIZIO 7: 180 => ${angoli(180)}`);
console.log(`ESERCIZIO 7: 89 => ${angoli(89)}`);
console.log(`ESERCIZIO 7: 91 => ${angoli(91)}`);

// 8. Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili Torino" => deve ritornare "FIAT".
function acronimo(frase) {
  let acronimo = "";
  let parole = frase.split(" ");
  parole.forEach((parola) => {
    acronimo += parola.slice(0, 1);
  });
  return acronimo.toUpperCase();
}
console.log(`ESERCIZIO 8: ${acronimo("fabbrica italiana automobili torino")}`);

// NOTA: tutti gli esercizi devono essere svolti usando le funzioni
// 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.
function piuUsato(testo) {
  let caratteri = Array.from(testo.toLowerCase());
  caratteri.sort();
  let occorrenze = 0;
  let maxOccorrenze = ["", 0];
  for (let i = 0; i < caratteri.length; i++) {
    for (let j = 0; j < caratteri.length; j++) {
      if (j === caratteri.length - 1) occorrenze = 0;
      if (caratteri[i] === caratteri[j]) occorrenze++;
      if (occorrenze > maxOccorrenze[1]) {
        maxOccorrenze[0] = caratteri[i];
        maxOccorrenze[1] = occorrenze;
      }
    }
  }
  return `${maxOccorrenze[0]} con ${maxOccorrenze[1]} occorrenze`;
}
console.log(`ESERCIZIO EXTRA 1: EPICODE => ${piuUsato("EPICODE")}`);

// 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.
function anagramma(p1, p2) {
  let parola1 = Array.from(p1.toLowerCase()).sort().toString();
  let parola2 = Array.from(p2.toLowerCase()).sort().toString();
  return parola1 === parola2;
}
console.log(
  `ESERCIZIO EXTRA 2: EpIcOdE eDoCiPe => ${anagramma("EpIcOdE", "eDoCiPe")}`
);
console.log(`ESERCIZIO EXTRA 2: Google Bing => ${anagramma("Google", "Bing")}`);

/*
3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].
*/
function anagrammi(parola, anagrammi) {
  let anagrammiCorretti = [];
  anagrammi.forEach((verifica) => {
    if (anagramma(parola, verifica))
      anagrammiCorretti.push(verifica.toLowerCase());
  });
  return anagrammiCorretti;
}
console.log(
  `ESERCIZIO EXTRA 3: Google => ${anagrammi("Google", [
    "Bing",
    "lgEoog",
    "legogo",
    "oglego",
    "Yahoo",
  ])}`
);
console.log(
  `ESERCIZIO EXTRA 3: cartine => ${anagrammi("cartine", [
    "carenti",
    "incerta",
    "espatrio",
  ])}`
);

// 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.
function palindromo(testo) {
  testo = Array.from(testo.toLowerCase());
  let testoInverso = testo.reverse();
  return testo.toString() === testoInverso.toString();
}
console.log(`ESERCIZIO EXTRA 4: radar => ${palindromo("radar")}`);

// 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981
function contrarioNumerico(n) {
  let num = Array.from(n.toString()).reverse();
  return parseInt(num.join(""));
}
console.log(`ESERCIZIO EXTRA 5: 528 => ${contrarioNumerico(528)}`);

/*
    6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
    Es.
    X = 2
    '# '
    '##'
    X = 3
    '# '
    '## '
    '###'
    */
function scala(n) {
  let scalini = "\n";
  let sharp = "#";
  for (let i = 1; i <= n; i++) {
    scalini += sharp.repeat(i) + "\n";
  }
  return scalini;
}
console.log(`ESERCIZIO EXTRA 6:${scala(5)}`);

// 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”
function contrarioTestuale(s) {
  let testo = Array.from(s.toString()).reverse();
  return testo.join("");
}
console.log(`ESERCIZIO EXTRA 7: Ciao => ${contrarioTestuale("Ciao")}`);

/*
    8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
    Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
    array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]
*/
function spaccArray(a, y) {
  let parte1 = a.slice(0, y);
  let parte2 = a.slice(y);
  console.log(parte1);
  console.log(parte2);
  return `parte 1: ${parte1} | parte2: ${parte2}`;
}
console.log(
  `ESERCIZIO EXTRA 8: [1, 2, 3, 4, 5], 4 => ${spaccArray([1, 2, 3, 4, 5], 4)}`
);

/*  9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
    Es.
    X = 3
    ' # '
    ' ### '
    '#####'
*/
// function scala(n) {
//   let scalini = "\n";
//   let sharp = "#";
//   for (let i = 1; i <= n; i++) {
//     scalini += sharp.repeat(i) + "\n";
//   }
//   return scalini;
// }
// console.log(`ESERCIZIO EXTRA 6:${scala(5)}`);
function piramide(x) {
  let scalini = "\n";
  let sharp = "#";
  let spacer = " ";
  let i = 1;
  while (i <= x) {
    i === 1
      ? (scalini += spacer.repeat(x - i) + sharp.repeat(i) + "\n")
      : (scalini += spacer.repeat(x - i) + sharp.repeat(i * 2 - 1) + "\n");
    i++;
  }
  return scalini;
}
console.log(`ESERCIZIO EXTRA 9: ${piramide(1)}`);

/*
    10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
    Es. N = 2
    [[1, 2],[4, 3]]
    N = 3
    [[1, 2, 3],[8, 9, 4],[7, 6, 5]]
    N = 4
    [[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]
*/
