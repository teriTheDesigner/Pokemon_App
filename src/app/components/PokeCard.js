"use client";

import { useContext } from "react";
import { Context, DispatchContext } from "@/app/components/Context";

export default function PokeCard() {
  const state = useContext(Context);
  const dispatch = useContext(DispatchContext);

  const addToFavorites = (name) => {
    console.log("My favorite is:", name);
    dispatch({ type: "FAVORITE", name });
  };

  return (
    <div className="  col-start-2 col-end-6 top-20   grid grid-cols-4 gap-4 ">
      {state.pokemons.map((pokemon) => (
        <div
          key={pokemon.name}
          className="flex flex-col items-center mb-10 border-2 p-3 h-fit  "
        >
          <h2>{pokemon.name.toUpperCase()}</h2>
          <button onClick={() => addToFavorites(pokemon.name)}>♡</button>
          <img src={pokemon.imageUrl} alt={pokemon.name}></img>
          <div>
            <p>Weight:{pokemon.desc}</p>
            <p>XP: {pokemon.exp} </p>
            <p>Type: {pokemon.types.join(", ")}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
