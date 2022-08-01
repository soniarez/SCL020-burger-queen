import React, { createContext, useState } from 'react';

const SelectionContext = createContext();

export const SelectionProvider = ({children}) => {
    const [selected, setSelected] = useState([]);

    const addDish = (item) => {
        setSelected((prevState) => [...prevState, item]);
        console.log(item.id);
    }

    const deleteDish = (id) => {
        setSelected(selected.filter((item) => item.id !== id))
    }

    return (
        <SelectionContext.Provider value={{selected, addDish, deleteDish}}>{children}</SelectionContext.Provider>
    )
}

export default SelectionContext;