import $ from 'jquery';
import './main.css';

function findDogs(num) {
  console.log(num);

  let stringToNum = parseInt(num, 10);

  console.log(stringToNum);

  if(typeof stringToNum == 'number'){  
    fetch(`https://dog.ceo/api/breeds/image/random/${stringToNum}`)
      .then(response => response.json())
      .then(responseJson => displayDogs(responseJson))
      .catch(e => console.log('there is a problem'));
  } else { 
    fetch('https://dog.ceo/api/breeds/image/random/3')
      .then(response => response.json())
      .then(responseJson => displayDogs(responseJson))
      .catch(e => console.log('there is a problem'));
  }
}

function displayDogs(responseJson) {
 
  for (let i = 0; i < responseJson.message.length; i++) {
    $('.results').append(
      `<img src="${responseJson.message[i]}" class="results-img">
  <br></br>`);
    
  }
  $('.imgs').removeClass('hidden');
}

function watchButton() {
  console.log('watchButton called');
  let button = $('#dogs');
  console.log(button);
  button.on('submit', (e) => {
    e.preventDefault();
    console.log('button working');


    let numberOfPups = $('#enter-num').val();
    console.log('num pups is ', numberOfPups)
    findDogs(numberOfPups);

  });
}


$(watchButton);