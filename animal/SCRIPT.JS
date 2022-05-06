$(document).ready(function () {
    get_random_bulb();
    function get_random_bulb() {
        var a = (parseInt(Math.random() * 4));
        $(".lightbulb img.block").removeClass("block").addClass("none");
        $(".lightbulb:eq(" + a + ") img").removeClass("none").addClass("block");
    }
    var rand = Math.round(Math.random() * (3500 - 500)) + 500;
    setInterval(function () {
        get_random_bulb();
    }, rand);
  });