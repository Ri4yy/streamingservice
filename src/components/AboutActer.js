import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CardMovie from './CardMovie';
import SwiperSerialsButtons from './SwiperSerialsButtons';
import 'swiper/css';
import 'swiper/css/navigation';
import Spider from '../img/poster/sp16-9.jpeg';
import Oppenheimer from '../img/poster/open16-9.jpg';
import ImgMain from '../img/poster/spider.jpg'

function AboutActer() {
    return (  
        <main className='-mt-20'>
            <section className='pb-20 w-full min-[1100px]:h-fit flex relative after:absolute after:top-0 after:left-0 after:backdrop-blur-md after:z-20 after:w-full after:h-full'>
                <div className="container flex max-[1100px]:flex-col gap-x-20 z-50 min-[1100px]:mt-[200px] mt-[120px]">
                    <div className="min-[1100px]:w-[35%] h-full xs:w-1/2 relative mx-auto">
                        <img src={ImgMain} className='rounded-xl w-full object-cover' />
                    </div>
                    <div className="max-[1100px]:mt-10 w-[65%] max-[1100px]:w-full">
                        <div className="flex md:flex-col flex-row items-center md:items-start gap-x-2">
                            <div className="rounded-lg backdrop-blur-md h-fit bg-black/20 w-fit px-2.5 py-1 text-[#BFBFBF] text-sm">Актер</div>
                        </div>
                        <h1 className='md:text-[50px] xs:text-4xl text-3xl font-bold w-fit my-4 leading-[1.1]'>Mitsuha Miyamizu</h1>
                        <p className='text-[26px] font-medium mt-12'>Об актере</p>
                        <ul className='flex flex-col'>
                            <li className='flex xs:flex-row flex-col gap-y-1 py-2.5'>
                                <span className='text-[#8C8C8C] xs:w-[30%]'>Рост</span>
                                <span className='xs:w-[70%] xs:text-base text-sm'>163 см</span>
                            </li>
                            <li className='flex xs:flex-row flex-col gap-y-1 py-2.5'>
                                <span className='text-[#8C8C8C] xs:w-[30%]'>Дата рождения</span>
                                <span className='xs:w-[70%] xs:text-base text-sm'>15 апреля 1985г</span>
                            </li>
                            <li className='flex xs:flex-row flex-col gap-y-1 py-2.5'>
                                <span className='text-[#8C8C8C] xs:w-[30%]'>Жанры</span>
                                <span className='xs:w-[70%] xs:text-base text-sm'>Драма Комедия Ужасы</span>
                            </li>
                        </ul>
                        <Swiper 
                        breakpoints={{
                            // when window width is >= 640px
                            320: {
                                slidesPerView: 1,
                            },
                            580: {
                                slidesPerView: 2,
                            },
                        }}
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={2}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className='flex flex-col mt-20'
                        >
                            <div className="flex justify-between items-center order-1 mb-12 pt-2">
                                <h2 className='md:text-[32px] text-2xl leading-[1.2] font-bold whitespace-nowrap'>Лучшие фильмы</h2>
                                <div className="h-[1px] w-full bg-[#323234] mx-10"></div>
                                <SwiperSerialsButtons />
                            </div>
                            <SwiperSlide>
                                <CardMovie name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer} height={{height: '200px'}}/>  
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardMovie name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer} height={{height: '200px'}}/>  
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardMovie name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer} height={{height: '200px'}}/>  
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardMovie name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer} height={{height: '200px'}}/>  
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardMovie name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer} height={{height: '200px'}}/>  
                            </SwiperSlide>
                            <SwiperSlide>
                                <CardMovie name="Опппенгеймер" year="2023" genre="История" rate="8.3" img={Oppenheimer} height={{height: '200px'}}/>  
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AboutActer;