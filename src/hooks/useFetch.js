import { useEffect, useState } from "react"

/* Apdapted the custom hook to make a POST request for the Create page component by adding a second parameter which is the method and setting it to be GET by default. We created a postData function which we return from the hook which takes an argument which is the data that we're posting from the form and also created some state called options for it. We set the inital value of options to be the fetch options object specifying the data which we stringify in the body

now when we invoke this hook - we need to check what the method is first and foremost. If method is GET (meaning no second argument to the hook is passed in) we invoke fetchData function as usual to get the data. If we pass in a second argument for the method of POST and we have a value for the options state - we invoke fetchData passing in the options state as and argument which we take into fetchData and spread out as the first property inside the options object to make the fetch. We also need to add method and options as dependencies to useEffect as we are now using both inside of useEffect. 

So now, when we use our custom hook in the Create form - if we want to make a POST request we need to pass a second argument to it which will be the method and we also need to call postData passing in our form data

in here we'll first check what the method is - if no second argument is passed in it will default to GET and we call fetchData to make normal fetch for the data

if we pass a second argument in of POST and we have a value for the options state (meaning if we invoked pastData inside our form and passed in our form data) - we call fetchData but we pass in the options state (which will be the options object for fetch using the form data we passed in and we stringify that data in the body ready for sending). We then take in options as a parameter to fetchData and use it to make the fetch. So then we will make a POST request to our db.json file with the form data from our Create page component and since we added the method and the options as a dependency to useEffect - anytime the values of either of these depencies change - it will cause useEffect to fire it's function again which will cause the component to be re-evaluated and to make the fetch using the corect method and values */

const useFetch = (url, method="GET") => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState(null)

    const postData = (postData) => {
        setOptions({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
    }
   
    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async (fetchOptions) => {
            setIsPending(true)
            try {
                const response = await fetch(url, {...fetchOptions, signal: controller.signal })

                if (!response.ok) {
                   throw new Error("Could not fetch data")
                }
                const jsonData = await response.json()
                setIsPending(false)
                setError(null)
                setData(jsonData)

            } catch (err) {
                if (err.name === "AbortError") {
                    console.log('fetch was aborted')
                } else {
                    setIsPending(false)
                    setError(<strong>Oh no, 😞 let's try that again ...</strong>)
                    console.log(err.message)
                }
            }
        }
        if (method === "GET") {
            fetchData()
        }
        if (method === "POST" && options) {
           fetchData(options)
        }
        return () => {
            controller.abort()
        }
    }, [url, method, options])

    return { data, isPending, error, postData }

}

export default useFetch