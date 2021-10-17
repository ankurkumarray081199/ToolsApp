let flag = 0;
function controller(x) {
  flag = flag + x;
  slideshow(flag);
}

slideshow(flag);
function slideshow(num) {
  let slides = document.getElementsByClassName("slide");
  console.log(slides.length);
  if (num == slides.length) { 
    flag = 0;
    num = 0;
  }
  if (num < 0) {
    flag = slides.length - 1;
    num = slides.length - 1;
  }
  for (const el of slides) {
    el.style.display = "none";
  }
  slides[num].style.display = "block";
}
