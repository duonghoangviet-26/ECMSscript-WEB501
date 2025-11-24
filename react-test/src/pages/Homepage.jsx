import { useEffect, useState } from "react"
import Header from '../component/Header'
import Footer from '../component/Footer'
import TourCard from '../component/TourCard'
import Heading from '../component/Heading'
import Banner from '../component/Banner'
// import { Button } from "../component/Button"
import axios from "axios"

// 1xl = 12px

function Homepage() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        const getTours = async () => {
            try {
                const { data } = await axios.get('http://localhost:3001/tours');
                setTours(data);
            } catch (error) {
                console.log(error);
            }
        }
        getTours();
    }, [])  // chạy 1 lần duy nhất khi truyền



    return (
        <>
            <Header />
            <Banner
                image="https://travel.com.vn/_next/static/media/video_bg_vietravel.ca0484d0.jpeg"
                height="h-[400px]"
            />
            <div className=" from-blue-100 via-blue-50 to-white py-12 px-4 md:px-20">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-6">
                    ✈️ TOUR MANAGEMENT SYSTEM
                </h1>
                <p className="text-center text-gray-700 text-base md:text-lg max-w-3xl mx-auto ">
                    Hãy tận hưởng trải nghiệm du lịch chuyên nghiệp, mang lại cho bạn những khoảnh khắc tuyệt vời và nâng tầm cuộc sống.
                    Chúng tôi cam kết mang đến những chuyến đi đáng nhớ, giúp bạn khám phá thế giới theo cách hoàn hảo nhất.
                </p>
            </div>
            <Heading lable='CÁC TOUR NỔI BẬT' />
            <div className='flex gap-3 my-4 justify-center'>
                {tours.map((tour) =>
                    <TourCard key={tour.id} title={tour.name} image={tour.image} price={tour.price} />
                )}
            </div>
            <Footer />
        </>
    );
}

export default Homepage;

