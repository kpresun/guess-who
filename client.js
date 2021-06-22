console.log('Here are all the available people:', people);

$(document).ready(readyNow);


function readyNow() {
loadImages();
promptPlayer();
$('.my-peeps').on('click', 'img', function (){
    yesOrNo();
    resetGame();
    randomizePersons();
});
}

function loadImages() {
    for (const persons of people) {
        $('.image-area').append(`<img src="https://github.com/${persons.githubUsername}.png?size=250">`)
    }
}

function promptPlayer() {
    $('#call-to-action').append(`<h2 class="random-name">Can you find ${randomizePersons()}?</h2>`)
}

function yesOrNo() {
    // is the person clicked equal to name?
        
    }
}

function resetGame() {
    $('.random-name').empty();
}
 
function randomizePersons() {
    i = randomNumber(0, people.length);
    persons = people[i].name;
    return persons;
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function resetGame() {

}
