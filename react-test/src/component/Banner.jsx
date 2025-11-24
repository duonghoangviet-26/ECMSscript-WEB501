export default function Banner({ image }) {
    return (
        <div className="w-full h-[400px]">
            <img src={image} className="w-full h-full object-cover" />
        </div>
    );
}
