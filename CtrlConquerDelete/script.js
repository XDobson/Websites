// Dont think too hard
// When in doubt make another function
// Endless global variables make me happy

// The rgb value of antique white is rgb(250, 235, 215)
// Coords are in y-x format. it was an over-sight. oops.

window.canPlace = false
window.placeFarm = false
window.placeSword = false
window.placeBow = false
window.playerGold = 1000
window.playerFarms = 0
window.playerMines = 0
window.enemyGold = 30
window.enemyFarms = 0
window.enemyMines = 0
window.turnCount = 0

function beginGame() {
    document.getElementById('startingScreen').style.visibility = 'hidden'
    document.getElementById("goldCount").innerText = "Gold: " + window.playerGold
    foo = 1
    bar = 1
    for (i = 0; i < 20; i++) {
        claimTile(null, (foo + "-" + bar), null)
        bar += 1
        console.log(foo, bar);
    }
    foo = 1
    bar = 1
    for (i = 0; i < 20; i++) {
        claimTile(null, (foo + "-" + bar), null)
        foo += 1
        console.log(foo, bar);
    }
    foo = 20
    bar = 1
    for (i = 0; i < 20; i++) {
        claimTile(null, (foo + "-" + bar), null)
        bar += 1
        console.log(foo, bar);
    }
    foo = 1
    bar = 20
    for (i = 0; i < 20; i++) {
        claimTile(null, (foo + "-" + bar), null)
        foo += 1
        console.log(foo, bar);
    }
    claimTile("player", "2-2", "castle")
    claimTile("enemy", "19-19", "castle")
    claimTile("enemy", "18-19", "bow")
    claimTile("enemy", "19-18", "bow")
    claimTile("enemy", "17-19", null)
    claimTile("enemy", "18-18", null)
    claimTile("enemy", "19-17", null)
    window.canPlace = true
}

// Claims a tile, and sets it's type as well. Null types are empty tiles
function claimTile(team, coords, type) {
    if (team == "player") {
        document.getElementById(coords).style.backgroundColor = "green"
        document.getElementById(coords + "img").setAttribute("src", "")
        document.getElementById(coords + "img").style.visibility = "hidden"
        if (type != null) {
            document.getElementById(coords + "img").style.visibility = "visible"
            document.getElementById(coords + "img").setAttribute("src", "images/" + type + ".png")
        }
    } else if (team == "enemy") {
        document.getElementById(coords).style.backgroundColor = "red"
        if (type != null) {
            document.getElementById(coords + "img").style.visibility = "visible"
            document.getElementById(coords + "img").setAttribute("src", "images/" + type + ".png")
            // Add in an if statement to change gold based on type
        } else {
            changeGold("enemy", -2)
        }
    } else {
        document.getElementById(coords).style.backgroundColor = "gray"
    }
}


function changeGold(who, amount) {
    if (who == "player") {
        window.playerGold += amount
        document.getElementById("goldCount").innerText = "Gold: " + window.playerGold
    } else if (who == "enemy") {
        window.enemyGold += amount
    }
}

