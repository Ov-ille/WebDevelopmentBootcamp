// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png

let myPokemon = [];
let baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
let container = document.querySelector("#pokemon-deck");
let addPokemon = document.querySelector('#pokemon-number');
let warningMessage = document.querySelector('#warning-message');
addPokemon.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        let curValue = addPokemon.value;
        if (curValue < 1 || curValue > 1010) {
            return false
        }
        if (!myPokemon.includes(parseInt(curValue))) {
            let newPokemonDiv = document.createElement("div");
            newPokemonDiv.classList.add("pokemon");
            let newPokemonImg = document.createElement("img");
            newPokemonImg.src = baseURL + `${curValue}.png`;
            let newPokemonSpan = document.createElement("span");
            newPokemonSpan.innerHTML = `#${curValue}`;

            newPokemonDiv.appendChild(newPokemonImg);
            newPokemonDiv.appendChild(newPokemonSpan);
            container.appendChild(newPokemonDiv);

            myPokemon.push(parseInt(curValue));
        }
        else {
            warningMessage.classList.remove("visuallyhidden");
            setTimeout(() => { warningMessage.classList.remove("display-none") }, 250);
            setTimeout(() => {
                warningMessage.classList.add("visuallyhidden");
                setTimeout(() => { warningMessage.classList.add("display-none") }, 350);
            }, 600);

        }
        addPokemon.value = ""
    }
});
