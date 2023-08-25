import React from 'react';
import { useSwiper } from 'swiper/react'

function SwiperAnimeButton() {
    const swiper = useSwiper()
    return (  
        <div className="flex items-center gap-5">
            <button onClick={() => swiper.slidePrev()} className="flex justify-center items-center md:w-[80px] w-10 md:h-[80px] h-10 rounded-full border-[2px] border-white hover:backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 12L5 12" stroke="#F8F7F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 19L5 12L12 5" stroke="#F8F7F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button onClick={() => swiper.slideNext()} className="flex justify-center items-center md:w-[80px] w-10 md:h-[80px] h-10 rounded-full border-[2px] border-white hover:backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="#F8F7F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="#F8F7F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    );
}

export default SwiperAnimeButton;