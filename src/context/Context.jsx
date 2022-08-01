import React, { createContext, useState } from 'react';

const SelectionContext = createContext();

export const SelectionProvider = ({children}) => {
    const [selected, setSelected] = useState([]);

    const addDish = (item) => {
        setSelected((prevState) => [...prevState, item]);
    }
    return (
        <SelectionContext.Provider value={{selected, addDish}}>{children}</SelectionContext.Provider>
    )
}

export default SelectionContext;