

let menuicon = document.querySelector(".menu-icon");
let menulist = document.querySelector(".menu-list");

menuicon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    menuicon.classList.toggle("active");
    menuicon.classList.toggle("not-active");
});

var navheading = document.querySelectorAll(".nav-heading");

navheading.forEach((e) => {
    e.addEventListener("click", function () {
        menulist.classList.toggle("show");
        menuicon.classList.toggle("active");
        menuicon.classList.toggle("not-active");
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
})