function isTileAdjacent(what, where) {
    count = 0
    array = []
    coord1 = where.slice(0, -where.length + 2).replace("-", "")
    coord2 = where.slice(where.length - 2).replace("-", "");
    if (window.getComputedStyle(document.getElementById((coord1 - 1) + "-" + (coord2 - 1))).backgroundColor == what) { count += 1; array.unshift((coord1 - 1) + "-" + (coord2 - 1)) }
    if (window.getComputedStyle(document.getElementById((coord1 - 1) + "-" + (coord2))).backgroundColor == what) { count += 1; array.unshift((coord1 - 1) + "-" + (coord2)) }
    if (window.getComputedStyle(document.getElementById((coord1 - 1) + "-" + (coord2 - (-1)))).backgroundColor == what) { count += 1; array.unshift((coord1 - 1) + "-" + (coord2 - (-1))) }
    if (window.getComputedStyle(document.getElementById((coord1) + "-" + (coord2 - 1))).backgroundColor == what) { count += 1; array.unshift((coord1) + "-" + (coord2 - 1)) }
    if (window.getComputedStyle(document.getElementById((coord1) + "-" + (coord2 - (-1)))).backgroundColor == what) { count += 1; array.unshift((coord1) + "-" + (coord2 - (-1))) }
    if (window.getComputedStyle(document.getElementById((coord1 - (-1)) + "-" + (coord2 - 1))).backgroundColor == what) { count += 1; array.unshift((coord1 - (-1)) + "-" + (coord2 - 1)) }
    if (window.getComputedStyle(document.getElementById((coord1 - (-1)) + "-" + (coord2))).backgroundColor == what) { count += 1; array.unshift((coord1 - (-1)) + "-" + (coord2)) }
    if (window.getComputedStyle(document.getElementById((coord1 - (-1)) + "-" + (coord2 - (-1)))).backgroundColor == what) { count += 1; array.unshift((coord1 - (-1)) + "-" + (coord2 - (-1))) }
    truth = { boolean: true, array: array }
    lie = { boolean: false, array: array }
    if (count >= 1) { return { boolean: true, array: array } } else { return { boolean: false, array: array } }
}
function isBuildingAdjacent(what, where) {
    count = 0
    array = []
    coord1 = where.slice(0, -where.length + 2).replace("-", "")
    coord2 = where.slice(where.length - 2).replace("-", "");
    if (document.getElementById((coord1 - 1) + "-" + (coord2 - 1) + "img").attributes[1].value == "images/" + what + ".png") { count += 1; array.unshift((coord1 - 1) + "-" + (coord2 - 1)) }
    if (document.getElementById((coord1 - 1) + "-" + (coord2) + "img").attributes[1].value == "images/" + what + ".png") { count += 1; array.unshift((coord1 - 1) + "-" + (coord2)) }
    if (document.getElementById((coord1 - 1) + "-" + (coord2 - (-1)) + "img").attributes[1].value == "images/" + what + ".png") { count += 1; array.unshift((coord1 - 1) + "-" + (coord2 - (-1))) }
    if (document.getElementById((coord1) + "-" + (coord2 - 1) + "img").attributes[1].value == "images/" + what + ".png") { count += 1; array.unshift((coord1) + "-" + (coord2 - 1)) }
    if (document.getElementById((coord1) + "-" + (coord2 - (-1)) + "img").attributes[1].value == "images/" + what + ".png") { count += 1; array.unshift((coord1) + "-" + (coord2 - (-1))) }
    if (document.getElementById((coord1 - (-1)) + "-" + (coord2 - 1) + "img").attributes[1].value == "images/" + what + ".png") { count += 1; array.unshift((coord1 - (-1)) + "-" + (coord2 - 1)) }
    if (document.getElementById((coord1 - (-1)) + "-" + (coord2) + "img").attributes[1].value == "images/" + what + ".png") { count += 1; array.unshift((coord1 - (-1)) + "-" + (coord2)) }
    if (document.getElementById((coord1 - (-1)) + "-" + (coord2 - (-1)) + "img").attributes[1].value == "images/" + what + ".png") { count += 1; array.unshift((coord1 - (-1)) + "-" + (coord2 - (-1))) }
    truth = { boolean: true, array: array }
    lie = { boolean: false, array: array }
    if (count >= 1) { return { boolean: true, array: array } } else { return { boolean: false, array: array } }

}


