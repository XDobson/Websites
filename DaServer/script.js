let count = 0 

function toggleMenu(){
    count++
    if (Math.floor(count/2) != count/2) {
        document.getElementById("navbar").style.visibility = "visible"
    } else{
        document.getElementById("navbar").style.visibility = "hidden"
    }
}