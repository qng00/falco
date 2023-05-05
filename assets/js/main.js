/* ---------------- HEADER NAVBAR ---------------- */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* ---------------- REMOVE MENU MOBILE ---------------- */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/* ---------------- CHANGE NAV BACKGROUND COLOR ---------------- */
const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 50
        ? header.classList.add('bg-header')
        : header.classList.remove('bg-header');
};
window.addEventListener('scroll', scrollHeader);

/* ---------------- TAB ITEM ACTIVE ---------------- */
const tabs = document.querySelectorAll('.about__tab-item');
const cards = document.querySelectorAll('.about__pane');

tabs.forEach((tab, index) => {
    const card = cards[index];

    tab.onclick = function () {
        document
            .querySelector('.about__tab-item.active')
            .classList.remove('active');
        document
            .querySelector('.about__pane.active')
            .classList.remove('active');

        this.classList.add('active');
        card.classList.add('active');
    };
});

/* ---------------- ACTIVE CURRENT TIME BACKGROUND ---------------- */
window.onload = function () {
    const today = new Date().getDay();
    const days = [
        'sunday',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
    ];
    const nowDate = document.getElementsByClassName(days[today]);

    for (let i = 0; i < nowDate.length; i++) {
        nowDate[i].classList.add('active');
    }
};

/* ---------------- SHOW SCROLL ---------------- */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ---------------- SCROLL ACTIVE LINK ---------------- */
const sections = document.querySelectorAll('section[id]')
const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link')
              } else {
                sectionsClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll', scrollActive)

/* ---------------- SWIPER JS ---------------- */
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
});

var aboutSwiper = new Swiper(".aboutSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initalSlides: 2,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var ipcSwiper = new Swiper(".ipcSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initalSlides: 2,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var coopSwiper = new Swiper(".coopSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initalSlides: 2,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var gallerySwiper = new Swiper(".gallerySwiper", {
    effect: "cards",
    grabCursor: true,
});