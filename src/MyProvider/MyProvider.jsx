import React, { createContext, useState } from 'react';
export const myContex = createContext('')
const MyProvider = ({ children }) => {
    const [value, setValue] = useState('');
    return (
        <myContex.Provider value={{ value, setValue }}>
        {children}
      </myContex.Provider>
    );
};

export default MyProvider;