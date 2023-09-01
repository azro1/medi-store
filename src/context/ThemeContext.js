
// Reducers & useReducer

// A lot of the time when you're working with context and complex state and different ways of updating states you might want to reach for something called a reducer. A reducer is just a function and it's a way of working with with state (just like useState is a way of working with state) but a reducer makes it easier to work with multiple bits of related state that can be updated in serveral different ways. An example might be an array of data - where you can add to it - delete from it - update an item inside of it - sort it - filter it etc. There might be many ways you need to update that state and you might need varying logic to do it. Now you could do that using the useState hook and several different functions inside of the component to update the state depending on what you needed to do to it - but then it bloats the component with many functions and as our logic becomes a little more complex it becomes harder to manage - also you might want to perform multiple state changes at once, so you could end up with calling several different functions at once.. now this again become harder to manage in React and also our state updates become less reliable and less predictable.

// So, to combat this we can use a reducer function - which is a single function that encapsulates all of the logic that we might need to update some state values. So it keeps everything together in one place and makes it easy to update state in multiple ways at once and it's a much more reliable way of handling slightly more complex state




import { createContext, useReducer } from 'react'
// the useReducer hook allows us to specify a reducer function which is going to be resposible for updating our state and keeping all of that update logic together in one place - and it also lets us specify an initial value as well

const ThemeContext = createContext() 

// reducer function which we declare outside of the component which will house all of our state logic
const themeReducer = () => {

}




const ThemeProvider = ({ children }) => {

const [state, dispatch] = useReducer(themeReducer, {
    color: "blue"
})
// We invoke the useReducer hook and pass in as the first argument the name of a function that we're going to use as our reducer function and as the second the initial state that we want to use. Now, just like the useState hook it return 2 values inside an array so we can capture them the same way

// now these 2 values are:

// 1. The state - which to begin with is going to be the initial state that we specified
// 2. A dispatch function - the dispatch function is a way that we can dispatch the state change to the reducer function

// So if in the future we want to call the reducer function to change our state - we do that using the dispatch function.

    return (
        <ThemeContext.Provider value={{ color: "blue"}} >
          { children }
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext} 