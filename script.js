// 1 Crea una funzione che controlli due numeri Interi. Ritorna True se uno dei due è 50 o la loro somma è 50.

<<<<<<< Updated upstream
// function round(numberA,numberB){
//     let roundA= Math.round(numberA)
//     let roundB=Math.round(numberB)
//     let operation= roundA+roundB
//     if (roundA === 50 || roundB === 50) {
//         result = true
//     }
//     else if (roundA + roundB === 50) {
//         result = true
//     }
//     else result= false
//     console.log(operation)
//     console.log(result)

// }
// round(50,5)

// function checkInteger(numberA, numberB) {
//     if (!Number.isInteger(numberA) || !Number.isInteger(numberB))
//         console.log('Non e un numero intero')
//     else sum(numberA,numberB)
// }


// function sum(numberA, numberB) {
//     let operation= numberA+numberB
//     if (numberA === 50 || numberB === 50) {
//         result = true
//     }
//     else if (numberA + numberB === 50) {
//         result = true
//     }
//     else result= false
//     console.log(operation)
//     console.log(result)
// }

// Esercizio 2
// Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. 
// Passa la stringa e la posisione come parametri e ritorna la stringa modificata

// function sliceString(string, start,end){
//     let newString = string.slice(start,end)
//     console.log(newString)
// }
// sliceString('banana',0,1)

// esercizio 3
// Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. ritorna true sew rispecchiano condizioni oppure false

function checkNumber(a, b) {
   
    if (!a >= 40 && !a <= 70 || !a >= 70 && !a <= 100) {
        a = false
    } else if (!b >= 40 && !b <= 70 || !b >= 70 && !b <= 100) {
        b = false
    }



    console.log(a)
    console.log(b)
=======
function checkInteger(numberA,numberB){
    if (number.isInteger(numberA)||number.isInteger(numberB))
    console.log('non è un numero intero')
else console.log(numberA+numberB)
>>>>>>> Stashed changes
}
checkInteger(0,5)

checkNumber(2, 70)

// Esercizi extra
// NOTA: tutti gli esercizi devono essere svolti usando le funzioni

// 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.
// 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna true , altrimenti ritorna `false`.
// 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
// Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].
// 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.
// 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981
// 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.

// Es.
// X = 2
// `'# '
// '##'`
// X = 3
// `'# '
// '## '`
// `'###'`
// 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”
// 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
// Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]
// 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
// Es.

// X = 3
// `' # '
// ' ### '
// '#####'`
// 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:

// Es.

// N = 2

// `[[1, 2],[4, 3]]`

// N = 3

// `[[1, 2, 3],[8, 9, 4],[7, 6, 5]]`

// N = 4

// `[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]`