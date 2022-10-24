"strict";

const fetchPokemon = async () => {
    for (let i = 1; i <= 151; i++) {
        await loadData(i);
    }
};

const loadData = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        showgallary(data);
    } catch (err) {
        // console.log(err);
    }
};
fetchPokemon();

function showgallary(data) {
    console.log(data);
    for (let i = 1; i <= 1; i++) {
        function capitlizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        const PokeShinyImg = data.sprites.front_shiny;
        const abilities = data.abilities[0].ability.name;
        const dataForName = data.species.name;
        const dataForImg = data.sprites.front_default;
        const dataForHp = data.stats[0].base_stat;
        const dataForAttack = data.stats[1].base_stat;
        const dataforDefense = data.stats[2].base_stat;
        const dataForType = data.types[0].type.name;
        const dataForNameCapitlized = capitlizeFirstLetter(dataForName);
        const dataID = data.id;
        const pokeWeight = data.weight;
        const pokeHeight = data.height;
        const speed = data.stats[5].base_stat;
        const specDef = data.stats[4].base_stat;
        const specAtt = data.stats[3].base_stat;

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
                <button class="modal-open" id="pokemon${dataID}">More Information</button>

    
                <div id="${dataID}" class="modal">

                <!-- Modal content -->
                <div class="modal-content">
                    <span class="close">X</span>
                <div class="flexmodal">
                    <img id="image" class="card-img-top" src="${PokeShinyImg}"/>
                    <div class="left align">
                    <p>Pokedex number - ${dataID}</p>
                    <p>Shiny Color</p>
                    <p>Height - ${pokeHeight}</p>
                    <p>Weight - ${pokeWeight}</p>
                    <p>Abilities - ${abilities}</p>
                </div>
                </div>
                <div class="moreStats">
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
                <div class="hp">Spec Def - ${specDef}</div>
                <div class="progress">
                    <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        aria-label="Success example"
                        style="width: ${specDef}%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
                <div class="hp">Spec Att - ${specAtt}</div>
                <div class="progress">
                    <div
                        class="progress-bar bg-primary"
                        role="progressbar"
                        aria-label="Success example"
                        style="width: ${specAtt}%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
                <div class="hp">Speed - ${speed}</div>
                <div class="progress">
                    <div
                        class="progress-bar bg-dark"
                        role="progressbar"
                        aria-label="Success example"
                        style="width: ${speed}%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
                </div>

                

                </div>
                </div>



                        
            </div>
        </div>
    </div>
    `;
    }

    function nomoreprint() {
        for (let i = 1; i <= 151; i++) {
            const pokemonone = document.getElementById(`pokemon${i}`);
            // console.log(pokemonone);
            const closeModal = document.getElementById(`${i}`);

            closeModal.addEventListener("click", () => {
                document.getElementById(`${i}`).style.display = "none";
            });

            pokemonone.addEventListener("click", () => {
                document.getElementById(`${i}`).style.display = "block";
            });
        }
    }
    nomoreprint();
}
