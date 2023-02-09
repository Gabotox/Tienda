var swiper1 = new Swiper(".slide-container1", {
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop: true,
    centerSlide: "true",
    grabCursor: "true",
    fade: "true",
    navigation: {
        nextEl : ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
        },
        1000: {
            slidesPerView: 2,
        },
    }
});



var swiper = new Swiper(".slide-container", {
    spaceBetween: 20,
    slidesPerGroup: 4,
    loop: true,
    centerSlide: "true",
    grabCursor: "true",
    fade: "true",
    pagination: {
        el: ".swiper-pagination",
        chickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl : ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        },
    }
});