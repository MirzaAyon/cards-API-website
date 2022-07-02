// console.log('Connected'); //for testing

// 1. button event handler setup 
// 2.get input value 
//3.error handling for string value

const searchButton = () => {
    // console.log('button setup');
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
    // console.log(error); 
    const inputValue = parseInt(input.value);
    // console.log(inputValue);
    if (isNaN(inputValue) || inputValue == "") //isNaN check number or string or others
    {
        // alert('please enter a number');
        error.innerText = "please give a number";
        input.value = "";
    }
    else if (inputValue <= 0) {
        error.innerText = 'please give a positive number';
        input.value = "";
    }
    else {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`) //dynamic korar jonno templete string anlam and es6 use korlam 
            //ekhn ami ja value dibo tai ashbe
            //finally API take dynamic korlam
            .then(res => res.json())

            .then(data => cardsDisplay(data))
        //ekhane array take dhorlam


        input.value = "";
    }
}
const cardsDisplay = (cards) => {

    cards = cards.cards;
    console.log(cards);
    //ekhn array take dhorte partesi

    for (const card of cards) {
        console.log(card);
    }


    //object ke for of loop dewa jabe na tai age array take dhorte hbe 
}
// for of loop chaliachi
//now all objects are showing

