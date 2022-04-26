export default function filterByCategory(input, selector) {
    document.addEventListener("keyup", (e) => {

        if (e.key === "Escape") e.target.value = "";

        if (e.target.matches(input)) {
            document.querySelectorAll(selector).forEach(
                (el) => el.textContent.toLowerCase().includes(e.target.value) ? el.classList.remove("filter") : el.classList.add("filter")
            );
        }
    });
}