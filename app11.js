// console.log('Connected'); //for testing

// 1. button event handler setup 
// 2.get input value 
//3.error handling for string value
const main = document.getElementById('main');
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
        main.innerHTML = ''; //eta korle ulta palta type korlei pic gula nai hye jabe and error dibe
    }
    else if (inputValue <= 0) {
        error.innerText = 'please give a positive number';
        input.value = "";
        main.innerHTML = '';

    }
    else {
        main.innerHTML = ''; //eta korle ager pic gula remove hbe , ta nahole notun entry dile ager gulao theke jabe 

        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`) //dynamic korar jonno templete string anlam and es6 use korlam 
            //ekhn ami ja value dibo tai ashbe
            //finally API take dynamic korlam
            .then(res => res.json())

            .then(data => cardsDisplay(data.cards))
        //ekhane array take dhorlam


        input.value = "";
        error.innerHTML = ""; //ekhn error dile error show korbe but error na thakle error msg chole jbe
    }
}
const cardsDisplay = (cards) => {
    // console.log(cards);
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
    <button onclick="cardDetails('${card.code}')" href="#" class="btn btn-primary">See details  </button>
  </div>
</div>

        `
        main.appendChild(div);
    }
    //object ke for of loop dewa jabe na tai age array take dhorte hbe 
}
//porer file e for of loop chalabo
//2nd method porer file e ache
//app9 e see details dekhbo


//ekhn show details button niye kaj korbo
const cardDetails = (code) => {
    // console.log(code);
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
        //ei jinish ta upr theke abr boshalam
        .then(res => res.json())

        .then(data => {
            const allCards = data.cards;
            // console.log(allCards);
            const singleCrad = allCards.find(card => card.code === code)
            // console.log(singleCrad);
            const div = document.createElement('div');
            main.innerHTML = "";
            div.innerHTML = `
        <div class="card" style="width: 18rem;">
<img src="${singleCrad.image}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${singleCrad.suit}</h5>
    <p class="card-text">${singleCrad.code}</p>
    <p class="card-text">${singleCrad.value}</p>
    
</div>
</div>
        `
            main.appendChild(div);
            //ekhane button ta remove kore disi
        })
    //same kaj tai just alada vabe declare kore korlam

}
//jekono see details ee click korlei done show kortese
//ekhon console log eo ek ek ta seedetails e click korle ek ek ta show kortese
//load er kaj ta ami abr korbo sheta app11 e ache
