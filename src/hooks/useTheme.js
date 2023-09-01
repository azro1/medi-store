import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
 
const useTheme = () => {
    const context = useContext(ThemeContext)

    // checking that the context is being used within the scope of the provider - if not it's going to be undefined so we throw an error for ourselves and other developers to know what's going on
    if (context === undefined) {
        throw new Error("useTheme must be used inside the ThemeProvider component")
    }

    return context
}

export { useTheme }