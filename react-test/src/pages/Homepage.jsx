
import Header from '../component/Header'
import Footer from '../component/Footer'
import TourCard from '../component/TourCard'
import Heading from '../component/Heading'

// 1xl = 12px

function Homepage() {
    const tours = [
        {
            id: 1,
            title: 'Tour SAPA 3 Ngày 2 Đêm - Đi buổi sáng ',
            image: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd_240926041957_028346_FANSIPAN.jpg',
            price: '3.800.000Đ'
        }, {
            id: 2,
            title: 'Ninh Bình 3 Ngày 2 Đêm',
            image: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd_230810113927_226748_TRANG%20AN%20(2).jpg',
            price: '1.350.000Đ'
        }, {
            id: 3,
            title: 'Hạ Long 3 Ngày 2 Đêm',
            image: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Tour/tfd__0_12103_cungcaheo.webp',
            price: '2.250.000Đ'
        }
    ]


    return (
        <>
            <Header />
            <div class=" from-blue-100 via-blue-50 to-white py-12 px-4 md:px-20">
                <h1 class="text-4xl md:text-5xl font-bold text-center text-blue-800 mb-6">
                    ✈️ TOUR MANAGEMENT SYSTEM
                </h1>
                <p class="text-center text-gray-700 text-base md:text-lg max-w-3xl mx-auto ">
                    Hãy tận hưởng trải nghiệm du lịch chuyên nghiệp, mang lại cho bạn những khoảnh khắc tuyệt vời và nâng tầm cuộc sống.
                    Chúng tôi cam kết mang đến những chuyến đi đáng nhớ, giúp bạn khám phá thế giới theo cách hoàn hảo nhất.
                </p>
            </div>
            <Heading lable='CÁC TOUR NỔI BẬT' />
            <div className='flex gap-3 my-4 justify-center'>
                {tours.map((tour) =>
                    <TourCard key={tour.id} title={tour.title} image={tour.image} price={tour.price} />
                )}
            </div>
            <Footer />
        </>
    );
}

export default Homepage;

