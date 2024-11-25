import type { FavoritePokemon } from "@interfaces/FavoritePokemon";
import { createSignal, For } from 'solid-js'
import { FavoritePokemonCard } from './FavoritePokemonCard'

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritePokemons = JSON.parse(localStorage.getItem('favorite') ?? '[]')

    return favoritePokemons;
}



export const FavoritePokemonsList = () =>{

    const [pokemons, setPokemons] = createSignal(getLocalStoragePokemons())

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
            
            <For each={pokemons()}>{(pokemon) => <FavoritePokemonCard name={pokemon.name} id={pokemon.id} /> }</For>

        </div>
    )
    
}