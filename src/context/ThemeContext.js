import { createContext, useReducer } from 'react'
const ThemeContext = createContext() 

// reducer function
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload };
    default:
      return state;
  }
};

const ThemeProvider = ({ children }) => {
const [state, dispatch] = useReducer(themeReducer, {
    color: "#232524"
})

// custom changeColor function
const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color })
}
    return (
        <ThemeContext.Provider value={{ ...state, changeColor }} >
          { children }
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext}