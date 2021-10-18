

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
        let element = parseInt(prompt(`Inserisci il ${index + 1}° numero`));
        console.log(element)
        /* while (element = isNaN) {
            element = parseInt(prompt(`non hai inserito un numero, inserisci il ${index + 1}° numero`));
            if ((element == isNaN) == false) {
                break;
            }
        } */
        sum += element;
    }
}

if (es_sel == 4) {
    /* Esercizio 4 */
    const invited_list = ["Stefano", "Andrea", "Nicola", "Lorenzo", "Matteo", "Diego", "Luigi", "Simone"];
    let user_invited = prompt("inserisci il tuo nome");
    for (let index = 0; index <= invited_list.length; index++) {
        if (user_invited == invited_list[index].toLowerCase()) {
            window.alert(`${invited_list[index]} è sulla lista!`);
        }
    }
}

if (es_sel == 5) {
    /* Esercizio 5 */
    const odd_list = [];
    for (let index = 0; index <= 6; index++) {
        let num_chk = prompt("inserisci un numero")
        console.log(num_chk)
        if (num_chk % 2 == 1) {
            odd_list.push = num_chk;
        }
    }
    console.log(odd_list)
}

