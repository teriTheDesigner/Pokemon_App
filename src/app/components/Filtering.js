"use client";

import { useState } from "react";
export default function Filtering() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredData =
    selectedFilter === "All"
      ? pokemonData
      : pokemonData.filter((pokemon) => pokemon.types.includes(selectedFilter));
  return (
    <aside className=" col-span-1 absolute sticky  w-40 h-screen top-0 left-0 border-2">
      <div className="relative sticky w-full h-1/2 border-2">
        <p data-action="filter" onClick={() => handleFilterSelection("All")}>
          All Types
        </p>
        <p
          data-action="filter"
          onClick={() => handleFilterSelection("grasspoison")}
        >
          Grasspoison
        </p>
        <p data-action="filter" onClick={() => handleFilterSelection("fire")}>
          Fire
        </p>
        <p data-action="filter" onClick={() => handleFilterSelection("water")}>
          Water
        </p>
      </div>
    </aside>
  );
}
