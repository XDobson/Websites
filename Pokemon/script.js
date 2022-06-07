const url = "https://pokeapi.co/api/v2/pokemon/pikachu"
let PokeNumber = 1
let make = document.createElement('h1')
make.classList.add("pebus")
document.body.append(make)
async function moneyshot() {
    temp = await axios.get(url)
    console.log(temp.data.sprites);
    document.body.innerHTML = "<img src=\""+temp.data.sprites.front_default+"\"></img>"
}

moneyshot()