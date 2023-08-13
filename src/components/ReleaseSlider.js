import React from 'react';
import CardRelease from './CardRelease';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperNavButtons from './SwiperNavButtons';
import 'swiper/css';
import 'swiper/css/navigation';
import Spider from '../img/poster/spider.jpg';
import Oppenheimer from '../img/poster/oppenheimer.jpg';


function Release() {
    return (  
        <section className='pl-[calc((100%-1240px)/2)] pt-[100px]'>
            <h2 className='text-3xl font-bold'>Премьеры</h2>
            <div className='pt-10'>
                <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={5}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <CardRelease name="Spider-man" year="2023" genre="Фантастика" rate="8.4" img={Spider}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardRelease name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardRelease name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardRelease name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardRelease name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardRelease name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer}/>
                    </SwiperSlide>
                    <div className="flex justify-between items-center pr-[calc((100%-1240px))] mt-12">
                        <div className="h-[1px] w-full bg-[#323234] mr-10"></div>
                        <SwiperNavButtons />
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default Release;