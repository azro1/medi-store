import { createContext } from 'react'
const ThemeContext = createContext() 

const ThemeProvider = ({ children }) => {
    return (
      // ThemeContext which is providing a value to all of it's children
        <ThemeContext.Provider value={{ color: "blue"}} >
          { children }
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext} 