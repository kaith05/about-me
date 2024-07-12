/*ハンバーガメニュー */
const hamburgerBtn = document.getElementById('hamburger-btn');
    const navbarNav = document.getElementById('navbar-nav');

    hamburgerBtn.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
    });


/*スライダー*/
const swiper = new Swiper('.swiper', {
    // ナビゲーション矢印
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // 自動再生
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // その他の設定
    speed: 300,
    loop: true,
    loopAdditionalSlides: 1,
    // ページネーション（必要な場合）
    pagination: {
        el: '.swiper-pagination',
    },
    // スクロールバー（必要な場合）
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    slidesPerView: 3,
    spaceBetween: 30,
});