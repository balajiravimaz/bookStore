const header = document.querySelector("header");
const scr = document.getElementById("scroll");
const bar = document.getElementById("bars");
const menu = document.querySelector(".menu");


bar.addEventListener("click", () => {
    menu.classList.toggle("active");
})

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 500);
    scr.classList.toggle("active", window.scrollY > 500);
})

// scr.addEventListener("click", () => {
//     scrollTo({
//         top: 0
//     });
// })

const Swipes = new Swiper('.swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

