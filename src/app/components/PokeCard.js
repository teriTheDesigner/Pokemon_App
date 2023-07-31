export default function Card() {
  return (
    <main className="">
      <div className=" col-span-4   grid grid-cols-3 gap-3 ">
        {filteredData.map((pokemon) => (
          <div className="flex flex-col items-center mb-10 border-2 p-3  ">
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
