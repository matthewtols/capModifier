var thefile, i;

var openFile = function(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function(){
    var text = reader.result;
    theFile = (reader.result.substring(0, 1000000000));
  };
  reader.readAsText(input.files[0]);
};

document.getElementById("submit").addEventListener("click", logit)
function logit() {
  var count, beingSearched = "";
  for (count; theFile.length; count++) {
    beingSearched = theFile.key[count]
    if (beingSearched == "salaryCap") {
      console.log("found")
    }
  }
}
