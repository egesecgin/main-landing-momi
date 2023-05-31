var count = 0;
var image = document.getElementById("moving-image");
var card = document.querySelector(".card");

image.addEventListener("click", function () {
  var cardRect = card.getBoundingClientRect();
  var imageRect = image.getBoundingClientRect();
  var maxX = cardRect.width - imageRect.width;
  var maxY = cardRect.height - imageRect.height - 200; // 100px was added to prevent the image from going below the card quick bug fix :D
  var x = Math.floor(Math.random() * maxX);
  var y = Math.floor(Math.random() * maxY);
  x = Math.max(x, 0);
  y = Math.max(y, 0);
  image.style.left = x + "px";
  image.style.top = y + "px";
  count++;
  if (count == 10) {
    window.location.href = "https://egesecgin.github.io/3js-page";
  }
});
