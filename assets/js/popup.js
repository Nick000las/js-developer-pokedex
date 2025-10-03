


function openPopUp(ID){
    const url = `https://pokeapi.co/api/v2/pokemon/${ID}`
    fetch(url)
        .then((response) => response.json())
        .then((pokemon))
    
    const popup = `
        <div class="popup-body">
          <div class="png-bg type-${pokemon.types[0].type.name}">
            <p class="poke-id">#${pokemon.id}</p><span class="close" onclick="fecharPopUp()">&times</span>
            <img src="${pokemon.sprites.other['dream_world'].front_default}" alt="${pokemon.name}">
            <h1 class="popup-poke-name">${pokemon.name}</h1>
            <div class="types">
              ${pokemon.types.map(t => `<span class="type ${t.type.name}">${t.type.name}</span>`).join('')}
            </div>
          </div>
          <div class="popup-main">
            <h2>Base Stats</h2>
            ${pokemon.stats.map(s => `
              <div class="stat">
                <span>${s.stat.name}</span>
                <div class="bar"><div class="fill" style="width:${s.base_stat/2}%;"></div></div>
              </div>`).join('')}
          </div>
        </div>
      `

    const newPopUp = document.getElementById('popup')
    newPopUp.innerHTML = popup
}

function removePopUp(){
    const remvpopup = document.getElementById('popup')
    remvpopup.innerHTML = ""
}