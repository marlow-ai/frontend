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
            subscribe(jobId)
        }
    }, [jobId, subscribe])

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

                // const response = await fetch(`${VITE_API_URL}/jobs`, {
                //     method: 'POST',
                //     body: JSON.stringify({ input })
                // })
                setJobId(id)
            } catch (error) {
                console.error(error)
            }
        }
    }

    function subscribe(jobId: string) {
        console.log(`subscribe: ${jobId}`)
        const CHANNEL = "any"
        // supabase.channel(CHANNEL)
        //     .on("postgres_changes", {
        //         event: "UPDATE",
        //         schema: "public",
        //         table: "jobs",
        //         filter: `id=eq.${jobId}`
        //     }, (payload) => {
        //         console.log(payload)
        //         setOutput(payload.new.output)
        //         supabase.removeAllChannels()
        //         setIsFetching(false)
        //     }).subscribe((status, error) => {
        //         console.log("status", status)
        //         if (error) {
        //             console.error(error)
        //         }
        //     })
        setIsFetching(false)
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