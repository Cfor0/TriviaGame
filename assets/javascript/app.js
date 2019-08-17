$(document).ready(function () {
    $(".questions").hide();
    // game questions array
    var gameQuestions = [
        {
            question: "What is my last name?",
            choices: ["Neely", "Ortega", "Hair", "Kevin"],
            correctAnswer: "Ortega"
        },
        {
            question: "What is my first name?",
            choices: ["Josh", "Carlo", "Juan", "Kevin"],
            correctAnswer: "Carlo"
        },
        {
            question: "What how old am I?",
            choices: ["24", "19", "23", "22"],
            correctAnswer: "22"
        },
        {
            question: "What is my favorite color?",
            choices: ["green", "yellow", "blue", "Kevin"],
            correctAnswer: "green"
        },
        {
            question: "What was my major in?",
            choices: ["computer science", "finance", "marketing", "music"],
            correctAnswer: "music"
        },
    ];
    console.log(gameQuestions)
    var score = 0
    var lost = 0
    // load game Questions
    var currentQuestion = 0;
    var counter = 30;
    //creating variable for timer in the global scope
    var timer;



    //go to next question when timer = 0
    function nextQuestion() {
        var isQuestionOver = (gameQuestions.length - 1) === currentQuestion;
        if (isQuestionOver) {
            showResult();
            console.log('over')
        } else {
            currentQuestion++;
            loadQuestions();
        }
    }

    // create count down timer with counter variable
    function timeup() {
        clearInterval(timer);
        nextQuestion();
    }
    function countdown() {
        counter--;
        $('#timer').html(`Time Remaining: ` + counter);
        if (counter === 0) {
            timeup();
        }
    }

    function loadQuestions() {
        counter = 30;
        timer = setInterval(countdown, 1000);

        var question = gameQuestions[currentQuestion].question;
        var choices = gameQuestions[currentQuestion].choices;
        $("#timer").html(`Time Remaining: ` + counter);
        $("#game").html(`
        <h4>${question}</h4>
        ${loadChoices(choices)}
        `);
    }


    //load game choices
    function loadChoices(choices) {
        var result = '';
        for (var i = 0; i < choices.length; i++) {
            result += `<p class ="choice" data-answer = "${choices[i]}">${choices[i]} </p>`;
        }
        return result;
    }
    loadQuestions();

    // make start button hide and bring up questions onclick
    $("#start").click(function startTimer() {
        $("#start").hide();
        $(".questions").show();



    });

    // clicking right or wrong answer, move to next question
    $(document).on("click", ".choice", function () {
        clearInterval(timer);
        var userAnswer = $(this).attr('data-answer');
        var correctAnswer = gameQuestions[currentQuestion].correctAnswer;
        if (correctAnswer === userAnswer) {
            score++;
            console.log('win')
            nextQuestion();
        } else {
            lost++;
            nextQuestion();
            console.log('loss')
        }
        console.log('works: ', userAnswer)
    })

    function showResult(){
        var result = `
        <p>You get ${score} questions right</p>
        <p>You missed ${lost} questions </p>
        <p>Total Questions: ${gameQuestions.length} questions</p>
        <button>Reset Game</button>

        `;
        $("#game").html(result);
    }




});