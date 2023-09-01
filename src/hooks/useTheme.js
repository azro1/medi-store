import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
 
const useTheme = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) {
        throw new Error("useTheme must be used inside the ThemeProvider component")
    }

    return context
}

export { useTheme }