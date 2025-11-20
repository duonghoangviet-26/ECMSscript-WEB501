import { Button } from "./Button";

function TourCard(props) {
    // Tham số props
    // Tiêu để của tour
    // hình ảnh

    // const {title, image} = props; Destructuring
    return (
        <div className="flex justify-center my-8">
            <div className="max-w-sm rounded-xl border border-gray-200 ">
                <div className="w-full h-64 rounded-lg overflow-hidden">
                    <img
                        src={props.image}
                        alt={props.title}
                    />
                </div>

                <div className="text-center mt-4">
                    <p className="font-semibold text-lg text-gray-800 ">{props.title}</p>
                    <h3 className="text-red-600 font-bold text-xl mt-2">{props.price}</h3>
                </div>

                <div className="flex justify-center mt-4 mb-4 font-medium">
                    <Button
                        className="bg-blue-600 hover:bg-blue-70"
                        label="Đặt tour"
                    />
                </div>

            </div>
        </div>

    )
}

export default TourCard;

// rcfc : react function component