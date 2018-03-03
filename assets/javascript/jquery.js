$(document).ready(function(){

    //Begin Trivia Questions    
        var triviaContent = [
            {
                question: "What Color is Invader Zim?",
                picture : "assets/images/naky.jpg",
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
                picture : "assets/images/invader-zim-returns.jpg",
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
            ]
            },
    
            {
                question: "Who are Invader Zim's Leaders and why are they called this?",
                picture : "assets/images/tallest.jpg",
                buttonAnswers: [
                    {
                    choice: "The All mighty Tallest",
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
                picture : "assets/images/dib.jpg",
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
                picture : "assets/images/irken.jpg",
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
        };
    
        // process of restarting the game 
        function newGame() {
    
    
            //resets the timer
            clockTime = 30;
    
            let i = Math.floor(Math.random() * 4);

            triviaOption = triviaContent[Math.floor(Math.random() * triviaContent.length)];
           

            $('#losses').text(gameScore.losses);
            $('#wins').text(gameScore.wins);
            $('#questionHolder').text(triviaOption.question);
            $('#pictureZim').html('<img src=' + triviaOption.picture + '>')
        //    console.log(triviaAnswer.buttonAnswers);


        //randomiize this here button choices 
        questionAnswer = triviaOption.buttonAnswers[i].choice;
            $('#button1').text(triviaOption.buttonAnswers[1].choice);
            $('#button2').text(triviaOption.buttonAnswers[2].choice);
            $('#button3').text(triviaOption.buttonAnswers[3].choice);
            $('#button4').text(triviaOption.buttonAnswers[0].choice);

            

        };
    
        function buttonBaby(button){
            playerChoice = button;

            if ( button === triviaOption.buttonAnswers[0].choice ) {
                gameScore.wins ++;
                newGame();
                winDisplay();
            } else if (button !== triviaOption.buttonAnswers[0].choice ) { 
                gameScore.losses ++;
                newGame();
                lossDisplay();
            }

        }

        $('#button1').click(function(){
            buttonBaby();
        });
        $('#button2').click(function(){
            buttonBaby();
        });
        $('#button3').click(function(){
            buttonBaby();
        });
        $('#button4').click(function(){
            buttonBaby();
        });
        $("#skipQuestion").click(function(){
            newGame();
        });

        function winDisplay(){
            alert('VICTORY IS YOURS!');
        }

        function lossDisplay(){
            alert('The filthy humans have won');
        }

        

    newGame();
    runTimer();
    });