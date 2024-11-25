import { createSignal, Show, type Component } from "solid-js";
import type {FavoritePokemon} from "../../interfaces/FavoritePokemon.ts";

type Props = {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props>= ({pokemon}) => {
  const [isVisible, setIsVisible] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon?.id}.png`;

  const deleteFavorite = () => {

    const favorites = JSON.parse(localStorage.getItem('favorite') ?? '[]') as FavoritePokemon[]

    const newFavorites = favorites.filter(p => p.id !== pokemon?.id)

    localStorage.setItem('favorite', JSON.stringify(newFavorites))
    setIsVisible(false)

  }

  return (
  <Show when={isVisible()}>
        <div class="flex flex-col justify-center items-center">
      <a href={`/pokemons/${pokemon?.name}`}>
        <img width="96" height="96" alt={pokemon?.name} src={imageSrc}  style={`view-transition-name: ${pokemon?.name}-image`}/>

        <p class="capitalize">
          #{pokemon?.id} {pokemon?.name}
        </p>
      </a>

      <button class="text-red-400" onClick={deleteFavorite}>Borrar Pokemon</button>
    </div>
  </Show>
  );
};
