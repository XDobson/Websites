let toggle = false;

// Safari 3.0+ "[object HTMLElementConstructor]" 
// I stole this from the internet to detect safari browsers
// This is all to makeup for the fact that Safari doesnt reconize the :focus pseudo class. 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
console.log("Is this browser safari?" + isSafari);

if (isSafari == true) {
    document.getElementById("links").addEventListener("click", function handleClick() {
        if (toggle == false) {
            document.getElementById("linkpage").style.visibility = "visible"
            toggle = true
        } else {
            document.getElementById("linkpage").style.visibility = "hidden"
            toggle = false;
        }
    })
}
