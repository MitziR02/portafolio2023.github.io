document.getElementById('toggle').addEventListener('change', function() {
    var icon=document.getElementById("animation-On");
    var layer=document.getElementById("layer");
    if (this.checked) {
        layer.style.opacity = "1";

        icon.innerHTML='<i class="fa-solid fa-toggle-off"></i>';
    } else {
        layer.style.opacity = "0.8";

        icon.innerHTML='<i class="fa-solid fa-toggle-on"></i>';
    }
});

document.getElementById('checkDark').addEventListener('change', function() {
    var icon=document.getElementById("darkMode");
    let root = document.documentElement;
    let imgElement = document.getElementById('imgLogo');

    if (this.checked) {

        root.style.setProperty('--grey', '#fffaf5');
        root.style.setProperty('--white', '#30323c');
        root.style.setProperty('--aqua', '#78cac5'); 
        root.style.setProperty('--boxesColor', '#1d1c1c85');

        imgElement.src = "./src/assets/LogoLight.png";

        icon.innerHTML='<i class="fa-regular fa-sun"></i>';
    } else {

        root.style.setProperty('--grey', '#30323c');
        root.style.setProperty('--white', '#fffaf5');
        root.style.setProperty('--aqua', '#048a81'); 
        root.style.setProperty('--boxesColor', '#ffffff54');

        imgElement.src = "./src/assets/LogoBlack.png";

        icon.innerHTML='<i class="fa-solid fa-moon"></i>';
    }
});