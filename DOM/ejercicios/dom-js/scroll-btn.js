export default function showScrollBtn() {
    const $topBtn = document.querySelector(".top-btn");
    document.addEventListener("scroll", e => {
        if (window.scrollY >= 1200) {
            $topBtn.classList.add("top-btn-active");
        } else {
            $topBtn.classList.remove("top-btn-active");
        }
    });

    document.addEventListener("click", e => {
        if (e.target.matches(".top-btn") || e.target.matches(`.top-btn *`)) {
            window.scroll(0, 0);
        }
    });
}