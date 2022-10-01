import React, { useState } from "react";

export const ThemeContext = React.createContext({
    theme: "dark", 
    toggleTheme: () => {}
});

export const ThemeProvider = (props) =>{

    const [ theme , setTheme ] = useState("light");

    const toggleTheme = () => {
        if(theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

    return(
        <ThemeContext.Provider value={{theme , toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}