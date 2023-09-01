import { useTheme } from '../../hooks/useTheme'
// import switch icon svg
import modeSwitch from '../../assets/switch.svg'

// styles
import './ThemeSelector.css'

const themeColors = ["#848D74", "#3E464E", "#B4BB99"]

const ThemeSelector = () => {
    const { changeColor, mode, changeMode } = useTheme()


  // we toggle the mode passed in as an argument to changeMode by using a ternary 
  const handleToggleMode = () => {
    changeMode(mode === "light" ? "dark" : "light")
 }
 console.log(mode)


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
           {/* use inline style to change color of modeSwitch icon based on mode by using css filter property with invert function which inverts a color from black to white. Icon is currently black. We set invert to 100% when site is in dark mode so icon turns white and if site is in light mode we invert by 40% which just fades the black to a slightly dark gray 
           
           Inside ThemeContext mode is set the dark by default so now when modeSwitch icon is clicked we call handleToggleMode function which does the check for mode that we get back from hook. Inside handleToggleMode changeMode is invoked and if mode is dark (which it is) we will pass back the value of "light" and this style property tenary will also check the mode because we are using the mode value to do the check for the filter function. Whenever the mode is dark it will invert to 100% changing icon color to white and the reverse
           */}
           
       </div>
    </div>
  )
}

export default ThemeSelector