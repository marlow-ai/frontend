import Editor from "react-simple-code-editor";
import LineMaker from "../LineMaker";
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism.css';
import { useState } from "react";

interface CodeInputProps {
    input: string
    onChange: (input: string) => void
}

export default function CodeInput({ input, onChange }: CodeInputProps) {

    const [nbLines, setNbLines] = useState(1)

    function handleValueChange(input: string) {
        const nbLines = input.split('\n').length
        setNbLines(nbLines)
        onChange(input)
    }

    return (
        <>
            <div className="flex min-h-full w-full">
                <LineMaker nbLines={nbLines} />
                <Editor
                    value={input}
                    placeholder="Type some code..."
                    onValueChange={handleValueChange}
                    highlight={input => highlight(input, languages.js, 'js')}
                    className="bg-slate-100 w-full rounded-r-lg"
                    textareaClassName="p-2 focus:outline-none"
                    padding={8}
                    style={{ overflow: "auto", minHeight: "20rem" }}
                />
            </div>
        </>
    )
}