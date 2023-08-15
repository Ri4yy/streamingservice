import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import CardUpComing from './CardUpComing';
import SwiperNavButtons from './SwiperNavButtons';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Spider from '../img/poster/sp16-9.jpeg';
import Oppenheimer from '../img/poster/open16-9.jpg';


function UpComingSlider() {
    return (  
        <div className="container pt-[100px]">
            <h2 className='md:text-[32px] text-2xl leading-[1.2] font-bold'>Предстоящие релизы</h2>
            <div className="pt-10">
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        320: {
                            slidesPerView: 1,
                        },
                        769: {
                            slidesPerView: 2,
                        },
                    }}
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={2}
                >
                    <SwiperSlide>
                        <CardUpComing name="Spider-man" 
                        desc="Майлз Моралес отправляется в приключение по мультивселенной вместе с Гвен Стейси и новой командой Людей-пауков, которым предстоит столкнуться с могущественным злодеем." 
                        rate="8.4" 
                        img={Spider} 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardUpComing name="Опппенгеймер" 
                        desc="История жизни американского физика Роберта Оппенгеймера, который стоял во главе первых разработок ядерного оружия." 
                        rate="8.3" 
                        img={Oppenheimer} 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardUpComing name="Опппенгеймер" 
                        desc="История жизни американского физика Роберта Оппенгеймера, который стоял во главе первых разработок ядерного оружия." 
                        rate="8.3" 
                        img={Oppenheimer} 
                        />
                    </SwiperSlide>
                    
                    <div className="flex justify-between items-center pr-[calc((100%-1240px))] mt-12">
                        <div className="h-[1px] w-full bg-[#323234] md:mr-10 mr-5"></div>
                        <SwiperNavButtons />
                    </div>
                </Swiper>
            </div>
        </div>
    );
}

export default UpComingSlider;