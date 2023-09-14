// 1 FATTO
// Crea una funzione che controlli due numeri Interi. Ritorna True se uno dei due è 50 o la loro somma è 50.

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

// Esercizio 2 FATTO
// Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. 
// Passa la stringa e la posisione come parametri e ritorna la stringa modificata

// function sliceString(string, position){
//     let newString = string.slice(position)
//     console.log(newString)
// }
// sliceString('banana',4)

// esercizio 3 FATTO
// Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. ritorna true sew rispecchiano condizioni oppure false

// function checkNumber(a, b) {

//     if (a >= 40 && a <= 70 || a >= 70 && a <= 100) {
//         a = true
//     } else a=false

//     if (b >= 40 && b <= 70 || b >= 70 && b <= 100) {
//         b = true
//     } else b=false



//     console.log(a)
//     console.log(b)
// }

// checkNumber(50, 0)



// 4 esercizio FATTO
// Crea una funzione che accetti un nome di città come parametroe ritorni il nome dello stesso se comincia con 'Los' o ''new, altrimenti false
// function searchCharacter(city) {
//     let lower = city.toLowerCase()
//     let resultA = lower.includes('los')
//     let resultB = lower.includes('new')
//     if(resultA||resultB)
//     console.log(city)
//     else console.log(false)
// }

// searchCharacter('New york')



// 5 esercizio FATTO
// crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro

// function arrayCount(array){
//     let result=0
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     result += element

//   }console.log(result)

// }

// arrayCount([0,1,2,3,4,5])


// 6 esercizio
// Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se non li contiene ritorna true altrimenti false

// function notIncludes(array) {
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];

//         let findA = element.includes(1)
//         let findB = element.includes(3)
//         let result
//         if (findA || findB)
//             result = true
//         else result = false
//         console.log(result)
//     }

// }

// notIncludes([0,4,5])

// 7 esercizio FATTO
// Crea una funzione per trovare un tipo di angolo i cui gradi sono passati come parametri.
// Creaangolo acuto: meno di 90gradi torna acuto
// angolo ottuso tra i 90 e i 180 ritorna ottuso
// angolo retto 90
// angolo piatto 180


// function triangolo(grado) {
    
//     switch (true) {
//         case (grado < 90): console.log('Angolo Acuto')

//             break;
//         case (grado > 90 && grado <180): console.log('Angolo Ottuso')

//             break;
//         case (grado === 90): console.log('Angolo Retto')

//             break;
//         case (grado === 180): console.log('Angolo Piatto')

//             break;

//         default:
//             break;
//     }
// }
// triangolo(180)

// 8 esercizio FATTO QUASI
// crea una funzione che crei un acronimo a partire da una frase es fabbrica italiana automobili torino FIAT

// function acronimo(stringa){
//     let array= stringa.split(" ")
//     console.log(array)
//     for (const word of array) {
//         let firstLetter= word.slice(0,1)
//         let acronimo = firstLetter.concat()
        
//         console.log(acronimo)
        
//     }
// }

// acronimo('fabbrica italiana automobili torino')

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

// function reverse (stringa){
// let newArray= stringa.split('')
// let reverse= newArray.reverse()
// let newString= reverse.join('')
// console.log(newString)

// }
// reverse('ciao')


// 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y. FATTO
// Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]


// function divideArray(array,y){
//     let newArray=[]
//     for (let i = 0; i < array.length; i+=y) {
//         newArray.push(array.slice(i,i+y))

        
//     }
//     console.log(newArray)

// }
// divideArray([0,1,2,3,4,5,6],3)

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