

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10
let offset = 0
const maxRecors = 151



async function convertPokemonToHtml(pokemon) {
    // detalhesPokemon(pokemon)
    return `
        <button class="detalhes">
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                
                <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        </button>
        `
}


function loadPokemonItems(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToHtml).join('')
        pokemonList.innerHTML += newHtml
        
    })
    

}



loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () =>{
    offset += limit
    if(offset + limit >= maxRecors) {
        loadPokemonItems(offset, maxRecors - offset)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }
    else {
        loadPokemonItems(offset, limit)
    }

    
})


function detalhesPokemon(pokemons){
    // alert("Eu sou um alert!");
    console.log(pokemons)


}
