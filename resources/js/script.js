let lightToggle = document.querySelector("#lightToggle");

let lightMode = document.querySelectorAll(".lightMode")

lightToggle.addEventListener('change', function() {
    lightMode.forEach(el => {
        el.classList.toggle('light');
    })});