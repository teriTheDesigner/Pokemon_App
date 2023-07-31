"use client";

import { createContext, useReducer } from "react";
export const Context = createContext();
export const DispatchContext = createContext();

const initialState = {
  pokemons: [],
  filter: "",
  sort: "",
};

export const ContextProvider = ({ children }) => {
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
