// utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";
const holes = $('.hole');
//utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";
const scoreBoard = $('.score');
// utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";
const moles = $('.mole');

let i = 0;
let interval;

function randomHole() {
    let randomNumber = Math.floor(Math.random() * holes.length);
    return $('.hole' + randomNumber);
}

function randomTime() {
    let randomNumber = Math.round(Math.random() * 1000);
    if (randomNumber < 200)
        return randomTime();
    return randomNumber;
}

function runGame() {
    if (!stopGame()) {
       let curentHole = randomHole().addClass('up');
        setTimeout(function () {
            curentHole.removeClass('up');
            runGame()
        }, randomTime())
    }
}

function stopGame() {
    if (i === 10) {
        clearInterval(interval)
        return true
    }
}

$('#startGame').click(function () {
    interval = setInterval(function () {
        i++
        stopGame()
    }, 1000)
    runGame()
});

moles.click(function () {
    console.log(scoreBoard.text() + 1)
    scoreBoard.text((parseInt(scoreBoard.text()) + 1).toString());
    moles.removeClass('up');
    runGame();
});
