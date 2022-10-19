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

for (let i = 1; i <= 151; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then((data) => {
            for (let i = 1; i <= 1; i++) {
                document.getElementById("container").innerHTML += `
                <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 15rem">
                <img
                    id="image"
                    class="card-img-top"
                    src="${data.sprites.front_default}"
                />
                <div class="card-body">
                    <h3 class="card-title" id="name">
                        ${data.species.name}
                        </h3>
                        HP - ${data.stats[0].base_stat}
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" aria-label="Success example" style="width: ${data.stats[0].base_stat}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          Attack - ${data.stats[1].base_stat}
                        <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" aria-label="Success example" style="width: ${data.stats[1].base_stat}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          Defense - ${data.stats[2].base_stat}
                        <div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" aria-label="Success example" style="width: ${data.stats[2].base_stat}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          Type - ${data.types[0].type.name}
                    
                </div>
                
            </div>`;
            }
        });
}
