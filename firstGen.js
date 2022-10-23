"strict";

const pokemonName = document.getElementById("name");
const pokemonImg = document.getElementById("image");
const pokemonHP = document.getElementById("hp");
const pokemonDef = document.getElementById("def");
const pokemonAtt = document.getElementById("att");
const pokemonType = document.getElementById("type");

for (let i = 1; i <= 151; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then((data) => showgallary(data));
}

function showgallary(data) {
    for (let i = 1; i <= 1; i++) {
        function capitlizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        console.log("data");
        console.log("data.id");
        const dataForName = data.species.name;
        const dataForImg = data.sprites.front_default;
        const dataForHp = data.stats[0].base_stat;
        const dataForAttack = data.stats[1].base_stat;
        const dataforDefense = data.stats[2].base_stat;
        const dataForType = data.types[0].type.name;
        const dataForNameCapitlized = capitlizeFirstLetter(dataForName);

        document.getElementById("container").innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 px-5 gy-5 pokemoncard">
    <img id="image" class="card-img-top" src="${dataForImg}"/>
    <div class="ui">
        <h3 id="name">${dataForNameCapitlized}</h3>
            <div class="hp">HP - ${dataForHp} </div>
                <div class="progress">
                    <div 
                        class="progress-bar bg-warning "
                        role="progressbar"
                        aria-label="Success example"
                        style="width: ${dataForHp}%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100">
                    </div>
                </div>
                <div class="hp">Attack - ${dataForAttack}</div>
                <div class="progress">
                    <div
                        class="progress-bar bg-danger"
                        role="progressbar"
                        aria-label="Success example"
                        style="width: ${dataForAttack}%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
                <div class="hp">Defense - ${dataforDefense}</div>
                <div class="progress">
                    <div
                        class="progress-bar bg-info"
                        role="progressbar"
                        aria-label="Success example"
                        style="width: ${dataforDefense}%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
                <div class="hp">Type - ${dataForType}</div>
            


            </div>
        </div>
    </div>
    `;
    }
}
