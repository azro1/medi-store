import { createContext, useReducer } from 'react'
const ThemeContext = createContext() 

// reducer function
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
const [state, dispatch] = useReducer(themeReducer, {
    color: "#232524",
    mode: "light"
})

// custom changeColor function
const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color })
}

// custom changeMode function
const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode })
}

    return (
        <ThemeContext.Provider value={{ ...state, changeColor, changeMode }} >
          { children }
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext}