import { useState, useEffect } from 'react'

 const PostImg =  (image:any) => {

    const [response, setResponse] = useState("")
     useEffect(() => {
        const postData = async() => {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(image)
            }
            let url = "https://front-exercise.z1.digital/evaluations"
            const res = await fetch(url, requestOptions)
            const json = await res.json()
            let data = json.summary.outcome
            setResponse(data)
        }
        postData()
    },[])
     return  response.includes("Approved") ? true : false
}

export default PostImg
