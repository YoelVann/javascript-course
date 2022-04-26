const d = document;
const xMax = 720;
const yMax = 130;
let y = 0;
let x = 0;

export function moveBallByArrow() {

    d.addEventListener("keydown", e => {

        switch (e.keyCode) {
            case 37: //keyLeft
                if (x >= 5) {
                    x -= 5;
                }
                break;
            case 38: //keyUp
                e.preventDefault();
                if (y >= 5) {
                    y -= 5;
                }
                break;
            case 39: //keyRight
                if (x === xMax) {
                    x = xMax;
                } else {
                    x += 5;
                }
                break;
            case 40: //keyDown
                e.preventDefault();
                if (y === yMax) {
                    y = yMax;
                } else {
                    y += 5;
                }
                break;
            default:
                break;
        }

        d.querySelector(".move-ball").style.setProperty("transform", `translate(${ x }px, ${ y }px)`);

    })


}