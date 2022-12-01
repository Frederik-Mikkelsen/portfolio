//Home page
    //hamburger button toggle animation
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function () {
        this.classList.toggle('is-active');
    });

    const menuToggle = () => {
        const burger = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');
        const menuLinks = document.querySelectorAll('.menu li');
        const sliderContentWidth = document.querySelector('.slide .content')


        burger.addEventListener('click', () => {
            //toggle menu
            menu.classList.toggle('menu-active');

            // animate links
            menuLinks.forEach((link, index) => {
                if(link.style.animation){
                link.style.animation = ``;
                } else {
                link.style.animation = `menuFade 0.5s ease forwards ${index / 7 + .1}s`;
                }
            });
        });

    }

    menuToggle();

    //theme switcher
    const colorThemes = document.querySelectorAll('[name="theme"]');

    //store theme
    const storeTheme = function (theme) {
        localStorage.setItem("theme", theme);
    };

    const returnTheme = function () {
        const activeTheme = localStorage.getItem("theme");
        colorThemes.forEach((themeOption) => {
            if (themeOption.id === activeTheme) {
                themeOption.checked = true;
            }
        })
    }

    colorThemes.forEach((themeOption) => {
        themeOption.addEventListener("click", () => {
            storeTheme(themeOption.id);
        });
    });

    document.onload = returnTheme();
    //apply theme




//ABOUT PAGE
const clientsButton = document.querySelector('.about-clients-button');
const clientsPopup = document.querySelector('.clients-popup');
const closeBtn = document.querySelector('.close');

clientsButton.addEventListener('click', () => {
    clientsPopup.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    clientsPopup.classList.remove('show');
});





