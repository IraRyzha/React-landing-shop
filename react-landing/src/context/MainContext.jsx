import { createContext, useReducer, useState } from "react";
import initialState from "../store/state";
import reducer from "../store/reducer";

export const AppContext = createContext();

function MainContext({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{ cart, dispatchCart: dispatch, isCartOpen, setIsCartOpen }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default MainContext;
