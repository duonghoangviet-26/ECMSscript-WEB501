import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



// 1xl = 12px

function App() {
  const tours = [
    {
      id: 1,
      title: 'TOUR CARAVAN THÚ VỊ TRÊN KHẮP NẺO ĐƯỜNG',
      img: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp'
    }, {
      id: 2,
      title: 'TOUR Châu',
      img: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp'
    }, {
      id: 3,
      title: 'TOUR  THÚ VỊ TRÊN KHẮP NẺO ĐƯỜNG',
      img: 'https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp'
    }
  ]


  return (
    <>
      <h1 className='text-5xl font-bold text-center'> Quản lý Tour Du Lịch</h1>
      <p className='text-center my-6'>Hãy tận hưởng trải nghiệm du lịch chuyên nghiệp, mang lại cho bạn những khoảnh khắc tuyệt vời và nâng tầm cuộc sống. Chúng tôi cam kết mang đến những chuyến đi đáng nhớ, giúp bạn khám phá thế giới theo cách hoàn hảo nhất.</p>
      <div className='flex gap-3 my-4'>
        {tours.map((tour, index) => {
          return (
            <div key={index}>
              <img src={tour.img} alt={tour.title} width={500} />
              <p className='font-semibold my-2'>{tour.title}</p>
            </div>
          )
        })}
        {/* <div>
          <img src="https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp" alt="" />
          <p>TOUR CARAVAN THÚ VỊ TRÊN KHẮP NẺO ĐƯỜNG
          </p>
        </div>
        <div>
          <img src="https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp" alt="" />
          <p>TOUR Châu ÂU
          </p>
        </div>
        <div>
          <img src="https://s3-cmc.travel.com.vn/vtv-image/Images/Advertisings/bn_250630_caravan-2.webp" alt="" />
          <p>TOUR THÚ VỊ TRÊN KHẮP NẺO ĐƯỜNG
          </p>
        </div> */}
      </div>
    </>
  );
}

export default App;

