const fs = require("fs");
const pdf = require("pdf-extraction");
 
let dataBuffer = fs.readFileSync("uploads/text.pdf");

pdf(dataBuffer).then(function (data) {

    fs.writeFile("./text.txt", data.text , function(err) {
        if(err) {
           return console.log(err);
        }
        console.log("The file was saved!");
     }); 

});


var text = fs.readFileSync("uploads/text.txt").toString('utf-8');

text = text.replace(/(\r\n|\n|\r)/gm, "");

text = text.trim().split(' ')

module.exports = text

