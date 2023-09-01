import { createContext, useReducer } from 'react'
const ThemeContext = createContext() 



// reducer function
const themeReducer = (state, action) => {
// so let's pass the action type into the switch statement to be evaluated and then inside that switch statement we can specify different cases - the case that we want to look for is when the value of the action type is 'CHANGE_COLOR' and then put a colon at the end
   switch(action.type) {
      case 'CHANGE_COLOR':
        // so now inside this case we can return an updated state object - so let's return a object first of all and then first i'm going to spread the current state properties into this object
    
        // Now, right now that's only the color property - but in the future there might be more properties as well and we need to add all of those properties to the new state value because if we don't then they just won't exist after the update happens - so we spread the properties of the current state object and then we can overwrite any other properties that we want to in this state update - in our case that going to be the color property and the value of that is going to be the payload on the action (see changeColor function) 
        return { ...state, color: action.payload }
        // and then finally we also need a default case in the switch statement to pass back a default value incase none of the cases matched and that default value is just going to be an unchanged state - the one we take into the reducer in the first place
        default:
            return state
   }
}


const ThemeProvider = ({ children }) => {
const [state, dispatch] = useReducer(themeReducer, {
    color: "blue"
})


// custom changeColor function
const changeColor = (color) => {
    // * remember we set the payload in the dispatch function to be the new color that we pass into this function *
    dispatch({ type: 'CHANGE_COLOR', payload: color })
}


    return (
        <ThemeContext.Provider value={{ ...state, changeColor }} >
          { children }
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext} 





// so now we have the initial state value which is an object with a color property set to blue to begin with
// if we want to change that color in the state we can call this changeColor function and pass in a new color
// that's going to fire a dispatch where we specify the type and the payload on the action object
// and in turn this fires the themeReducer function which takes in the current state and the action
// we check the action type and if it's equal to 'CHANGE_COLOR' then we return a new state object with the new color value 
// that then updates the state value that we get back from the useReducer hook


// so now all we need to do is pass any values into the value prop of the provider that we want to provide to our components because currently we're just passing this object in that never changes..

// we want to pass in the state object (which can change) and also the changeColor function so that we can call that function from other compoents
// so to do that we pass in an object as the value first of all and then inside that object spread any state properties and also add on the changeColor property which is going to be the function

// so now, this should be an object with 2 properties:

// 1. color
// 2. changeColor

// and now we've done that - let's try using it inside the Navbar component!