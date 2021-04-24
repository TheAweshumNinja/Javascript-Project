

const buttonElement = document.querySelector('#search-button');
const inputElement = document.querySelector('#inputValue');





buttonElement.onclick = function(event) {
    event.preventDefault();
    const value = inputElement.value;
    console.log(' Value: ', value);
    console.log('Hello World, this button has been clicked ')
}