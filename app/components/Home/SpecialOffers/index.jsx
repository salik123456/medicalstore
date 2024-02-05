'use client'
import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NextArrow from '../../Global/NextArrow';
import PrevArrow from '../../Global/Header/PrevArrow';

const CommonSec = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      };
  return (
    <div className='common-sec w-full site-wrapper flex justify-between'>
      <div className='common-left rounded-[4px] min-h-[65vh] w-[23%] flex bg-cover bg-center  flex-col text-center items-center justify-start' style={{backgroundImage: "url('/Home/CommonSec/commonfirst.png')"}}>
<div className='flex mt-10 flex-col'><h4 className='text-white font-bold text-[18px] w-[75%] mx-auto '>Special offers/
Discounts</h4>
</div>
<button className='bg-white text-[#131313] mt-6 px-[24px] py-[10px]  font-bold rounded-[4px] border text-[14px] border-[#FDF4EC]'>View All</button>
      </div>
      <div className='common-right w-[70%]'>
      <Slider {...settings}>
      <div className="right-box items-center mt-10 flex flex-col min-h-[65vh] bg-cover bg-bottom"  style={{backgroundImage: "url('/Home/CommonSec/itemone.png')"}} >
        <h3 className="text-[#131313] font-bold text-[18px]">Digestive Support</h3>
        <p className="text-[#EDAA04] text-[12px]">From 10 AED* onwards</p>
      </div>
      <div className="right-box items-center mt-10 flex flex-col min-h-[65vh] bg-cover bg-bottom"  style={{backgroundImage: "url('/Home/CommonSec/itemone.png')"}} >
        <h3 className="text-[#131313] font-bold text-[18px]">Digestive Support</h3>
        <p className="text-[#EDAA04] text-[12px]">From 10 AED* onwards</p>
      </div>
      <div className="right-box items-center mt-10 flex flex-col min-h-[65vh] bg-cover bg-bottom"  style={{backgroundImage: "url('/Home/CommonSec/itemone.png')"}} >
        <h3 className="text-[#131313] font-bold text-[18px]">Digestive Support</h3>
        <p className="text-[#EDAA04] text-[12px]">From 10 AED* onwards</p>
      </div>
      <div className="right-box items-center mt-10 flex flex-col min-h-[65vh] bg-cover bg-bottom"  style={{backgroundImage: "url('/Home/CommonSec/itemone.png')"}} >
        <h3 className="text-[#131313] font-bold text-[18px]">Digestive Support</h3>
        <p className="text-[#EDAA04] text-[12px]">From 10 AED* onwards</p>
      </div>
      <div className="right-box items-center mt-10 flex flex-col min-h-[65vh] bg-cover bg-bottom"  style={{backgroundImage: "url('/Home/CommonSec/itemone.png')"}} >
        <h3 className="text-[#131313] font-bold text-[18px]">Digestive Support</h3>
        <p className="text-[#EDAA04] text-[12px]">From 10 AED* onwards</p>
      </div>
      {/* Add more carousel items here */}
    </Slider>
      </div>
    </div>
  )
}

export default CommonSec

