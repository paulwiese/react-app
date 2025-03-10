import { createContext, useState, useEffect } from "react";

export const GlobalState = createContext();

export function GlobalStateProvider({children}) {

    const [data, setData] = useState( () => {
        const savedData = localStorage.getItem('data');
        return savedData ? JSON.parse(savedData) : [];
    });

    useEffect( () => {localStorage.setItem('data', JSON.stringify(data))}, [data]);

    return <GlobalState.Provider value={{data, setData}}>
        {children}
    </GlobalState.Provider>

}