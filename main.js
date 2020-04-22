var theFile;

var openFile = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    theFile = (reader.result.substring(150000, 160000));
  };
  reader.readAsText(input.files[0]);
};

document.getElementById("submit").addEventListener("click", logit)
function logit() {
  //JSON.stringify(theFile)
  var theStrings = theFile.search('{"key": "salaryCap","value": ')
  var count = 0
  for (count; count<1000; count++) {
    var stringy = theStrings + count + 26;
    var THESTRING = theFile.slice(theStrings, stringy)
    var breakingLoop = THESTRING.lastIndexOf("}")
    if (breakingLoop !== -1) {break;}
    
  }console.log(theFile)
}
