"use client";

import { useContext } from "react";
import { Context, DispatchContext } from "@/app/components/Context";

export default function PokeCard() {
  const state = useContext(Context);
  const dispatch = useContext(DispatchContext);

  return (
    <main>
      <div className=" col-span-4   grid grid-cols-3 gap-3 ">
        {state.pokemons.map((pokemon) => (
          <div
            key={pokemon.name}
            className="flex flex-col items-center mb-10 border-2 p-3  "
          >
            <h2>{pokemon.name.toUpperCase()}</h2>
            <img src={pokemon.imageUrl} alt={pokemon.name}></img>
            <div>
              <p>Weight:{pokemon.desc}</p>
              <p>XP: {pokemon.exp} </p>
              <p>Type: {pokemon.types.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
