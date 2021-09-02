var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

function toBook(){
    window.location.href = 'booking.html'
}

function toHome(){
    window.location.href = 'home.html'
}

function sendMessage(){
    alert('howdy')
}