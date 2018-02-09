var quiz = [
    ['How many states are in the USA?' , 50],
    ['How many continents are there',7],
    ['How many tires are on a car?',4]
];

var correctAnswer = 0;
var question;
var answer;
var response;
var html;

function print(message) {
    document.write(message);
}

for(var i = 0; i < quiz.length; i += 1){
    question = quiz[i][0];
    answer = quiz[i][1];
    response = parseInt(prompt(question));
    if ( response === answer) {
        correctAnswer += 1;
    }
}

html = "You got "+ correctAnswer +" out of "+ quiz.length +" questionsright";
print(html);