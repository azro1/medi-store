import { useTheme } from '../../hooks/useTheme'
import modeSwitch from '../../assets/switch.svg'

// styles
import './ThemeSelector.css'

const themeColors = ["#007B7E", "#B8860B", "#848D74"]

const ThemeSelector = () => {
  const { changeColor, mode, changeMode } = useTheme()

  const handleToggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light")
 }
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
       <div className="mode-toggle">
          <img 
           src={modeSwitch} 
           alt="dark/light icon"
           onClick={handleToggleMode}
           style={{ filter: mode === "dark" ? "invert(100%)" : "invert(40%)" }}
           />
       </div>
    </div>
  )
}

export default ThemeSelector