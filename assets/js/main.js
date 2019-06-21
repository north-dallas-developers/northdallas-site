window.onload = function() {
    const Hamburger = document.querySelector("button.button_hamburger");
    const HamburgerLines = document.querySelector(".hamburger-enter");
    const NavigationMenu = document.querySelector("nav");

    Hamburger.addEventListener("click", () => {
        HamburgerLines.classList.toggle("hamburger-exit");
        NavigationMenu.classList.toggle("navigation-active");
        document.body.classList.toggle("scroll-freeze");
    });
}