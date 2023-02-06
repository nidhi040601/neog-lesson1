const readlineSync = require('readline-sync');

//ex: 1 to 4
const username = readlineSync.question('What is your name? ');

console.log("Welcome " + username + ". Nice to see you with us");

console.log("\n------------\n");

//ex: 5
const ansAge = readlineSync.question('Is my age less than 25? ');
if(ansAge === 'yes'){
  console.log('right!');
}else{
  console.log('wrong');
}

console.log("\n------------\n");

//ex: 6
let score = 0;
const ansCity = readlineSync.question('Do I live in Vadodara? ');
if(ansCity === 'yes'){
  console.log('right!');
  score = score + 1;
}else{
  console.log('wrong!');
}
console.log("Score: " + score);

console.log("\n------------\n");

//ex: 7
function add(number1, number2){
  console.log('First number is '+number1+ " and second number is "+ number2);
  const sum = number1+ number2;
  return sum;
}
const sum = add(5,5);
console.log("Sum of 5 and 5 is " + sum);

console.log("\n------------\n");

//ex: 8
function checkAnswer(question, rightAnswer){
  const userAns = readlineSync.question(question);

  if(userAns === rightAnswer){
    console.log('right!');
    score = score + 1;
  }else{
    console.log('wrong!');
  }
}
checkAnswer('Do I like dance? ','yes');
console.log("Score: " + score);

console.log("\n------------\n");

//ex: 9
console.log("For loop:")
for (i = 0; i < 5; i++){
  console.log(i + " :Nidhi");
}

console.log("\n------------\n");

//Star pattern challenge
console.log("STAR pattern");
let stars = "";
for(let i = 0; i < 5; i++){
  for(let j = 0; j <=i; j++ ){
      stars = stars + "*" ;
  }
  stars = stars + '\n';
}
console.log(stars);

//Reverse start pattern
console.log("Reverse STAR pattern");
let reverseStars = "";
for(let i = 5; i > 0; i--){
  for(let j = 0; j < i; j++ ){
      reverseStars = reverseStars + "*" ;
  }
  reverseStars = reverseStars + '\n';
}
console.log(reverseStars);

console.log("\n------------\n");

//ex: 10
const grocery = ["bread","milk", "butter","potato","walnuts"];
console.log(grocery[0]);
console.log(grocery[2]);
console.log(grocery[4]);
//OR
console.log(grocery[grocery.length -1 ]);
console.log("Number of grocery items: "+ grocery.length);

console.log("\n------------\n");

//ex: 11
console.log("Grocery items are: ")
for(let i =0; i<grocery.length; i++){
  console.log(grocery[i]);
}

console.log("\n------------\n");

//ex: 12
console.log("Objects: ")
const superhero = {
  name: 'superhero',
  colour:"red"
}
const batman = {
  name: 'batman',
  colour: "black"
}

console.log(superhero.colour);
console.log(batman.colour);
console.log(superhero.colour === batman.colour);

console.log("\n------------\n");

//ex: 13,14,15
let newScore = 0;
const highScore = {
  name: 'Riddhi',
  score: 2
}
const question1 = {
  question: "Who is my favorite superhero?",
  answer: "Dhruv"
}
const question2 = {
  question: "Which is my favorite sad song?",
  answer: "Channa Meraya"
}
const question3 = {
  question: "Which is my favorite fruit?",
  answer: "Mango"
}
const questions = [question1, question2,question3];

function quiz(question, answer){
  const userAns = readlineSync.question(question);
  if( userAns === answer){
    console.log("right!!");
    newScore++;
  }else{
    console.log("wrong!!");
  }
  console.log("Your score: " + newScore);
  console.log("----------------------");
}
for(let i=0; i < questions.length; i++ ){
  quiz(questions[i].question, questions[i].answer);
}

if(newScore > highScore.score){
  console.log("Yayyy!! You created a High Score: " + newScore);
}else{
  console.log("HIGH SCORES: \n" + highScore.name + ": " + highScore.score);
}