// console.log('Connected'); //for testing

// 1. button event handler setup 
// 2.get input value 

const searchButton = () => {
    // console.log('button setup');
    //click korle search button showing
    const input = document.getElementById('input-value');
    const inputValue = input.value;
    console.log(inputValue);
    if (isNaN(inputValue) || (inputValue == "")) //isNaN check number or string or others // blank input is not allowed checked
    {
        alert('please enter a number');
    }
}
