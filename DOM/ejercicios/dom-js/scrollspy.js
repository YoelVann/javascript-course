export default function scrollSpy() {
    const $sections = document.querySelectorAll("section[data-scroll-spy]");
    const callback = (entries) => {
        // console.log(entries);
        entries.forEach(entry => {
            // console.log("entry", entry);
            const id = entry.target.getAttribute("id");
            if (entry.isIntersecting) {
                document.querySelector(`a[data-scroll-spy][href="#${ id }"]`)
                    .classList.add("active");
            } else {
                document.querySelector(`a[data-scroll-spy][href="#${ id }"]`)
                    .classList.remove("active");

            }
        })
    }

    const observer = new IntersectionObserver(callback, {
        // root
        // rootMargin: "-250px"
        threshold: [.50, .75]
    });

    $sections.forEach(el => observer.observe(el));
}