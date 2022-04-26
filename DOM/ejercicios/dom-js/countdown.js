    export function countdownToExtintion(countdownSelector) {
        setInterval(() => {

            const dateNow = new Date().getTime();
            const dateToKill = new Date(2022, 0, 1).getTime();
            const remainTimeLive = dateToKill - dateNow;

            const day = remainTimeLive / 86400000;
            const hour = (day % 1) * 24;
            const min = (hour % 1) * 60;
            const sec = Math.floor((min % 1) * 60);

            if (remainTimeLive === 0) {
                document.getElementById(countdownSelector).innerHTML = "The time is over!!";
                console.log("The time is over!!");
            } else {
                let time = `${ Math.floor(day) } Days ${ Math.floor(hour) } Hours ${ Math.floor(min) } Minutes ${ sec } Seconds ... To Kill!!!`;
                document.getElementById(countdownSelector).innerHTML = time;
            }

        }, 1000);

    }