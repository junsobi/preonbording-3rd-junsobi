import React, { createContext, useReducer } from "react";

interface State {}

interface Action {
  type: string;
}

const initialState: State = {};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

interface ContextType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const SearchContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null,
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
