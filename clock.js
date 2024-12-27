var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(
    function() {
        d = new Date();
        second = d.getSeconds() * 6;
        minute = d.getMinutes() * 6 +  Math.round(second / 60);
        hour = d.getHours() * 30 + Math.round(minute / 12);
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
    }, 1000
);

let i = 0; 
document.getElementById("dgtal").addEventListener("click", function () {
  if (i === 0) {
    i = 1;
    document.getElementById("digital").style.display = "flex";
    document.getElementById("digital").style.justifyContent = "center";
    document.getElementById("digital").style.alignItems = "center";
    document.getElementById("analog").style.display = "none";

    document.querySelector("h1").innerText = "DIGITAL CLOCK";
    document.querySelector("h1").style.setProperty("--before-content", `"DIGITAL CLOCK"`);
    document.getElementById("dgtal").innerText = "Switch to Analog Clock";
  } else {
    i = 0;
    document.getElementById("digital").style.display = "none";
    document.getElementById("analog").style.display = "flex";

    document.querySelector("h1").innerText = "ANALOG CLOCK";
    document.querySelector("h1").style.setProperty("--before-content", `"ANALOG CLOCK"`);
    document.getElementById("dgtal").innerText = "Switch to Digital Clock";
  }
});

setInterval(
    function() {
        hour = new Date().getHours().toString().padStart(2, '0');
        minute = new Date().getMinutes().toString().padStart(2, '0');
        second = new Date().getSeconds().toString().padStart(2, '0');
        d = hour + ":" + minute + ":" + second;
        document.getElementById("date").innerText = d;
     }, 1000
);
