"use client";

import { useContext } from "react";
import { Context, DispatchContext } from "@/app/components/Context";

export default function Sorting() {
  const state = useContext(Context);
  const dispatch = useContext(DispatchContext);
  console.log(state.pokemonData);

  const ageFunction = () => {
    dispatch({ type: "OLDER" });
    console.log("Older");
  };

  return (
    <main>
      <div className="flex justify-center gap-12 items-center  h-20">
        <p>Age is: {state.age}</p>

        <p>Weight</p>
        <p>XP</p>
        <p>A-Z</p>
        <p>Z-A</p>
        <button onClick={ageFunction}>Older</button>
      </div>
      <div className=" col-span-4   grid grid-cols-3 gap-3 ">
        {state.pokemonData.map((pokemon) => (
          <div
            key={pokemon.name}
            className="flex flex-col items-center mb-10 border-2 p-3  "
          >
            <h2>{pokemon.name.toUpperCase()}</h2>
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
