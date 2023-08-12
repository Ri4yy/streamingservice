import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import CardSerials from './CardSerials';
import SwiperSerialsButtons from './SwiperSerialsButtons';
import 'swiper/css';
import 'swiper/css/navigation';
import Spider from '../img/poster/spider.jpg'
import Oppenheimer from '../img/poster/oppenheimer.jpg'

function SerialsSlider() {
    return (  
        <section className='container py-[100px]'>
            <div className='pt-8'>
            
                <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={4}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='flex flex-col'
                >
                    <div className="flex justify-between items-center order-1 mb-12 pt-2">
                        <h2 className='text-3xl font-bold whitespace-nowrap'>Лучшие сериалы</h2>
                        <div className="h-[1px] w-full bg-[#323234] mx-10"></div>
                        <SwiperSerialsButtons />
                    </div>
                    <SwiperSlide>
                        <CardSerials name="Spider-man" year="2023" genre="Фантастика" rate="8.4" img={Spider}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardSerials name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardSerials name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardSerials name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardSerials name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardSerials name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer}/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default SerialsSlider;