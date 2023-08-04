"use client";

import { useContext, useState } from "react";
import { Context, DispatchContext } from "@/app/components/Context";

export default function PokeCard() {
  const state = useContext(Context);
  const dispatch = useContext(DispatchContext);

  const [favoritedPokemons, setFavoritedPokemons] = useState({});

  const addToFavorites = (name) => {
    console.log("My favorite is:", name);
    dispatch({ type: "FAVORITE", name });

    setFavoritedPokemons((prevFavoritedPokemons) => ({
      ...prevFavoritedPokemons,
      [name]: !prevFavoritedPokemons[name], // Toggle the favorite status
    }));
  };

  return (
    <div className="  col-start-2 col-end-6 top-20   grid grid-cols-4 gap-4 ">
      {state.pokemons.map((pokemon) => (
        <div
          key={pokemon.name}
          className="flex flex-col gap-2 items-center mb-10 border-2 p-3 h-fit  "
        >
          <div className="flex gap-6">
            <h2>{pokemon.name.toUpperCase()}</h2>
            <button
              className="text-xl"
              onClick={() => addToFavorites(pokemon.name)}
            >
              {favoritedPokemons[pokemon.name] ? "❤️" : "♡"}
            </button>
          </div>
          <img src={pokemon.imageUrl} alt={pokemon.name}></img>
          <div className="text-sm">
            <p>Weight: {pokemon.desc}</p>
            <p>XP: {pokemon.exp} </p>
            <p>Type: {pokemon.types.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
