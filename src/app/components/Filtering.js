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
      <div className=" text-sm leading-5 sticky w-full h-1/2  top-20 flex flex-col items-end pr-8 text-slate-400 ">
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("favorites")}
        >
          My Favorites ❤️
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("All")}
        >
          All Types
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("bug")}
        >
          Bug
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("dark")}
        >
          Dark
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("dragon")}
        >
          Dragon
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("ghost")}
        >
          Ghost
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("grass")}
        >
          Grass
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("ground")}
        >
          Ground
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("ice")}
        >
          Ice
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("electric")}
        >
          Electric
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("fairy")}
        >
          Fairy
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("fighting")}
        >
          Fighting
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("flying")}
        >
          Flying
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("normal")}
        >
          Normal
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("poison")}
        >
          Poison
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("psychic")}
        >
          Psychic
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("rock")}
        >
          Rock
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("steel")}
        >
          Steel
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("fire")}
        >
          Fire
        </button>
        <button
          className="hover:text-slate-100"
          onClick={() => filterPokemons("water")}
        >
          Water
        </button>
      </div>
    </aside>
  );
}
