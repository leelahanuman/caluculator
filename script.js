function display(number) {
  document.getElementById("inputBox").value += number;
}


function clearTxtMethod(){
  document.getElementById("inputBox").value =''

}
function resultData(){
  document.getElementById("inputBox").value=eval(document.getElementById("inputBox").value)
}
