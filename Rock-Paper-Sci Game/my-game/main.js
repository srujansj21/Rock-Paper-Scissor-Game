const options = document.querySelectorAll('.option');
const middleSection = document.getElementById('middleSection');
const bottomSection = document.getElementById('bottomSection');
//console.log(options);

let userChoise;
let cpOptions;
const playAgain = document.getElementById(('playAgain'));
const resultSection = document.getElementById(('showResultContainer'));
let chance = 10;
//let userScore = 0;
//let cpuScore = 0;
resultSection.style.display = 'none';


const userChoiceOptions = {
    Rock: "./images/rock.png",
    Paper: "./images/paper.png",
    Scissor: "./images/scissor.png",
}

options.forEach((x) => {
    x.addEventListener('click', (e) => {
        userChoise = e.target.id;

        if(chance > 0){

          userChoice();

        }
        else{
          resultSection.style.display = 'flex'; 
          middleSection.style.display = 'none';
          bottomSection.style.display = 'none';
          winLoose();
        }
        
    })
})

const userChoice =() => {
    middleSection.style.display = 'none';
    bottomSection.style.display = 'flex';

/* 
if (userChoise === 'Rock'){
    document.getElementById("userPicked").src= "./images/rock.png";
}
else if (userChoice === 'Paper'){
    document.getElementById("userPicked").src= "./images/paper.png";
}
else if (userChoice === 'Scissor'){
    document.getElementById("userPicked").src= "./images/scissor.png"; 
}
*/

document.getElementById('userPicked').src = userChoiceOptions[userChoise];
computerChoice();
Result(userChoise, cpOptions);
}

const computerChoice = () =>{
    let computerOptions = ['Rock', 'Paper', 'Scissor'];
    cpOptions = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    document.getElementById('computerPicked').src = userChoiceOptions[cpOptions];
} 

const Result = (userChoise, cpOptions) => {
    if (userChoise === "Paper" && cpOptions === "Scissor") {
        Decision("YOU Lose!");
        Score(chance - 1);
        CpuScore(cpuScore + 1);
      } else if (userChoise === "Paper" && cpOptions === "Rock") {
        Decision("YOU win!");
        Score(chance - 1);
        UserScore(userScore + 1);
      } else if (userChoise === "Rock" && cpOptions === "Scissor") {
        Decision("YOU win!");
        Score(chance- 1);
        UserScore(userScore + 1);
      } else if (userChoise === "Paper" && cpOptions === "Paper") {
        Decision("Match Tie!");
        Score(chance - 1);
      } else if (userChoise === "Rock" && cpOptions === "Scissor") {
        Decision("YOU win!");
        Score(chance - 1);
        UserScore(userScore + 1);
      } else if (userChoise === "Rock" && cpOptions === "Paper") {
        Decision("YOU Lose");
        Score(chance - 1);
        CpuScore(cpuScore + 1);
      } else if (userChoise === "Rock" && cpOptions === "Rock") {
        Decision("Match Tie!");
        Score(chance - 1);
      } else if (userChoise === "Scissor" && cpOptions === "Scissor") {
        Decision("Match Tie!");
        Score(chance - 1);
      } else if (userChoise === "Scissor" && cpOptions === "Rock") {
        Decision("YOU Lose!");
        Score(chance - 1);
        CpuScore(cpuScore + 1);
      } else if (userChoise === "Paper" && cpOptions === "Scissor") {
        Decision("YOU Lose!");
        Score(chance - 1);
        CpuScore(cpuScore + 1);
      } else if (userChoise === "Scissor" && cpOptions === "Paper") {
        Decision("YOU Win!");
        Score(chance - 1);
        UserScore(userScore + 1);
      }
};

const Decision = (decision) => {
    document.querySelector('.resultContainer h1').innerText = decision;
};
playAgain.addEventListener('click', ()=> {
  middleSection.style.display = 'flex';
  bottomSection.style.display = 'none';
});

const Score = (totalScore) => {
  chance = totalScore;
  document.querySelector(('.chance h1')).innerText = totalScore;
};

const UserScore = (Uscore) => {
  userScore = Uscore;
  document.querySelector(".userScore h1").innerText = Uscore;
};

const CpuScore = (Cscore) => {
  cpuScore = Cscore;
  document.querySelector(".cpuScore h1").innerText = Cscore;
};
const winLoose = () => {
  if (userScore == cpuScore) {
    document.querySelector(".result h1").innerText = "Ahh! Match Draw";
  } else if (userScore > cpuScore) {
    document.querySelector(".result h1").innerText = "Yeahh! You win";
  } else {
    document.querySelector(".result h1").innerText = "Ohhh! You Lose";
  }
};

/* Developed by Srujan Marapaka *//* Developed by Srujan Marapaka */
/* Developed by Srujan Marapaka *//* Developed by Srujan Marapaka */
/* Developed by Srujan Marapaka *//* Developed by Srujan Marapaka */
/* Developed by Srujan Marapaka *//* Developed by Srujan Marapaka */
/* Developed by Srujan Marapaka *//* Developed by Srujan Marapaka */
/* Developed by Srujan Marapaka *//* Developed by Srujan Marapaka */
/* Developed by Srujan Marapaka *//* Developed by Srujan Marapaka */
/* Developed by Srujan Marapaka *//* Developed by Srujan Marapaka */
/* Developed by Srujan Marapaka *//* Developed by Srujan Marapaka */
/* Developed by Srujan Marapaka *//* Developed by Srujan Marapaka */
/* Developed by Srujan Marapaka *//* Developed by Srujan Marapaka */
/* Developed by Srujan Marapaka *//* Developed by Srujan Marapaka */