// console.log('Connected'); //for testing

// 1. button event handler setup 
// 2.get input value 
//3.error handling for string value

const searchButton = () => {
    // console.log('button setup');
    const input = document.getElementById('input-value');
    const error = document.getElementById('error');
    // console.log(error); //ei button tae click korle error name h2 tag ta ashbe
    const inputValue = input.value;
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
        fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=10')
            .then(res => res.json())
            // .then(data => console.log(data))
            //ekta positive value dile API ta show krbe inspact e 
            .then(data => cardsDisplay(data))
        //data gulake arekta function e patahe dilam
    }
}
const cardsDisplay = (cards) => {
    console.log(cards); //34th number line e inspact e card showing
} //ebar dynamic API korbo ei jonno next file
