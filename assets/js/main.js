const Typography = require('typography')
const CodePlugin = require('typography-plugin-code')
const funstonTheme = require('typography-theme-funston')

function loadTypography() {
    funstonTheme.default.plugins = [
        new CodePlugin.default(),
    ]
    
    const typography = new Typography(funstonTheme.default)
    typography.options.baseFontSize = "16px";
    typography.options.scaleRatio = 2;
    
    typography.injectStyles();
}

window.onload = function() {
    const Hamburger = document.querySelector("button.button_hamburger");
    const HamburgerLines = document.querySelector(".hamburger-enter");
    const NavigationMenu = document.querySelector("nav");

    loadTypography();

    Hamburger.addEventListener("click", () => {
        HamburgerLines.classList.toggle("hamburger-exit");
        NavigationMenu.classList.toggle("navigation-active");
        document.body.classList.toggle("scroll-freeze");
    });
}