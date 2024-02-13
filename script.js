var targetDate = new Date("2023-11-14T11:00:00");

var countdown = setInterval(function() {
    var now = new Date().getTime();
    
    var distance = targetDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = "Days: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
