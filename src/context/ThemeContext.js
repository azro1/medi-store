// CREATING A CONTEXT PROVIDER

// this function allows us to create a new context object
import { createContext } from 'react'

// we invoke the createContext function which returns to us a new context object which we store in a const called ThemeContext 
const ThemeContext = createContext() 

const ThemeProvider = ({ children }) => {

    
    // custom logic


    return (
        // on that context object is a context Provider component which we can then access by saying <ThemeContext.Provider> and this is the Provider component that would wrap any parts of our component tree to provide it with the value of our ThemeContext (index.js) - the value that we pass into the component tree is specified in a vlaue prop on the pProvider component
        <ThemeContext.Provider value={{ color: "blue"}} >
          { children }
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext} 