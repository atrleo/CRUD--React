import {  createContext, useReducer,useState  } from "react";


const AppContext = createContext();

const initialState = {
  items: [],
  data : []

};

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-item':
      return { ...state, items: action.payload };
    case 'post':
      return { ...state, items: [...state.items, action.payload] };
      case 'read':
        return { ...state, data:action.payload };
      case 'delete':
        const updatedItems = state.items.filter(item => item.id !== action.payload);
      return { ...state, items: updatedItems };


  
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