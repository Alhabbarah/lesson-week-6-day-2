// click event for gray button
$("#grayButton").on("click",switchGray);
// click event for white button
$("#whiteButton").on("click",switchWhite);
function switchGray() {
    // change background to gray
  //  document.body.style.backgroundColor = "gray";
    // change font to white
  //  document.body.style.color = "white";
  let body = $("body");
  body.css("background","gray");
  body.css("color","white")
}

function switchWhite() {
    // change background to white
  //  document.body.style.backgroundColor = "white";
    // change font to black
  //  document.body.style.color = "black";
  let body = $("body");
//  body.css("background", "white");
//  body.css("color", "black");

  body.css({
    "background": "white",
    "color": "black"
  })
}
