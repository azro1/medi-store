import { createContext, useReducer } from 'react'
const ThemeContext = createContext() 



// reducer function
const themeReducer = (state, action) => {
   switch(action.type) {

   }
}


const ThemeProvider = ({ children }) => {
const [state, dispatch] = useReducer(themeReducer, {
    color: "blue"
})


// custom changeColor function
const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color })
}


    return (
        <ThemeContext.Provider value={{ color: "blue"}} >
          { children }
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext} 






// Let's imagaine that we want to change this color value in the state .. how do we do that? 

// well first of all i'm going to create a function called changeColor and that takes in a color argument to whatever color we want to change it to and then inside this function i'm just going to call the dispatch function.

// Now the dispatch function takes in an object as an argument which is referred to as the dispatch action and on that action object we can specify 2 properties:

// 1. type - the type property basically describes the type of state change that we want to make and normally the is going to be a string CAPITALISED - so this is the type of state change that we want to make

// 2. payload - the payload is any data that we want to base the state change on and in our case we want to pass the new color as the payload value

// So now we're calling this dispatch function and we're passing in the action object with these 2 properties on it. 

// Now, in turn when we use this dispatch function - react looks at the reducer function associated with that dispatch and it finds our themeReducer function and then it fires that function to make the state change inside of it.



// Now the themeReducer function - when it's called using the dispatch function takes in 2 arguments:

// 1. state - the current up-to-date state
// 2. action - the action object we passed into the dispatch call

// So then we can use both of these 2 things to update the state. So all we need to do is return a value which represents the new state at the end. 

// So for example if i just returned a string that said "hello" then our state value would be updated to be just a string that said "hello" but we don't want to do that .. we want to check the type of state change that we want to make and the return an updated state based on that

// Now, we passed the type of state change that we want to make into the dispatch on the action object and we have access to that action object inside of the reducer function - so we can check that type property and react accordinly to it

// So the way that we'll be doing this is by using a switch statement to check the type property of the action and then based on different types we'll return different values