function endTurn() {
    window.turnCount += 1
    if (window.placeFarm == true) { farmButton() }
    if (window.placeSword == true) { swordButton() }
    changeGold("player", 2)
    changeGold("player", 3 * window.playerFarms)
    changeGold("player", 10 * window.playerMines)
    changeGold("enemy", 2)
    changeGold("enemy", 3 * window.enemyFarms)
    changeGold("enemy", 10 * window.enemyMines)

    enemyTurn()
}
function enemyTurn() {
    pickAction = Math.floor(Math.random() * 5) + 1
    if (window.turnCount == (1 || 2)) {
        pickAction = 1
    }
    if (window.turnCount == 3) {
        window.enemyGold += 15
        pickAction = 5
    }
    console.log("Enemy Gold: " + window.enemyGold);
    console.log("Enemy action: " + pickAction);
    // Action 1: claim tiles
    if (pickAction >= 1 && pickAction <= 4) {
        redTiles = redTileCoords()
        maybeBabies = []
        maybeSwords = []
        confirmedSwords = []
        console.log("Current red tiles: " + redTiles);
        for (item in redTiles) {
            rng = Math.floor(Math.random() * window.enemyGold / 4) + 1

            maybeBabies = maybeBabies.concat(isTileAdjacent("rgb(250, 235, 215)", redTiles[item]).array)
            maybeBabies = removeDuplicates(maybeBabies)
            maybeBabies = shuffle(maybeBabies)
        }
        for (item in redTiles) {
            plusGreenTiles = isTileAdjacent("rgb(0, 128, 0)", redTiles[item]).array
            for (item in maybeBabies)
            maybeBabies = maybeBabies.concat(isTileAdjacent("rgb(0, 128, 0)", redTiles[item]).array)
            maybeBabies = removeDuplicates(maybeBabies)
            maybeBabies = maybeBabies.reverse()
        }
        for (i = 0; i < (window.enemyGold / 2); i++) {
            if (i < maybeBabies.length && i < rng) {
                claimTile("enemy", maybeBabies[i], null)
                changeGold("enemy", -2)
                console.log("Red Captured " + maybeBabies[i]);
            }
        }
    }
    // Action 2: place farms
    if (pickAction == 5) {
        if (window.enemyGold >= 15) {
            redTiles = redTileCoords()
            redTiles = shuffle(redTiles)
            console.log(document.getElementById(redTiles[0] + "img").attributes[1].value);
            console.log(document.getElementById(redTiles[0] + "img").attributes[1].value == "");
            if (document.getElementById(redTiles[0] + "img").attributes[1].value == "") {
                claimTile("enemy", redTiles[0], "farm")
                changeGold("enemy", -15)
                window.enemyFarms += 1
            }
        }
    }
}

function redTileCoords() {
    coord1 = 1
    coord2 = 1
    redTiles = []
    for (i = 1; i < 399; i++) {
        if (window.getComputedStyle(document.getElementById((coord1 + "-" + coord2))).backgroundColor == "rgb(255, 0, 0)") {
            redTiles.unshift(coord1 + "-" + coord2)
        }
        coord2 += 1
        if (coord2 == 21) {
            coord2 = 1
            coord1 += 1
            if (coord1 == 21) {
                i = 324
            }
        }
    }
    return redTiles
}

// Stolen from internet
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
function shuffle(arr1) {
    return arr1.sort(() => (Math.random() > .5) ? 1 : -1);
}

function detectAdjacentBow(coords,team) {
    if (team == "player"){
        adjacentGreenTiles = isTileAdjacent("rgb(0, 128, 0)", coords).array
        playerBows = []
        for (item in adjacentGreenTiles){
            if(adjacentGreenTiles.includes(isBuildingAdjacent("bow", coords).array[item])){
                playerBows.unshift(isBuildingAdjacent("bow", coords).array[item])
            }
        }
        console.log("Detected player bows here: "+enemyBows);
        if (playerBows.length >= 1) {return {boolean:true, array:playerBows}} else {return {boolean:false, array:playerBows}}

    } else if (team == "enemy"){
        adjacentRedTiles = isTileAdjacent("rgb(255, 0, 0)", coords).array
        enemyBows = []
        // console.log("red tiles around " + isTileAdjacent("rgb(255, 0, 0)", coords).array);
        // console.log(isBuildingAdjacent("bow", coords).array);
        for (item in adjacentRedTiles){
            if(adjacentRedTiles.includes(isBuildingAdjacent("bow", coords).array[item])){
                // console.log();
                enemyBows.unshift(isBuildingAdjacent("bow", coords).array[item])
            }
        }
        console.log("Detected enemy bows here: "+enemyBows);
        if (enemyBows.length >= 1) {return {boolean:true, array:enemyBows}} else {return {boolean:false, array:enemyBows}}
    }
}

