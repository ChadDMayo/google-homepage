/*
document.querySelector('img').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/puppies-cover.webp') {
      myImage.setAttribute('src','images/leafy-boi.jpg');
    } else {
      myImage.setAttribute('src','images/puppies-cover.webp');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Look at this adorable puppy, ' + myName;
      }
  }

/*
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
*/
 
myButton.onclick = function() {
    setUserName();
  }