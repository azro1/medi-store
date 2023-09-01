import { useEffect, useState } from "react"

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
                    setError(<p className="error">Oh no, 😞 let's try that again ...</p>)
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