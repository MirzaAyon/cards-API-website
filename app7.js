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
        // console.log(card.image);
        // console.log(card.code);

        const div = document.createElement('div');
        div.classList.add('col-lg-4');
        div.classList.add('mb-5');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${card.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${card.suit}</h5>
    <p class="card-text">${card.code}</p>
    <button href="#" class="btn btn-primary">See details  </button>
  </div>
</div>

        `
        main.appendChild(div);
    }


    //object ke for of loop dewa jabe na tai age array take dhorte hbe 
}
// for of loop done
//2nd method porer file e ache
//with more error handling app8 e

