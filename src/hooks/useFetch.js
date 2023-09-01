import { useEffect, useState } from "react"

/* Apdapted the custom hook again to make a DELETE request for the Medication page component by creating a second function called deleteData inside of the hook and using the setOptions function to update the state when the function is called. The state value will be updated to an object that just contains the request method which will then be passed to fetch as it's second argument after checking if method is DELETE and we have a value for the options state. The function has to also be returned from the hook in order for it to be called inside of the Medication page component */

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

    const deleteData = () => {
        setOptions({
            method: "DELETE"
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
                    setError(<p className="error">Oh no, 😞 let's try that again ...</p>)
                    console.log(err.message)
                }
            }
        }
        if (method === "GET") {
            fetchData()
        }
        if ((method === "POST" && options) || (method === "DELETE" && options)) {
           fetchData(options)
        }
        return () => {
            controller.abort()
        }
    }, [url, method, options])

    return { data, isPending, error, postData, deleteData }

}

export default useFetch