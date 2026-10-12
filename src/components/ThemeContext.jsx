import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({Children}){
    const [dark, setDark] = useState(false);

    return(
        <ThemeContext.Provider value={{dark, setDark}}>
            {Children}
        </ThemeContext.Provider>
    );
}