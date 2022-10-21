"strict";

const pokemonName = document.getElementById("name");
const pokemonImg = document.getElementById("image");
const pokemonHP = document.getElementById("hp");
const pokemonDef = document.getElementById("def");
const pokemonAtt = document.getElementById("att");
const pokemonType = document.getElementById("type");

const buttonSearch = document.getElementById("button");

for (let i = 1; i <= 151; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json())
        .then((data) => {
            // let filterarray = [];

            // document
            //     .getElementById("searchpokemon")
            //     .addEventListener("keyup", function () {
            //         const pokemonValues =
            //             document.getElementById("searchpokemon").value;

            //         filterarray = data.filter(function (a) {
            //             if (a.name.includes(text)) {
            //                 return a.name;
            //             }
            //         });
            //         if (this.value == "") {
            //             showgallary(gallaryArray);
            //         } else {
            //             if (filterarray == "") {
            //                 document.getElementById("container").innerHTML = "";
            //             } else {
            //                 showgallary(filterarray);
            //             }
            //         }
            //     });
            function showgallary(currarray) {
                for (let i = 1; i <= 1; i++) {
                    function capitlizeFirstLetter(string) {
                        return string.charAt(0).toUpperCase() + string.slice(1);
                    }
                    const dataForName = data.species.name;
                    const dataForImg = data.sprites.front_default;
                    const dataForHp = data.stats[0].base_stat;
                    const dataForAttack = data.stats[1].base_stat;
                    const dataforDefense = data.stats[2].base_stat;
                    const dataForType = data.types[0].type.name;
                    const dataForNameCapitlized =
                        capitlizeFirstLetter(dataForName);
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
        });
}
// showgallary(currarray);

// miguel you are trying to build in a search feature and youre just tired

// miguel add a modal that gives more information

// buttonSearch.addEventListener("click", function () {
//     const lowerCase = pokemonValue.value.toLowerCase();
//     document.getElementById("card").style.display = "none";
//     document.getElementById("single").style.display = "block";

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
