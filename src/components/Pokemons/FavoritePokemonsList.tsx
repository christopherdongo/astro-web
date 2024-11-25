import type { FavoritePokemon } from "@interfaces/FavoritePokemon";
import { createSignal, For } from 'solid-js'
import { FavoritePokemonCard } from './FavoritePokemonCard'

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritePokemons = JSON.parse(localStorage.getItem('favorite') ?? '[]')
    return favoritePokemons;
}



export const FavoritePokemonsList = () =>{

    const [pokemons] = createSignal(getLocalStoragePokemons())

    return (
        <div class="grid grid-cols-2 sm:grid-cols-4">
            
            <For each={pokemons()}>{(pokemon) => <FavoritePokemonCard pokemon={pokemon} /> }</For>

        </div>
    )
    
}