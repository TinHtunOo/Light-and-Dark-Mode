let toggleSwitch = document.querySelector('input[type=checkbox]');
let navBar = document.querySelector('.navbar');
let modeText = document.querySelector('.mode-text');
let themeLogo = document.querySelector('.fa-regular');
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');

// Change image
function changeImg(mode) {
    img1.src = `img/undraw_winter_road_${mode}.svg`;
    img2.src = `img/undraw_best_place_re_${mode}.svg`;
    img3.src = `img/undraw_augmented_reality_${mode}.svg`;
}

// Dark Mode and Light Mode
function darkMode() {
    navBar.style.backgroundColor = 'rgb(0 0 0 /50%)';
    modeText.textContent = 'Dark Mode';
    themeLogo.classList.replace('fa-sun', 'fa-moon');
    changeImg("dark");
}

function lightMode() {
    navBar.style.backgroundColor = 'rgb(255 255 255/50%)';
    modeText.textContent = 'Light Mode';
    themeLogo.classList.replace('fa-moon', 'fa-sun');
    changeImg("light");
}

//Toggle Theme
function toggleTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme','dark')
        darkMode()
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        localStorage.setItem('theme','light')
        lightMode()
    }
}


// eventListener
toggleSwitch.addEventListener('change', toggleTheme)

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode()
    }
}