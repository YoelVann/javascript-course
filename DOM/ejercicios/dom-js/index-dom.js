import hamburgerMenu from "./menu.js";
import { showClock, killClock, initAlarm, stopAlarm } from "./clock.js"
import { moveBallByArrow } from "./ball.js"
import { countdownToExtintion } from "./countdown.js"
import showScrollBtn from "./scroll-btn.js"
import theme from "./theme-mode.js";
import responsiveWindow from "./responsive.js";
import testWebPage from "./responsive-tester.js";
import userDevice from "./user_device.js";
import networkStatus from "./network_status.js";
import filterByCategory from "./search_filter.js";
import sorteo from "./sorteo.js";
import slider from "./carousell.js";
import scrollSpy from "./scrollspy.js";
import dynamicPlayVideo from "./dynamic-video.js";
import validateForm from "./validate-form.js";

document.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    showClock();
    killClock();
    initAlarm();
    stopAlarm();
    moveBallByArrow();
    countdownToExtintion('countdown');
    showScrollBtn();
    responsiveWindow(
        "multimedia-content",
        "(min-width: 700px)",
        `<a href="https://youtu.be/FE3_bk09bWg" target="_blank"> Ver Video </a>`,
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/FE3_bk09bWg"</iframe>');
    testWebPage();
    userDevice();
    filterByCategory(".busqueda", ".card");
    sorteo("#sorteo-btn", "sorteo");
    slider();
    scrollSpy();
    dynamicPlayVideo();
    validateForm();
});
networkStatus();
theme();