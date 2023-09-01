import { useEffect, useState } from "react"

/* the url is going to change at some point because we are using a custom hook so we need to create some state for the url (in App.js) and also add it as a dependency to useEffect so that every time it's value changes - it triggers useEffect to fire its function which causes the component to be re-evaluated and re-fetch the data using the new url and update the state with the new state value */

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
   
    useEffect(() => {
        const controller = new AbortController()
        const fetchData = async () => {
            setIsPending(true)
            try {
                const response = await fetch(url, { signal: controller.signal })

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
        fetchData()
        return () => {
            controller.abort()
        }
    }, [url])

    return { data, isPending, error }

}

export default useFetch