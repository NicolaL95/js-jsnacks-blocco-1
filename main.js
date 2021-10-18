

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
    for (let index = 0; index < 6; index++) {
        let num_chk = parseInt(prompt("inserisci un numero")); 1

        if (num_chk % 2 == 1) {
            odd_list.push(num_chk);
        }
    }
    window.alert(`I numeri dispari sono: ${odd_list}`);
}

if (es_sel == 6) {
    /* Esercizio 6 */
    let max_num = parseInt(prompt("inserisci il numero di numeri di cui vuoi vedere il cubo"));
    let num_count = 0;
    let num_placer;
    const num_list = [];
    while (max_num > num_count) {
        num_count = num_count + 1;
        console.log(num_count)
        num_placer = num_count * num_count * num_count;
        num_list.push(num_placer);
    }
    window.alert(`Il cubo dei primi ${max_num} numeri è  il seguente : ${num_list}`);
}

if (es_sel == 7) {
    /* Esercizio 7 */
    const pot_list = [];
    let max_pot = 2;
    while (max_pot < 1000) {
        max_pot = max_pot * 2;
        pot_list.push(max_pot);
    }
    window.alert(`Le potenze di 2 fino a 1000 sono: ${pot_list}`);
}


if (es_sel == 8) {
    /* Esercizio 8 */
    const str_sel = prompt("inserisci un numero a quattro cifre");
    let list_sum = 0;
    for (let index = 0; index < str_sel.length; index++) {
        list_sum = list_sum + parseInt(str_sel[index])
    }
    window.alert(`La somma di tutti i numeri di ${str_sel} è: ${list_sum}`);
}

if (es_sel == 9) {
    /* Esercizio 9 */
    ten_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let list_sum = 0;
    for (let index = 0; index < ten_list.length; index++) {
        list_sum = list_sum + ten_list[index];
    }
    let media_list = list_sum / ten_list.length;
    window.alert(`La somma dei primi dieci numeri è ${list_sum} mentre la media è: ${media_list}`);
}