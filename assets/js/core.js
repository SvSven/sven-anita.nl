var options = {
    strings: ["Ja, vi skal gifte oss.", "Yes, we are getting married.", "Ja, wij gaan trouwen."],
    typeSpeed: 40,
    backSpeed: 20,
    backDelay: 2500,
    loop: true,
    showCursor: true
}

var typed = new Typed(".typed-title", options);

var timerId = countdown(new Date('2018-10-08'), function(ts) {
    document.querySelector('.months').innerHTML = ts.months;
    document.querySelector('.days').innerHTML = ts.days;
    document.querySelector('.hours').innerHTML = ts.hours;
    document.querySelector('.minutes').innerHTML = ts.minutes;
    document.querySelector('.seconds').innerHTML = ts.seconds;
}, countdown.MONTHS|countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

var footerBtn = document.querySelector('.dismiss-footer');
footerBtn.addEventListener('click', function(){
    document.querySelector('.sticky-footer').style.display = "none";
});
