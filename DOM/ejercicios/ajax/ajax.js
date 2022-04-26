(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", e => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            let json = JSON.parse(xhr.responseText);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${ el.name } *** ${ el.email } *** ${ el.phone }`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        } else {
            console.log("error");
            let errorMessage = xhr.statusText || "Ocurrió un error";
            $xhr.innerHTML = `Error ${ xhr.status }: ${ errorMessage }`;
        }
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.send();

})();

(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            console.log(res);
            return res.ok ? res.json() : Promise.reject(res);
        }).then(json => {
            console.log(json);
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${ el.name } --- ${ el.email } --- ${ el.phone }`;
                $fragment.appendChild($li);
            });

            $fetch.appendChild($fragment);
        })
        .catch((err) => {
            console.log(err);
            let errorMessage = err.statusText || "Ocurrió un error";
            $fetch.innerHTML = `Error ${ err.status }: ${ errorMessage }`;
        }).finally(() =>
            console.log("de cualquier forma")
        );
})();