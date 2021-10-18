

const es_sel = prompt("inserisci il numero dell'esercizio da visualizzare");


if (es_sel == 1) {
    /* Esercizio 1 */
    const a = prompt("inserisci un numero");
    const b = prompt("inserisci un numero");

    if (a > b) {
        window.alert(`il numero maggiore è ${a}`);
        console.log(a);
    }

    else if (a < b) {
        window.alert(`il numero maggiore è ${b}`);
        console.log(b);
    }

    else {
        window.alert("I due numeri sono uguali!")
    }
}

if (es_sel == 2) {
    /* Esercizio 2 */
    const a = prompt("inserisci la parola");
    const b = prompt("inserisci la parola");

    if (a.length > b.length) {
        window.alert(`La parola più lunga è ${a}`);
        console.log(a);
    }

    else if (a.length < b.length) {
        window.alert(`La parola più lunga è ${b}`);
        console.log(b);
    }

    else {
        window.alert("le due parole hanno la stessa lunghezza")
    }
}

if (es_sel == 3) {
    /* Esercizio 3 */
    let sum = 0;
    for (let index = 0; index <= 9; index++) {
        let element = prompt(`Inserisci il ${index + 1}° numero`)
        sum += element;
        console.log(element, sum);
    }

}
