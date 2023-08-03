"use client";

import { useContext } from "react";
import { Context, DispatchContext } from "@/app/components/Context";

export default function Sorting() {
  const state = useContext(Context);
  const dispatch = useContext(DispatchContext);

  const ageFunction = () => {
    dispatch({ type: "OLDER" });
    console.log("Older");
  };

  const sortPokemons = (sortBy) => {
    dispatch({ type: "SORT", sortBy });
  };

  return (
    <main>
      <div className="flex justify-center gap-12 items-center  h-20">
        <p>Age is: {state.age}</p>
        <button onClick={() => sortPokemons("weight")}>Weight</button>
        <button onClick={() => sortPokemons("experience")}>XP</button>
        <button onClick={() => sortPokemons("nameAZ")}>A-Z</button>
        <button onClick={() => sortPokemons("nameZA")}>Z-A</button>

        <button onClick={ageFunction}>Older</button>
      </div>
    </main>
  );
}
