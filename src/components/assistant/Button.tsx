import { PlayIcon, Cog6ToothIcon } from "@heroicons/react/24/outline"

interface ButtonProps {
    input: string
    isFetching: boolean
    onClick: () => void
}

function Enabled() {
    return (
        <>
            <span>Review Code</span>
            <PlayIcon className="h-6 w-6" />
        </>
    )
}

function Disabled() {
    return (
        <>
            <span>Analysing</span>
            <Cog6ToothIcon className="animate-spin h-6 w-6" />
        </>
    )
}

export default function Button({ input, isFetching, onClick }: ButtonProps) {
    return (
        <>
            <button onClick={onClick} className="mt-8 text-xl w-fit rounded-md py-4 px-6 outline-0 bg-indigo-500 hover:bg-indigo-600 text-white disabled:bg-indigo-300 disabled:cursor-not-allowed" disabled={input === "" || isFetching}>
                <div className="flex items-center gap-2">
                { isFetching ? <Disabled /> : <Enabled /> }
                </div>
            </button>
            <p className={[`text-sm text-slate-400`, isFetching ? 'visible' : 'invisible'].join(" ") }>Grab a coffee. We are working. </p>
        </>
    )
}