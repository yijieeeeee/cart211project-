var start = 7500000;
var speed = 1000;
$(document).ready(function() {
  go();
  setInterval(function() {
    go();
  }, speed);
});

function go() {
  $("#counter").html(start.toFixed(0));
  start += 0.125;
}