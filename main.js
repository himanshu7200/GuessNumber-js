let randomNumber = parseInt(Math.random()*100+1)

let submit = document.querySelector('#sumit')
let userInput = document.querySelector('.input')
let guessslot = document.querySelector('.guesses')
let remaining = document.querySelector('.lastResult')
let lowOrHi = document.querySelector('.lowOrHi')
let startOver = document.querySelector('.resultParas')
let p = document.querySelector('.p')

// let p = document.createElement('p')

let prevGuess = []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess){
//  ye validate karega ki value 1-100 ke bich hi ho 
    if(isNaN(guess)){
        alert('please enter a valid number')
    } else if (guess < 1){
        alert('please enter a valid number')
    } else if (guess > 100){
        alert('please enter a valid number')
    } else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
// chizo ko evalute krega ki value random number ke equal he ki nhi 
    if (guess === randomNumber){
        displayMessage(`you guesses it right`)
        endGame()
    }
    else if(guess < randomNumber){
        displayMessage(`Number is Tooo Low`)
    }
    else if (guess > randomNumber){
        displayMessage(`number is Too high`)
    }
}

function displayGuess(guess){
//  value ko clean krega or arrays ko update krega
    userInput.value = ''
    guessslot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
//  message pass krna he or print krna he 
    lowOrHi.innerHTML = `<h2> ${message}</h2>`;
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>` ;
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame(){
    let newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100+1);
        prevGuess = []
        numGuess = 1
        guessslot.innerHTML = ''
        remaining.innerHTML = `${11- numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}


