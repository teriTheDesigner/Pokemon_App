"use client";
import React, { createContext, useReducer } from "react";

export const Context = createContext();
export const DispatchContext = createContext();

const pokeReducer = (state, action) => {
  switch (action.type) {
    case "FILTER":
      let filteredPokemons = state.pokemonData;
      const filterBy = action.filterBy;

      if (filterBy === "favorites") {
        filteredPokemons = state.favorites;
      } else if (filterBy !== "All") {
        filteredPokemons = state.pokemonData.filter((pokemon) =>
          pokemon.types.includes(filterBy)
        );
      }

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

    case "FAVORITE":
      const favoritePokemon = state.pokemons.find(
        (pokemon) => pokemon.name === action.name
      );
      if (favoritePokemon) {
        const isAlreadyFavorited = state.favorites.some(
          (favPokemon) => favPokemon.name === favoritePokemon.name
        );

        const updatedFavorites = isAlreadyFavorited
          ? state.favorites.filter(
              (favPokemon) => favPokemon.name !== favoritePokemon.name
            )
          : [...state.favorites, favoritePokemon];

        return {
          ...state,
          favorites: updatedFavorites,
        };
      }
      return state;
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
