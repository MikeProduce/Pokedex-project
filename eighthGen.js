"strict";

const fetchPokemon = async () => {
    for (let i = 810; i <= 905; i++) {
        await loadData(i);
    }
};

const loadData = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res = await fetch(url);
        const data = await res.json();
        pokemonCard(data);
    } catch (err) {
        console.log(err);
    }
};
fetchPokemon();

function pokemonCard(data) {
    function capitlizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pokemonShinyImg = data.sprites.front_shiny;
    const pokemonAbilities = data.abilities[0].ability.name;
    const pokemonNameLowerCase = data.species.name;
    const pokemonImage = data.sprites.front_default;
    const pokemonHp = data.stats[0].base_stat;
    const pokemonAttack = data.stats[1].base_stat;
    const pokemonDefense = data.stats[2].base_stat;
    const pokemonType = data.types[0].type.name;
    const pokemonName = capitlizeFirstLetter(pokemonNameLowerCase);
    const pokemonID = data.id;
    const pokemonWeight = data.weight;
    const pokemonHeight = data.height;
    const pokemonSpeed = data.stats[5].base_stat;
    const pokemonSD = data.stats[4].base_stat;
    const pokemonSA = data.stats[3].base_stat;

    document.getElementById("container").innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 px-5 gy-5 hide pokemoncard">
    <img class="card-img-top" src="${pokemonImage}" />
    <div class="ui">
        <h3 class="name">${pokemonName}</h3>
        <div class="hp">HP - ${pokemonHp} </div>
        <div class="progress">
            <div class="progress-bar bg-warning " role="progressbar" aria-label="Success example"
                style="width: ${pokemonHp}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            </div>
        </div>
        <div class="attack">Attack - ${pokemonAttack}</div>
        <div class="progress">
            <div class="progress-bar bg-danger" role="progressbar" aria-label="Success example"
                style="width: ${pokemonAttack}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            </div>
        </div>
        <div class="defense">Defense - ${pokemonDefense}</div>
        <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" aria-label="Success example"
                style="width: ${pokemonDefense}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            </div>
        </div>
        <div class="type">Type - ${pokemonType}</div>
        <button class="modal-open" id="pokemon${pokemonID}">More Information</button>
        <div id="${pokemonID}" class="modal">
            <div class="modal-content">
                <span class="close" id="${pokemonID}">X</span>
                <div class="flexmodal">
                <p>Shiny Color</p>
                    <img class="card-img-top" src="${pokemonShinyImg}" />
                    <div class="left align">
                        <p>Pokedex number - ${pokemonID}</p>
                        
                        <p>Height - ${pokemonHeight}</p>
                        <p>Weight - ${pokemonWeight}</p>
                        <p>Abilities - ${pokemonAbilities}</p>
                    </div>
                </div>
                <div class="moreStats">
                    <div class="hp">Attack - ${pokemonAttack}</div>
                    <div class="progress">
                        <div class="progress-bar bg-danger" role="progressbar" aria-label="Success example"
                            style="width: ${pokemonAttack}%" aria-valuenow="25" aria-valuemin="0"
                            aria-valuemax="100">
                        </div>
                    </div>
                    <div class="hp">Defense - ${pokemonDefense}</div>
                    <div class="progress">
                        <div class="progress-bar bg-info" role="progressbar" aria-label="Success example"
                            style="width: ${pokemonDefense}%" aria-valuenow="25" aria-valuemin="0"
                            aria-valuemax="100">
                        </div>
                    </div>
                    <div class="hp">HP - ${pokemonHp} </div>
                    <div class="progress">
                        <div class="progress-bar bg-warning " role="progressbar"
                            aria-label="Success example" style="width: ${pokemonHp}%" aria-valuenow="25"
                            aria-valuemin="0" aria-valuemax="100">
                        </div>
                    </div>
                    <div class="hp">Spec Def - ${pokemonSD}</div>
                    <div class="progress">
                        <div class="progress-bar bg-success" role="progressbar" aria-label="Success example"
                            style="width: ${pokemonSD}%" aria-valuenow="25" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                    <div class="hp">Spec Att - ${pokemonSA}</div>
                    <div class="progress">
                        <div class="progress-bar bg-primary" role="progressbar" aria-label="Success example"
                            style="width: ${pokemonSA}%" aria-valuenow="25" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                    <div class="hp">Speed - ${pokemonSpeed}</div>
                    <div class="progress">
                        <div class="progress-bar bg-dark" role="progressbar" aria-label="Success example"
                            style="width: ${pokemonSpeed}%" aria-valuenow="25" aria-valuemin="0"
                            aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`;
}

const theParent = document.querySelector("#container");
theParent.addEventListener("click", doSomething, false);

function doSomething(e) {
    if (e.target !== e.currentTarget) {
        let clickedItem = e.target.id;
        console.log(clickedItem);
        for (let i = 810; i <= 905; i++) {
            if (clickedItem == "pokemon" + i) {
                document.getElementById(i).style.display = "block";
            }
            if (clickedItem == i) {
                document.getElementById(i).style.display = "none";
            }
            e.stopPropagation();
        }
    }
}

const serachInput = document.querySelector("[data-search]");

serachInput.addEventListener("input", (e) => {
    const value = e.target.value;
    console.log(value);

    input = value.toLowerCase();
    let cardcontainer = document.getElementsByClassName("pokemoncard");
    console.log(cardcontainer);

    for (i = 0; i < cardcontainer.length; i++) {
        if (!cardcontainer[i].innerHTML.toLowerCase().includes(input)) {
            cardcontainer[i].style.display = "none";
            console.log("hi");
        } else {
            cardcontainer[i].style.display = "block";
            console.log("no");
        }
    }
});
