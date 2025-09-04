let myAnsverInput = document.getElementById('inputOne');
let myAnsverButton = document.getElementById('answerButtonOne');

let myAnsverFeedbackElement = document.getElementById('answerFeedback');




// opgave 1 og 2

myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();

    /* din kode her.*/
let myAnsverInput = document.getElementById('InputOne');
let myAnsverButton = document.getElementById('answerButtonOne');

let myAnsverFeedbackElement = document.getElementById('answerFeedbackOne');




// opgave 1 og 2

myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();
    /* din kode her.*/
    switch (document.getElementById('InputOne').value) {
        case '1':
            console.log('Valgt : 1');
            showMessage('Valgt: 1');
            break;
        case '2':
            console.log('Valgt : 2');
            showMessage('Valgt: 2');
            break;
        case '3':
            console.log('Valgt : 3');
            showMessage('Valgt: 3');
            break;
        case '4':
            console.log('Valgt: 4');
            showMessage('Valgt: 4');
            break;
        case '5':
            console.log('Valgt: 5');
            showMessage('Valgt: 5');
            break;

        default:
            console.log('Forkert tal');
            showMessage('Forkert tal');
            break;
    }
});

/* skriv evt en view funktion der viser om svaret er korrekt i myAnsverFeedbackElement, brug evt. innerHTML*/

function showMessage(myMessage){
    document.getElementById('answerFeedbackOne').innerHTML=`<p>${myMessage}</p>`;
}

// opgave 3 og 4
myAnsverInput = document.getElementById('answerTwo');
myAnsverButton = document.getElementById('answerButtonTwo');

myAnsverFeedbackElement = document.getElementById('answerFeedbackTwo');

myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 3 og 4');
    /* din kode her.*/
    const userInput = parseInt(myAnsverInput.value);
    switch (userInput) {
        case 1:
            showMessage("Januar")
            break;

        case 2:
            showMessage("Febuar")
            break;

        case 3:
            showMessage("Marts")
            break;

        case 4:
            showMessage("April")
            break;

        case 5:
            showMessage("Maj")
            break;

        case 6:
            showMessage("Juni")
            break;

        case 7:
            showMessage("Juli")
            break;

        case 8:
            showMessage("August")
            break;

        case 9:
            showMessage("September")
            break;

        case 10:
            showMessage("Oktober")
            break;

        case 11:
            showMessage("November")
            break;

        case 12:
            showMessage("December")
            break;

        default:
            showMessage("Du skal vælge et tal mellem 1-12")
            break;
    }

     function showMessage(myMessage) {
        myAnsverFeedbackElement.innerHTML = `<p>${myMessage}</p>`;
    }
    console.log(userInput)
});

/* din view function her */


// opgave 5
myAnsverInput = document.getElementById('InputFive');
myAnsverButton = document.getElementById('answerButtonFive');

myAnsverFeedbackElement = document.getElementById('answerFeedbackFive');

myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();

    console.warn('opgave 5');

    workDays(myAnsverInput.value)

});


/* din kode her.*/



/* din view function her */


