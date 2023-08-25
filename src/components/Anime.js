import React, { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '../css/animeSwiper.css'
import 'swiper/css';
import ImgSwiper1 from '../img/animeSwiper1.png'
import ImgSwiper2 from '../img/animeSwiper2.png'
import SwiperAnimeButton from './SwiperAnimeButton';
import { BsSearch } from "react-icons/bs"
import Checkbox from './elements/Checkbox'
import CardAnime from './CardAnime';
import Chainsaw from '../img/poster/chainsaw.jpg'



function Anime() {
    let arrGenre = [
        {id: 1, name: 'Вампиры', check: true},
        {id: 2, name: 'Безумное', check: false},
        {id: 3, name: 'Военное', check: false},
        {id: 4, name: 'Детективы', check: false},
        {id: 5, name: 'Демоны', check: false},
        {id: 6, name: 'Комедия', check: false},
        {id: 7, name: 'Драма', check: false},
        {id: 8, name: 'Приключения', check: false},
        {id: 9, name: 'Ужасы', check: false},
        {id: 10, name: 'Фантастика', check: false},
        {id: 11, name: 'Фэнтези', check: false},
        {id: 12, name: 'Школа', check: false}
    ]
    const [isActive, setActive] = useState(false)

    function toggleClass() {
        setActive(!isActive)
    }
    return (  
        <main className='-mt-20'>
            <section className='relative bg-[url(../img/chainsaw.png)] bg-no-repeat bg-cover bg-[50%_0] w-full lg:h-screen h-fit pt-40 lg:py-0 md:min-h-[800px] flex flex-col justify-center lg:justify-end'>
                <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 xl:w-[1200px] lg:w-[1000px] md:w-[700px] w-[300px] h-[220px] rounded-[1200px] outline outline-[200px] outline-black outline-offset-[200px] blur-[150px]"></div>
                <div className="min-[1240px]:pl-[calc((100%-1240px)/2)] min-[768px]:pl-10 min-[320px]:pl-5 flex lg:flex-row flex-col gap-20 z-20 lg:items-end">
                    <div className="flex flex-col min-[1440px]:w-[40%] lg:w-[50%] min-[1680px]:pb-[200px] lg:pb-[100px] min-[768px]:pr-10 min-[320px]:pr-5">
                        <p className='text-[#CAE962] text-2xl font-bold'>#1 Most Popular</p>
                        <h1 className='xs:text-[64px] text-[48px] font-bold leading-[1.1]'>CHAINSAW MAN</h1>
                        <p className='text-lg font-medium text-[#F8F7F9]/100 p-3 rounded-md bg-white/20 backdrop-blur-sm leading-[1.25]'>У Дэнджи есть простая мечта — жить счастливой и мирной жизнью, проводя время с девушкой, которая ему нравится. 
                            Однако это далеко от реальности, поскольку якудза вынуждает Денджи убивать дьяволов, чтобы расплатиться со своими огромными долгами. 
                            Используя своего ручного дьявола Почиту в качестве...
                        </p>
                        <div className="flex items-center mt-3 z-20">
                            <svg width="43" height="22" viewBox="0 0 43 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M43 1.89083C42.8833 0.922265 42.1751 0.150295 41.2733 0C37.3203 0 5.69694 0 1.74393 0C0.756052 0.164717 0 1.07484 0 2.17169C0 3.935 0 18.0384 0 19.801C0 21.0155 0.925061 22 2.06699 22C5.95494 22 37.0623 22 40.9502 22C42.0017 22 42.8699 21.1643 43 20.0826C43 16.4444 43 3.70955 43 1.89083Z" fill="#F6C700"></path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2105 15.7931C34.4184 15.7931 34.6936 15.7074 34.7565 15.5381C34.7983 15.425 34.8297 15.0174 34.8514 14.3152V10.8987C34.8514 10.3347 34.8155 9.96654 34.7445 9.79423C34.6727 9.62193 34.3938 9.53615 34.1859 9.53615C33.9825 9.53615 33.8508 9.61206 33.791 9.76159C33.7304 9.91265 33.7005 10.2914 33.7005 10.8987V14.4223C33.7005 15.0083 33.7342 15.3825 33.803 15.5464C33.8718 15.7112 34.0071 15.7931 34.2105 15.7931ZM33.4852 17.5504H30.4131V4.21738H33.7005V8.55468C33.9727 8.23511 34.2764 7.99676 34.6106 7.83964C34.9457 7.68251 35.4482 7.60281 35.8408 7.60281C36.2925 7.60281 36.6844 7.67416 37.0164 7.81687C37.3484 7.95957 37.6019 8.1592 37.7762 8.41653C37.9504 8.67385 38.0551 8.9251 38.0903 9.1718C38.1254 9.4185 38.1434 9.94377 38.1434 10.7484V14.4891C38.1434 15.2891 38.0903 15.8842 37.9841 16.2759C37.8779 16.6668 37.6281 17.0069 37.2363 17.2938C36.8436 17.5815 36.3785 17.725 35.8393 17.725C35.4519 17.725 34.9516 17.6399 34.6174 17.4691C34.2816 17.2991 33.9757 17.0426 33.6975 16.701C33.6953 16.7098 33.6918 16.724 33.6869 16.7436C33.6602 16.8508 33.5933 17.1197 33.4852 17.5504ZM14.911 9.62588L15.0461 10.5624L15.8366 4.3335H20.2944V17.6665H17.315L17.3038 8.667L16.111 17.6665H13.982L12.7241 8.86284L12.7137 17.6665H9.72461V4.3335H14.1487C14.2789 5.14114 14.415 6.0877 14.5578 7.17544C14.5846 7.36349 14.7025 8.1806 14.911 9.62588ZM8.59885 4.42081H5.18652V17.7538H8.59885V4.42081ZM25.9279 7.10712C25.9653 7.27715 25.9847 7.66276 25.9847 8.26546V13.4347C25.9847 14.322 25.9279 14.8655 25.815 15.0659C25.7013 15.2663 25.3992 15.3658 24.9093 15.3658V6.61373C25.281 6.61373 25.5345 6.65396 25.6691 6.7329C25.8037 6.8126 25.8905 6.93709 25.9279 7.10712ZM27.4691 17.5306C27.8752 17.4403 28.2162 17.2809 28.4929 17.0539C28.7689 16.8262 28.9626 16.5112 29.0732 16.1081C29.1847 15.7058 29.2505 14.9065 29.2505 13.711V9.02908C29.2505 7.76751 29.2019 6.92191 29.1263 6.49228C29.0501 6.06189 28.8609 5.67097 28.558 5.32028C28.2544 4.96959 27.8117 4.71758 27.2298 4.56425C26.6473 4.41092 25.6975 4.3335 24.0456 4.3335H21.5V17.6665H25.634C26.5867 17.6361 27.1984 17.5913 27.4691 17.5306Z" fill="black"></path>
                            </svg>
                            <span className='pl-2'>8.4</span>
                            <span className='flex items-center relative before:w-1 before:h-1 before:bg-white/30 before:rounded-full before:absolute before:-left-1/2 ml-8'>2016</span>
                        </div>
                        <div className="flex xs:flex-row flex-col xs:items-center gap-3 mt-12">
                            <button className='bg-[#CAE962] hover:bg-[#b6d552] active:bg-[#c8de7d] transition-all duration-300 rounded-2xl py-4 px-8 text-[#F8F7F9] hover:text-[#dedede] active:text-[#f6f5f5] text-2xl font-bold [text-shadow:_0_4px_2px_rgb(0,0,0,0.50)] active:[text-shadow:_0_3px_2px_rgb(0,0,0,0.50)] w-fit'>
                                Смотреть
                            </button>
                            <a href="#" className='text-lg hover:text-[#c8de7d] transition-all duration-300'>Подробнее</a>
                        </div>
                    </div>
                    <div className="min-[1440px]:w-[60%] lg:w-[50%] mb-10">
                    <Swiper 
                        breakpoints={{
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
                                slidesPerView: 1.5,
                            },
                        }}
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1.5}
                        >
                            <SwiperSlide>
                                <img src={ImgSwiper1} alt="" className='w-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ImgSwiper2} alt="" className='w-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ImgSwiper2} alt="" className='w-full' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ImgSwiper2} alt="" className='w-full' />
                            </SwiperSlide>
                            <div className="flex items-center mt-10">
                                <SwiperAnimeButton />
                                <div className="w-full h-[1px] bg-[#F8F7F9]/70 mx-10"></div>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className='container lg:py-[120px] md:py-14 py-8'>
                <form action="#" mathod="POST" className='w-full'>
                    <div className="group relative">
                        <input className='focus:bg-black/50 w-full py-4 px-7 pr-14 rounded-lg backdrop-blur-md bg-[#1E1E20] outline-none' name='name' type="text" placeholder='Поиск...' autocomplete='off' />
                        <button type='submit'><BsSearch className='absolute top-1/2 -translate-y-1/2 right-6 h-5 w-5 fill-white hover:fill-[#CAE962]' /></button>
                    </div>
                </form>
                <div className="flex md:flex-row flex-col gap-5 justify-between md:items-center mt-4 ">
                    <div className="flex xs:flex-row flex-col xs:items-center gap-5">
                        Сортировать по: 
                        <select className='px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm'>
                            <option>Дате добавления</option>
                            <option>Дате выхода</option>
                            <option>Рейтингу</option>
                            <option>Названию</option>
                        </select>
                    </div>
                    <div className="relative w-fit">
                        <button 
                        className='px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm'
                        onClick={() => {
                            toggleClass()
                        }}
                        >Выберите жанр</button>
                        <div className={`absolute z-20 top-14 left-0 p-3 rounded-md bg-black min-w-[200px] ${isActive ? 'block' : 'hidden'}`}>
                            <ul className='flex flex-col gap-1 text-white max-h-[204px]  overflow-y-scroll'>
                                {arrGenre.map(genre => 
                                    <li key={genre.id} className='hover:bg-[#CAE962]/70 transition-all duration-300 px-2 py-1 rounded-md'>
                                        <label className='flex gap-3 items-center cursor-pointer'>
                                            <Checkbox  
                                            />
                                            <p>{genre.name}</p>
                                        </label>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 xs:grid-cols-2 mt-20 gap-x-5 gap-y-9">
                    <CardAnime name="Человек-бензопила" year="2023" genre="Фантастика" rate="8.4" img={Chainsaw}/>
                    <CardAnime name="Человек-бензопила" year="2023" genre="Фантастика" rate="8.4" img={Chainsaw}/>
                    <CardAnime name="Человек-бензопила" year="2023" genre="Фантастика" rate="8.4" img={Chainsaw}/>
                    <CardAnime name="Человек-бензопила" year="2023" genre="Фантастика" rate="8.4" img={Chainsaw}/>
                    <CardAnime name="Человек-бензопила" year="2023" genre="Фантастика" rate="8.4" img={Chainsaw}/>
                </div>
            </section>
        </main>
    );
}

export default Anime;