import axios from "axios"
import { useEffect, useState } from "react"
import Button from "./Button"
import CodeInput from "./CodeInput"
import CodeOutput from "./CodeOutput"

export default function Assistant() {

    const VITE_API_URL = String(import.meta.env.VITE_API_URL)

    const [input, setInput] = useState("")
    const [output, setOutput] = useState<string>("")
    const [isFetching, setIsFetching] = useState(false)
    const [jobId, setJobId] = useState()

    useEffect(() => {
        if (jobId) {
            const interval = setInterval(async () => {
                const { data } = await axios.get(`${VITE_API_URL}/jobs/${jobId}`)
                if (data.state === 'completed') {
                    setOutput(data.job.returnvalue)
                    setIsFetching(false)
                    clearInterval(interval)
                } else {
                    // Processing
                }
            }, 1000)
        }
    }, [jobId])

    function handleChange(input: string) {
        setInput(input)
        setOutput("")
    }

    async function handleClick() {
        if (!isFetching) {
            setIsFetching(true)
            setOutput("")
            try {
                const { data: { id } } = await axios.post(`${VITE_API_URL}/jobs`, { input })
                setJobId(id)
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <>
            <div className="font-mono">
                <div className="flex flex-col items-center gap-4">
                    <CodeInput input={input} onChange={handleChange} />
                    <Button input={input} isFetching={isFetching} onClick={handleClick} />
                    <CodeOutput output={output} />
                </div>
            </div>
        </>
    )
}