import { useTheme } from '../../hooks/useTheme'

// styles
import './ThemeSelector.css'

// custom theme colors
const themeColors = ["#848D74", "#3E464E", "#B4BB99"]

const ThemeSelector = () => {
    const { changeColor } = useTheme()

  return (
    <div className="theme-selector">
       <div className="theme-buttons">
           {themeColors.map((color) => (
               <div
                  key={color}
                  onClick={() => changeColor(color)}
                  style={{background: color}}
               />
           ))}

       </div>
    </div>
  )
}

export default ThemeSelector