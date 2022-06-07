let temp = null
let carrot = Math.floor(Math.random() * 256)
let potato = Math.floor(Math.random() * 256)
let lettuce = Math.floor(Math.random() * 256)
let radish = Math.floor(Math.random() * 256)
let corn = Math.floor(Math.random() * 256)
let peas = Math.floor(Math.random() * 256)
let change = true;
let stop = true;
let gradient = false;

// This function i stole heartlessly from the internet
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function toggleGradient() {
    if (gradient == true){
        document.getElementById("toggleGradient").style.background = "rgb(255,50,50)"
        gradient = false
        document.getElementById("notjeremy").style.visibility = "hidden"

    } else {
        document.getElementById("toggleGradient").style.background = "rgb(50,255,50)"
        gradient = true 
        document.getElementById("notjeremy").style.visibility = "visible"
    }
}
function mixItUp(veggie) {
    if (veggie <= 255 && veggie >= 0) {
        veggie = veggie + (Math.floor(Math.random() * 7) - 3)
    }
    else if (veggie >= 255) {
        veggie = veggie - 2
    } else if (veggie <= 0) {
        veggie = veggie + 2
    }
    return veggie
}
function shmove() {
    carrot = mixItUp(carrot)
    potato = mixItUp(potato)
    lettuce = mixItUp(lettuce)
    radish = mixItUp(radish)
    corn = mixItUp(corn)
    peas = mixItUp(peas)
    console.log("(R) Carrot:" + carrot);
    console.log("(G) Potato:" + potato);
    console.log("(B) Lettuce:" + lettuce);
    console.log("(R2) Radish:" + radish);
    console.log("(G2) Corn:" + corn);
    console.log("(B2) Peas:" + peas);

}
function up() {
    shmove()
    if (gradient == true) {
        document.body.style.background = "linear-gradient(180deg, rgb(" + (carrot) + "," + (potato) + "," + (lettuce) + ",1) 0%, rgb(" + (radish) + "," + (corn) + "," + (peas) + ",1) 100%)";
    } else {
        document.body.style.background = "rgb(" + (carrot) + "," + (potato) + "," + (lettuce) + ",1)"
    }
    update()
    if (change == true) {
        return null
    }
    else {
        loop()
    }
}
function loop() {
    temp = setTimeout(up, 1);
    console.log("=======================");
}
function jumpercable() {
    if (change == false) {
        change = true
        document.getElementById("hyper").style.background = "rgb(255,50,50)"
    } else {
        change = false
        document.getElementById("hyper").style.background = "rgb(50,255,50)"
        carrot = Math.floor(Math.random() * 256)
        potato = Math.floor(Math.random() * 256)
        lettuce = Math.floor(Math.random() * 256)
        radish = Math.floor(Math.random() * 256)
        corn = Math.floor(Math.random() * 256)
        peas = Math.floor(Math.random() * 256)
        loop()
    }
}
function zwoop() {
    carrot = Math.floor(Math.random() * 256)
    potato = Math.floor(Math.random() * 256)
    lettuce = Math.floor(Math.random() * 256)
    radish = Math.floor(Math.random() * 256)
    corn = Math.floor(Math.random() * 256)
    peas = Math.floor(Math.random() * 256)
    
    if (gradient == true) {
        document.body.style.background = "linear-gradient(180deg, rgb(" + (carrot) + "," + (potato) + "," + (lettuce) + ",1) 0%, rgb(" + (radish) + "," + (corn) + "," + (peas) + ",1) 100%)";
    } else {
        document.body.style.background = "rgb(" + (carrot) + "," + (potato) + "," + (lettuce) + ",1)"
    }    
    update()
    if (stop == false) {
        restart()
    }
}
function changeTitleColor(color){
    document.getElementById("title").style.color = color
    document.getElementById("title2").style.color = color
    document.getElementById("hexcode").style.color = color
    document.getElementById("rgb").style.color = color
    document.getElementById("hexcode2").style.color = color
    document.getElementById("rgb2").style.color = color
}
function update() {
    document.getElementById("red").innerText = carrot
    document.getElementById("green").innerText = potato
    document.getElementById("blue").innerText = lettuce
    document.getElementById("red2").innerText = radish
    document.getElementById("green2").innerText = corn
    document.getElementById("blue2").innerText = peas
    document.getElementById("hexcode").innerText = rgbToHex(carrot, potato, lettuce)
    document.getElementById("hexcode2").innerText = rgbToHex(radish, corn, peas)
    if (((carrot + potato + lettuce) / 3) >= 128) {
        changeTitleColor("black")
    } else {
        changeTitleColor("white")
    }
}

function automatic() {
    zwoop()
}
function restart() {
    temp = setTimeout(automatic, 1);
}
function jumpercable2() {
    if (stop == false) {
        stop = true
        document.getElementById("randomize").style.background = "rgb(255,50,50)"
    } else {
        stop = false
        document.getElementById("randomize").style.background = "rgb(50,255,50)"
        carrot = Math.floor(Math.random() * 256)
        potato = Math.floor(Math.random() * 256)
        lettuce = Math.floor(Math.random() * 256)
        restart()
    }
}

alert("Website contains fast flashing colors.")
