export default function Heading(props) {
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-700 tracking-wide">
                {props.lable}
            </h1>
            <div className="w-35 h-[3px] bg-blue-700 mt-1 mx-auto"></div>
        </div>

    )
}