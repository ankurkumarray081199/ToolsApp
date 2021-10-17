let hour = 0;
let min = 0;
let sec = 0;
let milli = 0;

let timer = false;

function start() {
  timer = true;
  stopwatch();
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;

  document.getElementById("hour").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("milli").innerHTML = "00";
  milli = 0;
  sec = 0;
  min = 0;
  hour = 0;
}

function stopwatch() {
  if (timer == true) {
    milli = milli + 1;
    if (milli == 100) {
      sec = sec + 1;
      milli = 0;
    }
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hour = hour + 1;
      min = 0;
      sec = 0;
    }
    var hourst = hour;
    var minst = min;
    var secst = sec;
    var millist = milli;

    if (hour < 10) {
      hourst = "0" + hourst;
    }
    if (min < 10) {
      minst = "0" + minst;
    }
    if (sec < 10) {
      secst = "0" + secst;
    }
    if (milli < 10) {
      millist = "0" + millist;
    }

    document.getElementById("hour").innerHTML = hourst;
    document.getElementById("min").innerHTML = minst;
    document.getElementById("sec").innerHTML = secst;
    document.getElementById("milli").innerHTML = millist;

    setTimeout("stopwatch()", 10);
  }
}
