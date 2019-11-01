import $ from 'jquery';
import './main.css';

function findDogs(breed) {
  console.log(breed);
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson))
    .catch(e => console.log('We do not have images of this breed - sad!'));
  


}

function displayDogs(responseJson) {
  $('.results').html(
    `<img src="${responseJson.message}" class="results-img">
    <br></br>`);
 
 
  $('.imgs').removeClass('hidden');
}

function watchButton() {
  console.log('watchButton called');
  let button = $('#dogs');
  console.log(button);
  button.on('submit', (e) => {
    e.preventDefault();
    console.log('button working');

    let breed = $('#enter-num').val();
    console.log('breed is', breed);
    findDogs(breed);

 

  });
}


$(watchButton);