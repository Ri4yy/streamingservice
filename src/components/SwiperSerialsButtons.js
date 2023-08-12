import React from 'react';
import { useSwiper } from 'swiper/react';

function SwiperSerialsButtons() {
    const swiper = useSwiper();
    return (  
        <div className="flex gap-x-3">
            <button className='group relative overflow-hidden hover:scale-110 transition-all duration-700 w-11 h-11 rounded-md bg-white flex justify-center items-center' onClick={() => swiper.slidePrev()}>
                <div className='group-hover:w-[200%] group-hover:h-[200%] group-hover:opacity-100 group-hover:-top-1/2 group-hover:-left-1/2  w-0 h-0 opacity-0 rounded-full bg-[#ff1414] absolute transition-all duration-700 ease-out top-1/2 left-1/2'></div>
                <svg width="24" height="24"  className="stroke-[#252527] group-hover:stroke-white z-50"viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
            <button className='group relative overflow-hidden hover:scale-110 transition-all duration-700 w-11 h-11 rounded-md bg-white flex justify-center items-center' onClick={() => swiper.slideNext()}>
            <div className='group-hover:w-[200%] group-hover:h-[200%] group-hover:opacity-100 group-hover:-top-1/2 group-hover:-left-1/2  w-0 h-0 opacity-0 rounded-full bg-[#ff1414] absolute transition-all duration-700 ease-out top-1/2 left-1/2'></div>
                <svg width="24" height="24" className="stroke-[#252527] group-hover:stroke-white z-50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </button>
        </div>
    );
}

export default SwiperSerialsButtons;