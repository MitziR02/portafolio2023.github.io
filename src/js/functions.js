document.getElementById('toggle').addEventListener('change', toggleAnimation);

function toggleAnimation() {
    var icon = document.getElementById("animation-On");
    var layer = document.getElementById("layer");
    let isChecked = document.getElementById('toggle').checked;

    if (isChecked) {
        layer.style.opacity = "1";
        icon.innerHTML='<iconify-icon icon="material-symbols:toggle-off-outline"></iconify-icon>';
    } else {
        layer.style.opacity = "0.8";
        icon.innerHTML='<iconify-icon icon="material-symbols:toggle-on"></iconify-icon>';
    }
    
    localStorage.setItem("animationState", isChecked ? "enabled" : "disabled");
}

// DarkMode

document.getElementById('checkDark').addEventListener('change', toggleDarkMode);

function toggleDarkMode() {
    var icon = document.getElementById("darkMode");
    let root = document.documentElement;
    let imgElement = document.getElementById('imgLogo');
    let isChecked = document.getElementById('checkDark').checked;

    localStorage.setItem("darkMode", isChecked ? "enabled" : "disabled");

    if (isChecked) {

        root.style.setProperty('--grey', '#fffaf5');
        root.style.setProperty('--white', '#30323c');
        root.style.setProperty('--aqua', '#78cac5'); 
        root.style.setProperty('--boxesColor', '#1d1c1c85');

        imgElement.src = "./src/assets/LogoLight.png";

        icon.innerHTML='<iconify-icon icon="material-symbols:sunny-outline-rounded"></iconify-icon>';

    } else {

        root.style.setProperty('--grey', '#30323c');
        root.style.setProperty('--white', '#fffaf5');
        root.style.setProperty('--aqua', '#048a81'); 
        root.style.setProperty('--boxesColor', '#ffffff54');

        imgElement.src = "./src/assets/LogoBlack.png";

        icon.innerHTML='<iconify-icon icon="solar:moon-bold"></iconify-icon>';
    }
}

window.onload = function() {

    const currentAnimationSetting = localStorage.getItem("animationState");
    const toggleBtn = document.getElementById("toggle");

    if (currentAnimationSetting === "enabled") {
        toggleBtn.checked = true;
    } else if (currentAnimationSetting === "disabled") {
        toggleBtn.checked = false;
    }

    toggleAnimation(); 

    // DARK MODE

    const currentDarkModeSetting = localStorage.getItem("darkMode");
    const checkbox = document.getElementById("checkDark");

    if (currentDarkModeSetting === "enabled") {
        checkbox.checked = true;
    } else if (currentDarkModeSetting === "disabled") {
        checkbox.checked = false;
    }

    toggleDarkMode();
};
