export default function dynamicPlayVideo() {

    const $videos = document.querySelectorAll("video[data-smart-video]");

    const callback = (entries) => {

        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }

            window.addEventListener("visibilitychange", e =>
                document.visibilityState === "visible" ?
                entry.target.play() :
                entry.target.pause()
            );
        });
    }

    const observer = new IntersectionObserver(callback, { threshold: .50 });
    $videos.forEach(video => observer.observe(video));

}