"use client";
import React, { createContext, useReducer } from "react";

export const Context = createContext();
export const DispatchContext = createContext();

const pokeReducer = (state, action) => {
  switch (action.type) {
    case "OLDER":
      return {
        ...state,
        age: state.age + 1,
      };

    case "FILTER":
      let filteredPokemons = [...state.pokemonData];
      const filterBy = action.filterBy;

      filteredPokemons =
        filterBy === "All"
          ? state.pokemonData
          : state.pokemonData.filter((pokemon) =>
              pokemon.types.includes(filterBy)
            );
      return {
        ...state,
        pokemons: filteredPokemons,
        filter: filterBy,
      };

    case "SORT":
      let sortedPokemons = [...state.pokemons];

      switch (action.sortBy) {
        case "weight":
          sortedPokemons.sort((a, b) => a.desc - b.desc);
          break;
        case "experience":
          sortedPokemons.sort((a, b) => a.exp - b.exp);
          break;
        case "nameAZ":
          sortedPokemons.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "nameZA":
          sortedPokemons.sort((a, b) => b.name.localeCompare(a.name));
          break;
        default:
          return sortedPokemons;
      }

      return {
        ...state,
        pokemons: sortedPokemons,
        sort: action.sortBy,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ initialState, children }) => {
  const [state, dispatch] = useReducer(pokeReducer, initialState);

  return (
    <Context.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </Context.Provider>
  );
};

export default ContextProvider;
