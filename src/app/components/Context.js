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
