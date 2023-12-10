import {  createContext, useReducer  } from "react";
import axios from "axios";

const AppContext = createContext();

const initialState = {
  items: [],

};

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-item':
      return { ...state, items: action.payload };
    case 'post':
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};

  

const AppProvider =({children})=>{


    const [state,dispatch]=useReducer(reducer,initialState)


    return (
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}
export {AppContext,AppProvider};