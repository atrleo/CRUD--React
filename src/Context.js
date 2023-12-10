import {  createContext, useReducer,useState  } from "react";


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
    const[data,setData]= useState([]);


    return (
        <AppContext.Provider value={{state,dispatch,data,setData}}>
            {children}
        </AppContext.Provider>
    )
}
export {AppContext,AppProvider};