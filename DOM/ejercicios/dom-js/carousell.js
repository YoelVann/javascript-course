export default function slider() {
    const $nextBtn = document.querySelector(".slider-btns .next"),
        $prevBtn = document.querySelector(".slider-btns .prev"),
        $slides = document.querySelectorAll(".slider-slide");

    let slidePosition = 0;
    document.addEventListener("click", e => {
        if (e.target === $prevBtn) {
            e.preventDefault();
            $slides[slidePosition].classList.remove("active");
            slidePosition--;
            if (slidePosition < 0) slidePosition = $slides.length - 1;
            $slides[slidePosition].classList.add("active");
        }
        if (e.target === $nextBtn) {
            e.preventDefault();
            $slides[slidePosition].classList.remove("active");
            slidePosition++;
            if (slidePosition >= $slides.length) slidePosition = 0;
            $slides[slidePosition].classList.add("active");
        }
    });
}