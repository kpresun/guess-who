console.log('Here are all the available people:', people);

$(document).ready(readyNow);


function readyNow() {
loadImages();
promptPlayer();
$('.my-peeps').on('click', 'img', function (){
    resetGame();
    randomizePersons();
});
}

function loadImages() {
    for (const persons of people) {
        $('.image-area').append(`<div class="my-peeps><img src="https://github.com/${persons.githubUsername}.png?size=250"></div>`)
    }
}

function promptPlayer() {
    $('#call-to-action').append(`<h2 class="random-name">'Can you find ${name}?'</h2>`)
}

function resetGame() {
    
}
 
function randomizePersons() {
    $('.prompting-area').append()
}


function resetGame() {

}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}