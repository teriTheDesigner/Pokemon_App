export default async function Card() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await res.json();

  const pokemonData = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const pokemonData = await res.json();
      const typeNames = pokemonData.types.map((type) => type.type.name);

      return {
        name: pokemon.name,
        imageUrl: pokemonData.sprites.other["official-artwork"].front_default,
        desc: pokemonData.weight,
        exp: pokemonData.base_experience,
        types: typeNames,
      };
    })
  );

  return (
    <main>
      <div className=" h-7 ">
        <input id="pokemonName" type="text" placeholder="Pokemon Name"></input>
        <button className="bg-white " id="search">
          🔍
        </button>
      </div>
      <div className="grid grid-cols-3 gap-8 m-20">
        {pokemonData.map((pokemon) => (
          <div className="flex flex-col items-center mb-10 border-2 p-6  ">
            <h2 key={pokemon.name}>{pokemon.name.toUpperCase()}</h2>
            <img src={pokemon.imageUrl} alt={pokemon.name}></img>
            <div>
              <p>Weight:{pokemon.desc}</p>
              <p>XP: {pokemon.exp} </p>
              <p>Type: {pokemon.types}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
