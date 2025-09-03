let myAnsverInput = document.getElementById('answerOne');
let myAnsverButton = document.getElementById('answerButtonOne');

let myAnsverFeedbackElement = document.getElementById('answerFeedback');




// opgave 1 og 2

myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 1 og 2');

    /* din kode her.*/
    const userInput = parseInt(myAnsverInput.value);

    switch (userInput) {
        case 1:
            showMessage("Du har valgt 1");
            break;

        case 2:
            showMessage("Du har valgt 2");
            break;
        case 3:
            showMessage("Du har valgt 3");
            break;

        case 4:
            showMessage("Du har valgt 4");
            break;

        case 5:
            showMessage("Du har valgt 5");
            break;

        default:
            showMessage("Du skal vælge et tal mellem 1 og 5");
            break;
    }
    //view function
    function showMessage(myMessage) {
        myAnsverFeedbackElement.innerHTML = `<p>${myMessage}</p>`;
    }
    console.log(userInput)
});


/* skriv evt en view funktion der viser om svaret er korrekt i myAnsverFeedbackElement, brug evt. innerHTML*/



// opgave 3 og 4
myAnsverInput = document.getElementById('answerTwo');
myAnsverButton = document.getElementById('answerButtonTwo');

myAnsverFeedbackElement = document.getElementById('answerFeedbackTwo');

myAnsverButton.addEventListener('click', (event) => {
    event.preventDefault();
    console.warn('opgave 3 og 4');
    /* din kode her.*/
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


