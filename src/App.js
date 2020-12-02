import './App.css';
import Clock from './components/Reader'
import Upload from './components/Upload'
import './custom.scss';
import preval from 'preval.macro';


let text = preval
    ` const fs = require('fs');

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
      
      module.exports = text;
    
`

text = text.replace(/(\r\n|\n|\r)/gm, "");

text = text.trim().split(' ')



function App() {

  return (
    <div className="App">
      <Clock className="mx-auto" textInput={text} />
      <Upload className="mx-auto"/>
    </div>
  );
}

export default App;
