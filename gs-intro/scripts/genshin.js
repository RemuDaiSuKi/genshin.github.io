function changeImage(src) {
    document.querySelector("img").src = "./images/" + src + ".png";
}

/*
const swipeArea = document.getElementById('swipeArea');
const mainImage = document.getElementById('mainImage');

const imagePaths = ['./images/genshin_LOGIN_1.jpeg', './images/genshin_LOGIN_2.jpeg', './images/genshin_LOGIN_3.jpeg', './images/genshin_LOGIN_4.jpeg', './images/genshin_LOGIN_5.jpeg', './images/genshin_LOGIN_6.jpeg', './images/genshin_LOGIN_7.jpeg', './images/genshin_LOGIN_8.jpeg'];
let currentImageIndex = 0;
let isScrollingUp = false;

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  const scrollTop = window.scrollY;

  if (scrollTop > 0 && !isScrollingUp) {
    isScrollingUp = true;
    currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
    mainImage.src = imagePaths[currentImageIndex];
    swipeArea.style.overflow = 'hidden';
    mainImage.style.transform = 'translateY(0)';
  } else if (scrollTop === 0) {
    isScrollingUp = false;
    swipeArea.style.overflow = 'auto';
  }
}
*/

/*
const scrollContainer = document.getElementById('scrollContainer');
const images = document.querySelectorAll('.scrollImage');

images.forEach((image, index) => {
    image.style.setProperty('--index', index + 1);
});
*/





