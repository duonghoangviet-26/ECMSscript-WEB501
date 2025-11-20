

export function Button(props) {
    return (
        <div className="flex justify-center w-full">
            <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-blue-400">{props.label}</button>
        </div>
    )
}
