let name = prompt("What is your name?");
alert("Hello, " + name + " Welcome to my Webpage!!")
document.write("Hello, " + name + " Welcome to my WebPage!!");

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  