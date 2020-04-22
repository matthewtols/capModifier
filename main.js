
  var openFile = function(event) {
    var input = event.target;

    var reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      var theFile = (reader.result.substring(0, 1000000000));
    };
    reader.readAsText(input.files[0]);
  };

document.getElementById("submit").addEventListener("click", logit)
function logit() {
  console.log(theFile)
}
