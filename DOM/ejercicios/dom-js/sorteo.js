export default function sorteo(searchBtn, languajeSelector) {
    document.addEventListener("click", (e) => {
        const items = document.getElementById(languajeSelector).children[0].children;
        const range = items.length;

        if (e.target.matches(searchBtn) || e.target.matches(`${ searchBtn } *`)) {
            const randomNum = Math.floor(Math.random() * range);
            console.log(items[randomNum].innerText);

            window.alert(`El lenguaje ganador es ${ items[randomNum].innerText }`)
        }
    });
}