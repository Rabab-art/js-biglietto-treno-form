/*Quali campi inserire nel form:
Una casella di testo per il form del passeggero
Una casella numerica per i km
Una tendina per selezionare la fascia d'età (Maggiorenne, Minorenne, Over65)
NON E' NECESSARIA ALCUNA VALIDAZIONE

Come calcolare  il prezzo:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,

Cosa stampare sul biglietto:
Nome passeggero
Codice treno (inseriamo una stringa a caso, per ora)
Numero carrozza (randomizziamo una carrozza da 1 a 12)
Prezzo (stampato con due decimali)
Tariffa applicata all'utente (Tariffa minori, Tariffa ordinaria, Tariffa Over65)

Per la parte grafica
Facciamola solo se tutto il resto della logica è funzionante,
 vi allego uno screen dell'esercizio fatti in
 classe senza stile e una da prendere come esempio per la parte visiva.
 Sentitevi liberi di personalizzare ulteriormente la grafica se vi va.*/

//  1. Raccolgo il riferimento a tutti gli elementi che mi servono 
//  della pagina;
// 2. Lego al mio bottone un evento che farà cattare i miei calcoli 
// al suo click; legarli un eventlister

// ELEMETI DEL FORM

var nameField = document.getElementById('name');
var kmsField = document.getElementById('kms');
var ageField = document.getElementById('age');
var button = document.getElementById('generate-ticket')

// ELEMENTI DELLA SEZIONE TICKET

var passengerName = document.getElementById('passenger-name');
var discountElement = document.getElementById('discount');
var carElement = document.getElementById('car');
var priceElement = document.getElementById('price');

// LEGO UN EVENTO AL CLICK DEL MIO BOTTONE 
button.addEventListener('click', function () {
    // verifichimo se l'abbiamo messo bene con alert
    // alert('clicchiamo');
    // 
    var nameValue = nameField.value;
    // console.log(nameValue);
    var kmsValue = kmsField.value;
    // console.log(kmsValue);
    var ageValue = ageField.value;
    // console.log(ageValue);


    // CALCOLO BIGLIETTO IN BASE AI KM

    var price = 0.21 * kmsValue;
    var discountDisplay = 'Triffa ordinaria '
    // Verifico l'età: è minorenne;
    if (ageValue === 'min') {
        // applico lo sconto del 20%
        price = price * 0.8;
        //     la posso scrivere anche qui price *=0.8;
        discountDisplay = 'Tariffa minori';
    }
    //  verifico l'età over 65
    else if (ageValue === 'over65') {
        // applico lo socnto del 40%
        price *= 0.6;
        discountDisplay = 'Tariffa over65';
    }

    // Arrotondiamo  e prepariamo il prezzo da stampare 
    price = 'Euro' + price.toFixed(2);
    // randomiziamo il numero della carozza
    var carNumber = Math.floor(Math.random() * 12) + 1;

    //    STAMPARE GLI ELEMENTI IN PAGINA
    passengerName.innerHTML = nameField.value;
    discountElement.innerHTML = discountDisplay;
    carElement.innerHTML = carNumber;
    priceElement.innerHTML = price;
});