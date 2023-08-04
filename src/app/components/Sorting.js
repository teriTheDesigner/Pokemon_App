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
      <div className=" flex justify-center gap-12 items-center text-xs leading-5 text-slate-400  h-20">
        <p className="text-slate-100">Sort by: </p>
        <button
          className="hover:text-slate-100"
          onClick={() => sortPokemons("weight")}
        >
          Weight
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => sortPokemons("experience")}
        >
          XP
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => sortPokemons("nameAZ")}
        >
          A-Z
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => sortPokemons("nameZA")}
        >
          Z-A
        </button>
      </div>
    </main>
  );
}
