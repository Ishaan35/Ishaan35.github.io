const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener("click", () => {
        nav.classList.toggle('nav-active'); //enables or disables it depending on what it already is
        burger.classList.toggle('toggle');
    });
}

navSlide();