'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ' Congradulation correct number';
document.querySelector('.number').textContent = 17;
document.querySelector('.score').textContent = 9;
document.querySelector('.guess').value = 27;
console.log(document.querySelector('.guess').value = 27);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
};


document.querySelector('.check').addEventListener ('click', function () {
    //console.log(document.querySelector('.guess').value);
    const guess = Number (document.querySelector('.guess').value);
    console.log(guess, typeof guess) 
    // when there is no input
   if (!guess) {
     //   document.querySelector('.message').textContent = ' No valid number!';
     displayMessage('no valid Number !')

    // when the player win
    } else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = 'congradulation correct number';
        displayMessage('congradulation correct number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if ( score > highscore ) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    // when the number is wrong
   
} else if (guess !== secretNumber) {
    if (score > 1) {
       // document.querySelector('.message').textContent = guess > secretNumber ? ' to high 🙂 ' : 'to low 🙄​';
       displayMessage(guess > secretNumber ? ' to high 🙂 ' : 'to low 🙄');
        score--;
        document.querySelector('.score').textContent = score;
        } else {
           // document.querySelector('.message').textContent = ' You lose the game broo 😢, try again';
           displayMessage(' You lose the game 😢, try again');
            document.querySelector('.score').textContent = 0;
        }
    }
});

    
    // when the number is high
   /* } else if (guess > secretNumber) {
        if (score > 1) {
        document.querySelector('.message').textContent = 'to high broo';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = ' You lose the game broo, try again';
            document.querySelector('.score').textContent = 0;
        }
    // when the number is low    
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'to low broo';
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = ' You lose the game broo, try again';
                document.querySelector('.score').textContent = 0;
            }
    }
}); */
    
document.querySelector('.again').addEventListener ('click', function () {
   score = 20;
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   
   //document.querySelector('.message').textContent = ' Start guessing....';
   displayMessage('Start guessing....');
   document.querySelector('.score').textContent = score;
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
   
});


