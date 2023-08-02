import Card from "./components/PokeCard";
import Filtering from "./components/Filtering";
import Sorting from "./components/Sorting";
import ContextProvider from "./components/Context";
export default async function Home() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=5");
  const data = await res.json();

  const pokemonData = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const pokemonData = await res.json();
      const typeNames = pokemonData.types.map((type) => type.type.name);

      return {
        pokemonData: pokemonData,
        name: pokemon.name,
        imageUrl: pokemonData.sprites.other["official-artwork"].front_default,
        desc: pokemonData.weight,
        exp: pokemonData.base_experience,
        types: typeNames,
      };
    })
  );

  const initialState = {
    pokemons: [],
    filter: "",
    sort: "",
    pokemonData: pokemonData,
    age: 1,
  };

  return (
    <main>
      <ContextProvider initialState={initialState}>
        <Sorting></Sorting>
      </ContextProvider>
    </main>
  );
}
