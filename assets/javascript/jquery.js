$(document).ready(function(){

//Begin Trivia Questions    
    var triviaContent = [
        {
            question: "What Color is Invader Zim?",
            picture : "",
            buttonAnswers: [{
                choice: "Green",
                correct: true
            },{
                choice: "Blue",
                correct: false
            },{
                choice: "Grey",
                correct: false
            },{
                choice: "Wtf is Invader Zim",
                correct: false
            }]
    },
    {
            question: "What was Invader Zim's Job and main calling in Life?",
            picture: "",
            buttonAnswers: [
                {
                choice: "Planetery Conquerer",
                correct: true
            },{
                choice: "Food Court Slave",
                correct: false
            },{
                choice: "Evil Emporer",
                correct: false
            },{
                choice: "Wtf is Invader Zim",
                correct: false
            },
        ]},

        {
            question: "Who are Invader Zim's Leaders?",
            picture : "",
            buttonAnswers: [
                {
                choice: "The Alighty Tallest",
                correct: true
            },{
                choice: "The Supreme Leader",
                correct: false
            },{
                choice: "Holy God Emporer",
                correct: false
            },{
                choice: "Wtf is Invader Zim",
                correct: false
            },
        ]
        },

        {
            question: "What is the name of Invader Zim's sidekick?",
            picture : "",
            buttonAnswers: [
                {
                choice: "G.I.R",
                correct: true
            },{
                choice: "Dib",
                correct: false
            },{
                choice: "Minion",
                correct: false
            },{
                choice: "Wtf is Invader Zim",
                correct: false
            },
        ]
        },

        {
            question: "What species is Invader Zim?",
            picture : "",
            buttonAnswers: [
                    {
                    choice: "Irken",
                    correct: true
                },{
                    choice: "Vulcan",
                    correct: false
                },{
                    choice: "Martian",
                    correct: false
                },{
                    choice: "Wtf is Invader Zim",
                    correct: false
                },
            ]
        }
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
    var clockTime = 30;       // start of time

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
        clockTime = 30;

        // randomizes the question   
        // not working 
        triviaContent = (Math.floor(Math.random() * triviaContent.length));
        $('#questionHolder').text(triviaContent.question);
        //rnadomizes the answer
       // i = (triviaContent.buttonAnswers.choice)[Math.floor(Math.random() * (triviaContent.buttonAnswers.choice).length)];
        //for loopage ayyy yea
     //   for (i = 0; i <  (triviaContent.buttonAnswers.choice).length; i++){

        //puts the answer choices inside the buttons
      //  $('#button1').text((triviaContent.buttonAnswers.choice[1]));
    //    $('#button2').text((triviaContent.buttonAnswers.choice[2]));
     //   $('#button3').text((triviaContent.buttonAnswers.choice[3]));
    //    $('#button4').text((triviaContent.buttonAnswers.choice[4]));
    };


        $('#losses').text(gameScore.losses);
        $('#wins').text(gameScore.wins);
        $('#questionHolder').text(triviaContent.question);
       // $('')
        console.log(triviaContent);
        newGame();
    runTimer();


});
//newGame();
//runTimer();
// gets the game going

