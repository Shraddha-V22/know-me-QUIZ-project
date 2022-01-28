
var readlineSync = require("readline-sync");

var score = 0;

console.log("Hello! ");
console.log();

var userAnswer = readlineSync.question("Please type your name ");
console.log("WELCOME, " + userAnswer + "!");
console.log();

console.log("This is a short fun quiz to see 'How well do you know ME.");
console.log();

console.log("[Type only the option markers, for example a,b,c,d or e as an answer and press enter.]");
console.log();

console.log("Let's START...");

function play(question, answer) {
  var userAnswer= readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("That's Correct!");
    score = score + 1;
  }else {
    console.log("Oops! That's not correct!")
  };
  console.log();
};

var meQuestions1 = {
  question : "Would I rather go out or stay at home? (a).go out (b).stay home ",
  answer : "b"
};
var meQuestions2 = {
  question : "Which is my favourite street food? (a).pani puri (b).pav bhaji (c).masala dosa (d).vada pav ",
  answer : "a"
};
var meQuestions3 = {
  question : "What was my last craze? (a).loki (b).BTS (c).anime (d).barun sobti ",
  answer : "b"
};
var meQuestions4 = {
  question : "who's voice is my favourite? (a).Neelesh misra (b).taehyung (c).levi's voice actor (d).kishore kumar (e).AOTA ",
  answer : "e"
};
var meQuestions5 = {
  question : "if someone gave you 10 million dollars to slap me would you accept? (a).Yes (b).No (c).Yes and we will divide it between us ",
  answer : "c"
};

var meQuiz = [meQuestions1, meQuestions2, meQuestions3, meQuestions4, meQuestions5]

for(var i=0; i<meQuiz.length; i++) {
  var hWDYKquiz = meQuiz[i];
  play(hWDYKquiz.question, hWDYKquiz.answer)
};

console.log("You scored " + score + " out of 5! ");
console.log();

var rating = {
  0 : "You don't know me at all!",
  1 : "You know little about me",
  2 : "We should talk more, I guess",
  3 : "hmm..We are good friends",
  4 : "BFF... yeahhh heyyy!(inserting COUNT ON ME by Bruno Mars)",
  5 : "SOULMATESSS... WE ARE!!!"
};

for(var i=0; i<1; i++) {
  console.log(rating[score])
};