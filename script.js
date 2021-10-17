let text = document.getElementById("text");
text.addEventListener("input", function () {
  let count = text.value;
  let char = (document.getElementById("char").innerHTML = count.length);

  count = count.trim();
  let words = count.split(" ");
  let cleanWords = words.filter(function (el) {
    return el != "";
  });

  document.getElementById("words").innerHTML = cleanWords.length;
});

function changebg(color) {
  document.body.style.background = color;
  let choose = document.getElementById("choose");

  if (color == "#000") {
    choose.style.color = "#ffc107";
  } else {
    choose.style.color = "#000";
  }
}
// window.addEventListener("scroll", function () {
//     // console.log(this.window.pageYOffset);
//   let nav = document.getElementById("nav");
//   if (window.pageYOffset >= 75) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

