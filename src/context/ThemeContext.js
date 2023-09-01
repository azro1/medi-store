import { createContext } from 'react'
const ThemeContext = createContext() 

const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={{ color: "blue"}} >
          { children }
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext} 