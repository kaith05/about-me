document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 0, // スライド間の隙間をなくす
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // 800px以上の場合
            800: {
                slidesPerView: 1.5,
                spaceBetween: 0, // スライド間の隙間をなくす
            }
        }
    });
});