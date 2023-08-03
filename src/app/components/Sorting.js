"use client";

import { useContext } from "react";
import { Context, DispatchContext } from "@/app/components/Context";

export default function Sorting() {
  const state = useContext(Context);
  const dispatch = useContext(DispatchContext);

  const sortPokemons = (sortBy) => {
    dispatch({ type: "SORT", sortBy });
  };

  return (
    <main className="col-span-5">
      <div className=" flex justify-center gap-12 items-center  h-20">
        <button onClick={() => sortPokemons("weight")}>Weight</button>
        <button onClick={() => sortPokemons("experience")}>XP</button>
        <button onClick={() => sortPokemons("nameAZ")}>A-Z</button>
        <button onClick={() => sortPokemons("nameZA")}>Z-A</button>
      </div>
    </main>
  );
}
