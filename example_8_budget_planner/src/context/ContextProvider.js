import React , {useContext , createContext , useReducer} from "react";

export const GlobalContext = createContext();

export const ContextProvider = ({children, initialValue , reducer}) => {

    return (
    <GlobalContext.Provider value={useReducer(reducer,initialValue)}>
        {children}
    </GlobalContext.Provider>
    
    )

}

export const useContextProvider = () => useContext(GlobalContext)