module.exports = BasicCard;
var fs = require("fs");
//var BasicCard = require("./basic");


function BasicCard(f, b) {
    this.front = f;
    this.back = b;
}

// inquirer.prompt([

//   {
//     type: "input",
//     name: "answer",
//     message: "Answer?"
//   }

// ]).then(function(user) {

//   if (user.answer=== questionOne.back) {

//     console.log("good job!");
//   }
//   else {

//     console.log("try again?");

//   }
// });

var questionOne = new BasicCard('Who was the first president of the United States?','George Washington');
console.log(questionOne.front);
console.log(questionOne.back);

// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");

// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 