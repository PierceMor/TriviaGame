$(document).ready(function(){

//Begin Trivia Questions    
    var triviaContent = [
        {
            question: "What Color is Invader Zim?",
            picture : "",
            buttonAnswers: {
                correctAnswer: "Green",
                wrongAnswer1: "blue", 
                wrongAnswer2: "tan",
                wrongAnswer3: "Wtf is Invader Zim",
            }
        },

        {
            question: "What was Invader Zim's Job and main calling in Life?",
            picture : "",
            buttonAnswers: {
                correctAnswer: "Planetary Conquerer",
                wrongAnswers: "Food Court Slave",
                wrongAnswer2: "Space Pilot",
                wrongAnswer3: "Wtf is Invader Zim",
            }
        },

        {
            question: "Who are Invader Zim's Leaders and why are they called this?",
            picture : "",
            buttonAnswers: {
                correctAnswer: "The Almighty Tallest, they are the tallest",
                wrongAnswer1: "The magnificient Strongest, they are the Strongest",
                wrongAnswer2: "The smartest Rulers, they are smart",
                wrongAnswer3: "Wtf is Invader Zim",
            }
        },

        {
            question: "What is the name of Invader Zim's sidekick?",
            picture : "",
            buttonAnswers: {
                correctAnswer: "G.i.r.",
                wrongAnswer1: "Sidekick",
                wrongAnswer2: "Dib",
                wrongAnswer3: "Wtf is Invader Zim",
            }
        },

        {
            question: "What species is Invader Zim?",
            picture : "",
            buttonAnswers: {
                correctAnswer: "Irken",
                wrongAnswer1: "Human",
                wrongAnswer2: "Vulcan",
                wrongAnswer3: "Wtf is Invader Zim",
            }
        },
    ];
//End Trivia Questions

    var triviaOption;           // placeholder for the entire qeustion
    var triviaQuestion;         // placeholder for the question of the 
    var questionSelection;      // placeholder for the answer choices, this will go with all the buttons
    var playerChoice;           // this is where the player will pick the question
    var pictureHoler;           // this is going to be the picture that accompanies the question
    var gameScore = {           // holds the win loss
        wins: 0,
        losses: 0
    };


    var timeVariable;         // placeholder for the timer 
    var clockTime = 20;       // start of time

    // so beautiful timer 
    function runTimer() {
    var interval = setInterval(function(){
        clockTime --;
        $('#timeRemaining').text(clockTime);
        if ( clockTime === 0 ) {
            clearInterval(interval);
            losses --;
            newGame();
    }}, 1000);
    }

    // process of restarting the game 
    function newGame() {


        //resets the timer
        clockTime = 20;

        triviaOption = triviaContent[Math.floor(Math.random() * triviaContent.length)];

        $('#losses').text(gameScore.losses);
        $('#wins').text(gameScore.wins);
        $('#questionHolder').text(triviaOption);
        console.log(newGame);
    };


newGame();
});