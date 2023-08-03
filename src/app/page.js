import Filtering from "./components/Filtering";
import Sorting from "./components/Sorting";
import ContextProvider from "./components/Context";
import PokeCard from "./components/PokeCard";
export default async function Home() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200");
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
    pokemons: pokemonData,
    filter: "",
    sort: "",
    pokemonData: pokemonData,

    favorites: [],
  };

  return (
    <main className="grid grid-cols-5 mr-8">
      <ContextProvider initialState={initialState}>
        <Sorting></Sorting>
        <Filtering></Filtering>
        <PokeCard></PokeCard>
      </ContextProvider>
    </main>
  );
}
