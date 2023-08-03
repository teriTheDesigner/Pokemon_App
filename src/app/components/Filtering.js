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
    <aside className="   sticky  w-40 h-screen top-0 left-0 border-2 overflow-clip">
      <div className=" sticky w-full h-1/2  top-20 flex flex-col">
        <button onClick={() => filterPokemons("All")}>All Types</button>
        <button onClick={() => filterPokemons("grass")}>Grass</button>
        <button onClick={() => filterPokemons("poison")}>Poison</button>
        <button onClick={() => filterPokemons("fire")}>Fire</button>
        <button onClick={() => filterPokemons("water")}>Water</button>
      </div>
    </aside>
  );
}
