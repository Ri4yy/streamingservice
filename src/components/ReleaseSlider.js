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
        <section className='xl:pl-[calc((100%-1240px)/2)] min-[1240px]:pl-[calc((100%-1160px)/2)] md:pl-10 px-5 md:px-0 pt-[100px]'>
            <h2 className='text-3xl font-bold'>Премьеры</h2>
            <div className='pt-10'>
                <Swiper
                breakpoints={{
                    // when window width is >= 640px
                    320: {
                        slidesPerView: 1,
                    },
                    580: {
                        slidesPerView: 2,
                    },
                    900: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1480: {
                        slidesPerView: 5,
                    }
                }}
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
                        <div className="h-[1px] w-full bg-[#323234] md:mr-10 mr-5"></div>
                        <SwiperNavButtons />
                    </div>
                </Swiper>
            </div>
        </section>
    );
}

export default Release;