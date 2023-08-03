"use client";

import { useContext } from "react";
import { Context, DispatchContext } from "@/app/components/Context";

export default function Filtering() {
  const state = useContext(Context);
  const dispatch = useContext(DispatchContext);

  const filterPokemons = (filterBy) => {
    console.log("Filtering by:", filterBy);
    dispatch({ type: "FILTER", filterBy });
  };

  return (
    <aside className="   sticky  w-40 h-screen top-0 left-0 border-r-2  ">
      <div className=" sticky w-full h-1/2  top-20 flex flex-col items-end pr-4">
        <button onClick={() => filterPokemons("favorites")}>
          My Favorites ❤️
        </button>
        <button onClick={() => filterPokemons("All")}>All Types</button>
        <button onClick={() => filterPokemons("bug")}>Bug</button>
        <button onClick={() => filterPokemons("dark")}>Dark</button>
        <button onClick={() => filterPokemons("dragon")}>Dragon</button>
        <button onClick={() => filterPokemons("ghost")}>Ghost</button>
        <button onClick={() => filterPokemons("grass")}>Grass</button>
        <button onClick={() => filterPokemons("ground")}>Ground</button>
        <button onClick={() => filterPokemons("ice")}>Ice</button>
        <button onClick={() => filterPokemons("electric")}>Electric</button>
        <button onClick={() => filterPokemons("fairy")}>Fairy</button>
        <button onClick={() => filterPokemons("fighting")}>Fighting</button>
        <button onClick={() => filterPokemons("flying")}>Flying</button>
        <button onClick={() => filterPokemons("normal")}>Normal</button>
        <button onClick={() => filterPokemons("poison")}>Poison</button>
        <button onClick={() => filterPokemons("psychic")}>Psychic</button>
        <button onClick={() => filterPokemons("rock")}>Rock</button>
        <button onClick={() => filterPokemons("steel")}>Steel</button>
        <button onClick={() => filterPokemons("fire")}>Fire</button>
        <button onClick={() => filterPokemons("water")}>Water</button>
      </div>
    </aside>
  );
}
