document.getElementById('toggle').addEventListener('change', toggleAnimation);

function toggleAnimation() {
    var icon = document.getElementById("animation-On");
    let isChecked = document.getElementById('toggle').checked;
    let video = document.getElementById('videoOn');

    if (isChecked) {
        video.style.display = "none";
        icon.innerHTML='<iconify-icon icon="material-symbols:toggle-off-outline"></iconify-icon>';
    } else {
        video.style.display = "block";
        icon.innerHTML='<iconify-icon icon="material-symbols:toggle-on"></iconify-icon>';
    }
    
    localStorage.setItem("animationState", isChecked ? "enabled" : "disabled");
}

// DarkMode

document.getElementById('checkDark').addEventListener('change', toggleDarkMode);

function toggleDarkMode() {
    var icon = document.getElementById("darkMode");
    var videoB = document.getElementById('videoOn');
    let root = document.documentElement;
    let imgElement = document.getElementById('imgLogo');
    let isChecked = document.getElementById('checkDark').checked;

    localStorage.setItem("darkMode", isChecked ? "enabled" : "disabled");

    if (isChecked) {

        //White

        console.log("CHECK WHITE.");

        root.style.setProperty('--grey', '#fffaf5');
        root.style.setProperty('--white', '#121212');
        root.style.setProperty('--lightAqua', '#048a81'); 
        root.style.setProperty('--boxesColor', '#ffffff96');

        videoB.style.display = "none";

        icon.innerHTML='<iconify-icon icon="solar:moon-bold"></iconify-icon>';

        imgElement.src = "./src/assets/LogoBlack.png";
        
    } else {

        root.style.setProperty('--grey', '#121212');
        root.style.setProperty('--white', '#fffaf5');
        root.style.setProperty('--lightAqua', '#78cac5'); 
        root.style.setProperty('--boxesColor', '#0c0c0c85');
        
        videoB.style.display = "block";

        icon.innerHTML='<iconify-icon icon="material-symbols:sunny-outline-rounded"></iconify-icon>';

        imgElement.src = "./src/assets/LogoLight.png";
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