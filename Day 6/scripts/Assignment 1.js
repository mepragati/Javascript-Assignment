var c = ["#90EE90","#98FB98","#8FBC8F","#3CB371","#20B2AA","#2E8B57","#808000","#556B2F","#6B8E23"];
  var currentColorIndex = 0;

  function changeColor() {
    document.bgColor = c[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % c.length;
    setTimeout(changeColor, 5000);
  }