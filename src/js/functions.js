document.getElementById('toggle').addEventListener('change', toggleAnimation);

function toggleAnimation() {
    var icon = document.getElementById("animation-On");
    var layer = document.getElementById("layer");
    let isChecked = document.getElementById('toggle').checked;

    if (isChecked) {
        layer.style.opacity = "1";
        icon.innerHTML='<iconify-icon icon="material-symbols:toggle-off-outline"></iconify-icon>';
    } else {
        layer.style.opacity = "0";
        icon.innerHTML='<iconify-icon icon="material-symbols:toggle-on"></iconify-icon>';
    }
    
    localStorage.setItem("animationState", isChecked ? "enabled" : "disabled");
}

// DarkMode

document.getElementById('checkDark').addEventListener('change', toggleDarkMode);

function toggleDarkMode() {
    var icon = document.getElementById("darkMode");
    var videoB = document.getElementById('videoBackG');
    let root = document.documentElement;
    let imgElement = document.getElementById('imgLogo');
    let isChecked = document.getElementById('checkDark').checked;

    localStorage.setItem("darkMode", isChecked ? "enabled" : "disabled");

    if (isChecked) {

        root.style.setProperty('--grey', '#fffaf5');
        root.style.setProperty('--white', '#121212');
        root.style.setProperty('--aqua', '#78cac5'); 
        root.style.setProperty('--boxesColor', '#0c0c0c85');
        
        videoB.setAttribute('src', './src/assets/videoB.mp4');
        let videoElement = videoB.parentElement;
        videoElement.load(); 

        icon.innerHTML='<iconify-icon icon="material-symbols:sunny-outline-rounded"></iconify-icon>';

        imgElement.src = "./src/assets/LogoLight.png";

    } else {

        root.style.setProperty('--grey', '#121212');
        root.style.setProperty('--white', '#fffaf5');
        root.style.setProperty('--aqua', '#048a81'); 
        root.style.setProperty('--boxesColor', '#ffffff96');

        videoB.setAttribute('src', './src/assets/videoW.mp4');
        let videoElement = videoB.parentElement;
        videoElement.load(); 

        icon.innerHTML='<iconify-icon icon="solar:moon-bold"></iconify-icon>';

        imgElement.src = "./src/assets/LogoBlack.png";
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
