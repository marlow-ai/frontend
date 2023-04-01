export default function LineMaker({ nbLines }: { nbLines: number }) {
    return (
        <div className="bg-slate-100 w-12 text-right flex flex-col p-2 rounded-l-lg">
            {[...Array(nbLines)].map((_, idx) => <span key={idx} className="text-slate-400">{idx + 1}</span>)}
        </div>
    )
}