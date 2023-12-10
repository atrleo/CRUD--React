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
      case 'DELETE_ITEM':
        const filteredItems = state.items.filter((item) => item.id !== action.payload);
        return { ...state, items: filteredItems };  
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