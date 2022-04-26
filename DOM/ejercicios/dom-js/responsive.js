export default function responsiveWindow(selectorId, mediaQuery, mobileContent, desktopContent) {

    const $mediaArea = document.getElementById(selectorId);
    let breakPoint = window.matchMedia(mediaQuery);

    const responsive = (e) => {
        if (e.matches) {
            $mediaArea.innerHTML = desktopContent;
        } else {
            $mediaArea.innerHTML = mobileContent;
        }
    }

    breakPoint.addListener(responsive);
    responsive(breakPoint);
}