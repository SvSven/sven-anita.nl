// Enable functionality of mobile navbar burger
var mobileMenu = document.getElementById('mobile-menu');
var mobileMenuIcon = document.querySelector('.navbar-burger');
mobileMenuIcon.addEventListener('click', function() {
    this.classList.toggle('is-active');
    mobileMenu.classList.toggle('is-active');
});

// Single page navigation using animated-scroll-to.js
// https://github.com/Stanko/animated-scroll-to
var navbarHeight = document.querySelector('.navbar').offsetHeight;
var navLinks = document.querySelectorAll('.navbar-item');
navLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        var target = document.querySelector(el.dataset.anchor);
        var options = {
            offset: parseInt('-' + navbarHeight)
        }
        animateScrollTo(target, options);

        if(mobileMenu.classList.contains('is-active')) {
            mobileMenu.classList.toggle('is-active');
            mobileMenuIcon.classList.toggle('is-active');
        }
    });
});

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
    document.querySelector('.days').innerHTML = ts.days;
    document.querySelector('.hours').innerHTML = ts.hours;
    document.querySelector('.minutes').innerHTML = ts.minutes;
    document.querySelector('.seconds').innerHTML = ts.seconds;
}, countdown.MONTHS|countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS);

var footerBtn = document.querySelector('.dismiss-footer');
footerBtn.addEventListener('click', function(){
    document.querySelector('.sticky-footer').style.display = "none";
});

function initMap() {
	map = new L.Map('map');
	map.setView(new L.LatLng(52.088778, 5.092849), 9);

	var tileUrl = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png';
	var tileAttrb = '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>';
	var mapTiles = new L.TileLayer(tileUrl, { minZoom: 8, attribution: tileAttrb });
    map.addLayer(mapTiles);

    L.marker([51.816432, 5.021330]).bindTooltip("Slot Loevestein", {
        permanent: true,
        direction: 'right',
    }).addTo(map);

    L.marker([52.309494, 4.763654]).bindTooltip("Amsterdam Schiphol Airport", {
        permanent: true,
        direction: 'right',
    }).addTo(map);
}
initMap();
