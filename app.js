var array = [
    {
        question: "What does HTML stand for?",
        option1: "Hyper Text Markup Language",
        option2: "High Tech Modern Language",
        option3: "Home Tool Markup Language",
        correctanswer: "Hyper Text Markup Language"
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        option1: "<a>",
        option2: "<link>",
        option3: "<href>",
        correctanswer: "<a>"
    },
    {
        question: "Which language is used to style web pages?",
        option1: "JavaScript",
        option2: "CSS",
        option3: "Python",
        correctanswer: "CSS"
    },
    {
        question: "Which language is used to make web pages interactive?",
        option1: "JavaScript",
        option2: "HTML",
        option3: "CSS",
        correctanswer: "JavaScript"
    },
    {
        question: "Which HTML tag is used for the largest heading?",
        option1: "<h6>",
        option2: "<heading>",
        option3: "<h1>",
        correctanswer: "<h1>"
    },
    {
        question: "What does CSS stand for?",
        option1: "Creative Style Sheets",
        option2: "Cascading Style Sheets",
        option3: "Computer Style Sheets",
        correctanswer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used to display an image?",
        option1: "<img>",
        option2: "<image>",
        option3: "<pic>",
        correctanswer: "<img>"
    },
    {
        question: "Which CSS property changes text color?",
        option1: "background",
        option2: "font-color",
        option3: "color",
        correctanswer: "color"
    },
    {
        question: "How do you write a comment in JavaScript?",
        option1: "// Comment",
        option2: "<!-- Comment -->",
        option3: "** Comment **",
        correctanswer: "// Comment"
    },
    {
        question: "Which HTML tag is used to create a button?",
        option1: "<btn>",
        option2: "<button>",
        option3: "<inputbutton>",
        correctanswer: "<button>"
    },
    {
        question: "Which symbol is used for IDs in CSS?",
        option1: ".",
        option2: "#",
        option3: "*",
        correctanswer: "#"
    },
    {
        question: "Which symbol is used for classes in CSS?",
        option1: ".",
        option2: "#",
        option3: "@",
        correctanswer: "."
    },
    {
        question: "Which method displays a popup message in JavaScript?",
        option1: "print()",
        option2: "alert()",
        option3: "message()",
        correctanswer: "alert()"
    },
    {
        question: "Which HTML tag is used to create a paragraph?",
        option1: "<para>",
        option2: "<text>",
        option3: "<p>",
        correctanswer: "<p>"
    },
    {
        question: "Which company developed JavaScript?",
        option1: "Microsoft",
        option2: "Netscape",
        option3: "Google",
        correctanswer: "Netscape"
    }
];

var index = 0;
var score = 0;

var get_question = document.getElementById("question");
var get_opt1 = document.getElementById("opt1");
var get_opt2 = document.getElementById("opt2");
var get_opt3 = document.getElementById("opt3");

function showQuestion() {

    get_question.innerText = array[index].question;

    get_opt1.innerText = array[index].option1;
    get_opt2.innerText = array[index].option2;
    get_opt3.innerText = array[index].option3;

    document.getElementById("r1").value = array[index].option1;
    document.getElementById("r2").value = array[index].option2;
    document.getElementById("r3").value = array[index].option3;
}

showQuestion();

function btn() {

    var options = document.getElementsByName("quiz_question");
    var selectedAnswer;

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedAnswer = options[i].value;
        }
    }

    if (selectedAnswer === array[index].correctanswer) {
        score++;
    }

    document.getElementById("score").innerHTML =
        "<b>Score : " + score + "</b>";

    index++;

    if (index < array.length) {

        showQuestion();

        // Uncheck radio buttons
        for (var i = 0; i < options.length; i++) {
            options[i].checked = false;
        }
        document.getElementById("btn").disabled = true;

    }
    else {

        document.getElementById("btn").disabled = true;

        var percentage = (score / array.length) * 100;

        var conclusionText = "";

        if (percentage >= 89) {
            conclusionText = "Congratulations! You have Nailed the test.";
        }
        else if (percentage >= 80) {
            conclusionText = "Congratulations! You have Easily Passed the test.";
        }
        else if (percentage >= 70) {
            conclusionText = "Congratulations! You have  Passed the test.";
        }
        else if (percentage >= 60) {
            conclusionText = "Congratulations! You have Barely Passed the test.";
        }
        else {
            conclusionText = "You did not pass the test. Better luck next time!";
        }

        // Show score immediately
        document.getElementById("score").innerHTML =
            "<b>Score : " + score + "/" + array.length + "</b>";

        // Show percentage after 2 seconds
        setTimeout(function () {
            document.getElementById("result").innerHTML =
                "<b>Percentage : " + percentage + "%</b>";
        }, 1000);

        // Show conclusion after 4 seconds
        setTimeout(function () {
            document.getElementById("conclusion").innerHTML =

                "<b>Conclusion :" + conclusionText + "%</b>";
        }, 1000);
    }
}

function btnClick() {
    document.getElementById("btn").disabled = false;
}

var time = 180;

setInterval(function () {

    document.getElementById("timer").innerHTML = time;

    time--;

}, 1000);
