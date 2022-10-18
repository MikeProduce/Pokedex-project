"strict";

const pokemonValue = document.getElementById("searchpokemon");
const buttonSearch = document.getElementById("button");
const pokemonName = document.getElementById("name");
const pokemonImg = document.getElementById("image");
const pokemonHP = document.getElementById("hp");
const pokemonDef = document.getElementById("def");
const pokemonAtt = document.getElementById("att");
const pokemonType = document.getElementById("type");

// buttonSearch.addEventListener("click", function () {
//     const lowerCase = pokemonValue.value.toLowerCase();

//     fetch(`https://pokeapi.co/api/v2/pokemon/${lowerCase}`)
//         .then((response) => response.json())
//         .then(
//             (data) => (
//                 (pokemonName.textContent += ` ${data.species.name}`),
//                 (pokemonImg.src = `${data.sprites.front_default}`),
//                 (pokemonHP.textContent += ` ${data.stats[0].base_stat}`),
//                 (pokemonAtt.textContent += ` ${data.stats[1].base_stat}`),
//                 (pokemonDef.textContent += ` ${data.stats[2].base_stat}`),
//                 (pokemonType.textContent += ` ${data.types[0].type.name}`),
//                 console.log(data)
//             )
//         );
// });

for (let i = 1; i <= 10; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then((data) => {
            for (let i = 1; i <= 1; i++) {
                document.getElementById("container").innerHTML += `
                    <div class="card" style="width: 18rem">
                    <img id="image" class="card-img-top" src="${data.sprites.front_default}" />
                    <div class="card-body">
                        <h5 class="card-title" id="name">Name: ${data.species.name}</h5>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">HP: ${data.stats[0].base_stat}</li>
                        <li class="list-group-item">Attack: ${data.stats[1].base_stat}</li>
                        <li class="list-group-item">Defense: ${data.stats[2].base_stat} </li>
                        <li class="list-group-item">Type: ${data.types[0].type.name}</li>
                    </ul>
                </div>`;
            }
        });
}

// container.innerHTML = returnCards();

// after to fetch all the data you tell the loop to stop after getting to 151 of fetching the said data

// miguel run a loop through everysingle pokemon and everytime you run a loop through one create a text node or create the html part of that box setting
// for example "li: x"
