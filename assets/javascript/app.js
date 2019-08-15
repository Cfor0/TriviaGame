$(document).ready(function () {
    $(".questions").hide();
    // game questions array
    var gameQuestions = [
        { question: "What is my last name?",
        choices: ["Neely", "Ortega", "Hair", "Kevin"], 
        correctAnswer: "Ortega"
        },
        { question: "What is my first name?",
        choices: ["Josh", "Carlo", "Juan", "Kevin"], 
        correctAnswer: "Carlo"
        },
        { question: "What how old am I?",
        choices: ["24", "19", "23", "22"], 
        correctAnswer: "22"
        },
        { question: "What is my favorite color?",
        choices: ["green", "yellow", "blue", "Kevin"], 
        correctAnswer: "green"
        },
        { question: "What was my major in?",
        choices: ["computer science", "finance", "marketing", "music"], 
        correctAnswer: "music"
        },
    ];
    console.log(gameQuestions)
    // load game Questions
    var currentQuestion = 0;
    
    function loadQuestions() {
        var question = gameQuestions[currentQuestion].question;
        var choices = gameQuestions[currentQuestion].choices;
        $("#timer").html("Time Remaining: " + )
        $("#game").html("<h4>" + question + "</h4>");
    }
    loadQuestions();
    //load game choices

    // make start button hide and bring up questions onclick
    $("#start").click(function startTimer() {
        $("#start").hide();
        $(".questions").show();


        setInterval(thirtySec, 30000);
        function thirtySec() {
           
            console.log("works")
        }
    });

    // create variable for setTimeout
    // make answer buttons only one select
    // rese




});