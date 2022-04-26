const userAgent = window.navigator.userAgent;

export default function userDevice() {
    const $id = document.getElementById("user-device"),
        isMobile = {
            android: () => userAgent.match(/android/i),
            ios: () => userAgent.match(/iphone|ipad|ipod/i),
            windows: () => userAgent.match(/windows phone/i),
            any: function() {
                return this.android() || this.ios() || this.windows();
            },
        },
        isDesktop = {
            linux: () => userAgent.match(/linux/i),
            mac: () => userAgent.match(/mac os/i),
            windows: () => userAgent.match(/windows nt/i),
            any: function() {
                return this.linux() || this.mac() || this.windows();
            }
        },
        isBrowser = {
            chrome: () => userAgent.match(/chrome/i),
            firefox: () => userAgent.match(/firefox/i),
            opera: () => userAgent.match(/opera/i),
            safari: () => userAgent.match(/safari/i),
            edge: () => userAgent.match(/edge/i),
            any: function() {
                return this.chrome() || this.firefox() || this.opera() || this.safari() || this.edge();
            }
        }

    $id.innerHTML = `
    <ul>
    <li>User Agent <b>${ userAgent }</b> </li>
    <li>Plataforma <b>
    ${ isMobile.any()? isMobile.any(): isDesktop.any() }
    </b></li>
    <li>Navegador <b> ${ isBrowser.any() }</b></li>
    </ul>
    `

}