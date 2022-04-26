const alarm = new Audio("./assets/audio/alarm.mp3");
const d = document;

export function createClock() {

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    const $clockDiv = d.getElementById("clock");
    let time = `${ hour } : ${ minute } : ${ second }`;

    if ($clockDiv !== undefined) {
        $clockDiv.textContent = time;
        $clockDiv.innerText = time;
    } else {
        return;
    }
    setTimeout(createClock, 1000);
}

export function showClock() {
    const $divClock = d.createElement("div");
    $divClock.setAttribute("id", "clock");
    const $clockSection = d.getElementById("seccion1");

    d.addEventListener("click", (e) => {
        if (e.target.matches(".init-clock")) {
            $clockSection.appendChild($divClock);
            d.getElementById("stop-clock").disabled = false;
            d.getElementById("start-clock").disabled = true;
            createClock();
        }
    })

}

export function killClock() {

    d.addEventListener("click", (e) => {
        const $divClock = document.getElementById("clock");
        if (e.target.matches(".stop-clock")) {
            $divClock.parentNode.removeChild($divClock);
            d.getElementById("start-clock").disabled = false;
            d.getElementById("stop-clock").disabled = true;
        }
    })

}

export function initAlarm() {

    d.addEventListener("click", e => {
        if (e.target.matches(".init-alarm")) {
            d.getElementById("init-alarm").disabled = true;
            alarm.play();
            console.log("alarma");
        }
    })
}

export function stopAlarm() {
    d.addEventListener("click", e => {
        if (e.target.matches(".stop-alarm")) {
            d.getElementById("init-alarm").disabled = false;
            alarm.pause();
            alarm.currentTime = 0;
        }
    })
}