module.exports = ClozeCard;
var fs = require("fs");
//var ClozeCard = require("./cloze");

function ClozeCard(t, c) {
    this.text = t;
    this.cloze = c;
    this.partical =  t.replace(c, "...");
    if (!t.includes(c)) {
       console.log("This won't work");
    } 
}

var questionOne = new ClozeCard ('George Washington was the first president of the United States', 'George Washington');
console.log(questionOne.text);
console.log(questionOne.cloze);
console.log(questionOne.partical);


// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.

// The constructed object should have a partial property that contains only the partial text.

// The constructed object should have a fullText property that contains only the full text.

// The constructor should throw or log an error when the cloze deletion does not appear in the input text.

// Use prototypes to attach these methods, wherever possible.
