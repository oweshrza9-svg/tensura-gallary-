const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    650: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
    1100: { slidesPerView: 4 },
  },
});

const rimuru = document.getElementById("rimuru-img");

rimuru.addEventListener("click" , function (){
      console.log("I got slapped ")
})