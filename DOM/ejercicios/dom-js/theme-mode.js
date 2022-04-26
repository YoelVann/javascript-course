export default function theme() {

    const $classListTheme = document.querySelectorAll("[data-theme]");
    const $themeBtn = document.querySelector(".moon-btn");
    const $btnIcon = $themeBtn.firstChild.classList;

    const darkMode = () => {
        $classListTheme.forEach(el => {
            el.classList.add("dark-mode");
        });

        $btnIcon.remove("fa-moon");
        $btnIcon.add("fa-sun");
        localStorage.setItem("theme", "dark");
    };

    const lightMode = () => {
        $classListTheme.forEach(el => {
            el.classList.remove("dark-mode");
        });

        $btnIcon.remove("fa-sun");
        $btnIcon.add("fa-moon");
        localStorage.setItem("theme", "light");
    };

    document.addEventListener("click", e => {
        if (e.target.matches(".moon-btn") || e.target.matches(`.moon-btn *`)) {
            if ($btnIcon.contains("fa-moon")) {
                darkMode();
            } else {
                lightMode();
            }
        }
    });

    document.addEventListener("DOMContentLoaded", e => {
        if (localStorage.getItem("theme") === null) localStorage.setItem("theme", "ligth");
        if (localStorage.getItem("theme") === "ligth") lightMode();
        if (localStorage.getItem("theme") === "dark") darkMode();
    });
}