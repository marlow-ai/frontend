import Editor from "react-simple-code-editor";
import LineMaker from "../LineMaker";
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism.css';
import { useEffect, useState } from "react";

interface CodeOutputProps {
    output: string
}

export default function CodeOutput({ output }: CodeOutputProps) {

    const [nbLines, setNbLines] = useState(1)

    useEffect(() => {
        const nbLines = output.split('\n').length
        setNbLines(nbLines)
    }, [output])

    return (
        <>
            <div className="flex min-h-full w-full">
                <LineMaker nbLines={nbLines} />
                <Editor
                    value={output}
                    placeholder="JSON Feedback will appear here..."
                    onValueChange={() => {}}
                    highlight={input => highlight(input, languages.json, 'json')}
                    className="bg-slate-100 w-full rounded-r-lg"
                    textareaClassName="p-2 focus:outline-none"
                    padding={8}
                    style={{ overflow: "auto", minHeight: "20rem" }}
                />
            </div>
        </>
    )
}