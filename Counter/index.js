function increment() {
  var num = parseInt(document.getElementById("number").innerHTML);

  document.getElementById("number").innerHTML = num + 1;
  //   console.log(num);
}
function decrement() {
  var num = parseInt(document.getElementById("number").innerHTML);
  document.getElementById("number").innerHTML = num - 1;
}
function neutral() {
  var num = parseInt(document.getElementById("number").innerHTML);
  document.getElementById("number").innerHTML = 0;
}
