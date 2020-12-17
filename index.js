var readlineSync = require("readline-sync");
var score=0;
var username=readlineSync.question("what is your name? ");
console.log("welcome "+username+" to do you know saloni");
function play(question, answer) {
  var userAnswer=readlineSync.question(question);
  if(userAnswer==answer)
  {console.log("you are right");
  score++;
  console.log("score="+score);
  console.log("______________");}
  else
 { console.log("you are wrong");
  score--;
  console.log("score="+score);
  console.log("______________");}
}
var questionOne={
  question:  "where do you live?" ,
  answer: "indore"
}
var questionTwo=
{
  question: "my favroite superhero would be? ",
  answer:  "dhruv"
}
var questionThree=
{
question: "what is your favroite game",
answer: "bedminton"
}
var questions= [questionOne, questionTwo, questionThree];
for(var i=0; i<questions.length; i++)
{
  var currentquestion=questions[i];
 play(currentquestion.question, currentquestion.answer); 
}
console.log("YAY! YOU SCORED: "+score);