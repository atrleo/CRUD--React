import {  createContext, useReducer,useContext } from "react";


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

const useCrud = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useCrud must be used within a CrudProvider');
  }
  return context;
};



export {AppContext,AppProvider,useCrud};