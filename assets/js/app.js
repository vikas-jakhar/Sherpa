AOS.init({once:true});

let menuicon = document.querySelector(".menu-icon");
let menulist = document.querySelector(".menu-list");
let body = document.querySelector(".body");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    menuicon.classList.toggle("active");
    menuicon.classList.toggle("not-active");
    body.classList.toggle("overflow-lg-hidden");
});

var navheading = document.querySelectorAll(".nav-heading");

navheading.forEach((e) => {
    e.addEventListener("click", function () {
        menulist.classList.toggle("show");
        menuicon.classList.toggle("active");
        menuicon.classList.toggle("not-active");
        body.classList.toggle("overflow-lg-hidden");
    });
});


$('.sec3-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.sec5-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '5px',
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        }
    ]
});

$('.sec6-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    centerMode: true,
    centerPadding: '5px',
    prevArrow: $('.prev1'),
    nextArrow: $('.next1'),
    adaptiveHeight: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        }
    ]
});

const accordionheading = document.querySelectorAll(".accordion-heading");

accordionheading.forEach((e) => {
    e.addEventListener("click", function () {
        const activeremove = document.querySelector(".accordion1.accordion-active");
        e.parentElement.classList.toggle("accordion-active");
        activeremove && activeremove.classList.remove("accordion-active");
    })
});

const preloader = document.querySelector(".preloader");

preloader.style.display = "grid";

setTimeout(() => {
    preloader.style.display = "none"
}, 1000);

let scroll1 = document.querySelector(".scrolltop");

scroll1.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function toggleScroll1() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        scroll1.style.display = "grid";
    } else {
        scroll1.style.display = "none";
    }
};

document.body.scrollTop = document.documentElement.scrollTop = 0;

window.addEventListener("scroll", toggleScroll1);