/*ハンバーガメニュー */
const hamburgerBtn = document.getElementById('hamburger-btn');
    const navbarNav = document.getElementById('navbar-nav');

    hamburgerBtn.addEventListener('click', () => {
    navbarNav.classList.toggle('show');
    });


/*スライダー*/
const swiper = new swiper('.swiper', {
    //｢前へ｣｢次へ｣の矢印
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    }
    });