// const $eventoMultiple = document.getElementById("evento-multiple");


// function saludar(nombre = "Desconocido") {
//     alert(`Hola ${nombre}`);
//     console.log(event);
// }

// $eventoMultiple.addEventListener("click", () => saludar());

// const $divsEventos = document.querySelectorAll(".evento-flujo div");
// const $linkEventos = document.querySelector(".evento-flujo a")

// function flujoEventos(e) {
//     console.log(`Hola desde ${ this.className }, el click desde ${ e.target.className }`);
//     // e.stopPropagation();
// }

// document.addEventListener("click", (e) => {
//     console.log(`Click en`, e.target);

//     if (e.target.matches(".evento-flujo div")) {
//         flujoEventos(e);
//     }
//     if (e.target.matches(".evento-flujo a")) {
//         alert("HOLA");
//         e.preventDefault();
//     }
// });

// // $divsEventos.forEach(div => {
// //     // bubble fase
// //     div.addEventListener("click", flujoEventos);
// //     // div.addEventListener("click", flujoEventos, false);
// //     // capture fase
// //     // div.addEventListener("click", flujoEventos, true);

// // });

// // $linkEventos.addEventListener("click", e => {
// //     alert("HOLA");
// //     e.preventDefault();
// //     e.stopPropagation();
// // })

// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerHeight);
// console.log(window.outerWidth);

const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", e => {
    ventana = window.open("https://www.facebook.com")
});
$btnCerrar.addEventListener("click", e => {
    // window.close();
    ventana.close();
});
$btnImprimir.addEventListener("click", e => {
    window.print();
});