// ================
// Player Controls
// ================
function playerClaim(coords) {
    console.log(document.getElementById(coords).attributes[1].value);

    if (isTileAdjacent("rgb(0, 128, 0)", coords).boolean &&
        window.canPlace == true &&
        (window.getComputedStyle(document.getElementById(coords)).backgroundColor == "rgb(250, 235, 215)" ||
            window.getComputedStyle(document.getElementById(coords)).backgroundColor == "rgb(255, 0, 0)") &&
        window.playerGold >= 2 &&
        window.placeFarm == false &&
        window.placeSword == false &&
        !detectAdjacentBow(coords,"enemy").boolean
        ) {

        claimTile("player", coords, null)
        changeGold("player", -2)

        if (window.getComputedStyle(document.getElementById(coords)).backgroundColor == "rgb(255, 0, 0)") {
            changeGold("player", -6)
        }

        // Win condition
        if (window.getComputedStyle(document.getElementById("19-19")).backgroundColor == "rgb(0, 128, 0)") {
            window.canPlace = false
            document.getElementById("winScreen").style.visibility = "visible"
        }
    } else if (window.placeFarm == true &&
        window.getComputedStyle(document.getElementById(coords)).backgroundColor == "rgb(0, 128, 0)" &&
        window.playerGold >= 15 &&
        document.getElementById(coords).attributes[1].value != "2-2") {
        claimTile("player", coords, "farm")
        changeGold("player", -15)
        window.playerFarms += 1

    } else if (window.placeBow == true &&
        window.getComputedStyle(document.getElementById(coords)).backgroundColor == "rgb(0, 128, 0)" &&
        window.playerGold >= 30 && 
        document.getElementById(coords).attributes[1].value != "2-2") {
        claimTile("player", coords, "bow")
        changeGold("player", -30)

    } else if (window.placeSword == true &&
        window.getComputedStyle(document.getElementById(coords)).backgroundColor == "rgb(255, 0, 0)" &&
        isTileAdjacent("rgb(0, 128, 0)", coords).boolean &&
        window.playerGold >= 20 &&
        document.getElementById(coords).attributes[1].value != "2-2"
        ) {
        console.log("Sword Placed");
        claimTile("player", coords, "sword")
        changeGold("player", -20)
        // Win condition
        if (window.getComputedStyle(document.getElementById("19-19")).backgroundColor == "rgb(0, 128, 0)") {
            window.canPlace = false
            document.getElementById("winScreen").style.visibility = "visible"
        }
    }
}

function farmButton() {
    if (window.playerGold >= 15 && window.canPlace == true && window.placeFarm == false) {
        window.placeFarm = true
        document.getElementById("buyFarm").style.backgroundColor = "lightgreen"
    } else if (window.placeFarm == true && window.canPlace == true) {
        window.placeFarm = false
        document.getElementById("buyFarm").style.backgroundColor = "lightcoral"
    }
}

function swordButton() {
    if (window.playerGold >= 20 && window.canPlace == true && window.placeSword == false) {
        window.placeSword = true
        document.getElementById("buySword").style.backgroundColor = "lightgreen"
    } else if (window.placeSword == true && window.canPlace == true) {
        window.placeSword = false
        document.getElementById("buySword").style.backgroundColor = "lightcoral"
    }
}

function bowButton() {
    if (window.playerGold >= 30 && window.canPlace == true && window.placeBow == false) {
        window.placeBow = true
        document.getElementById("buyBow").style.backgroundColor = "lightgreen"
    } else if (window.placeBow == true && window.canPlace == true) {
        window.placeBow = false
        document.getElementById("buyBow").style.backgroundColor = "lightcoral"
    }
}