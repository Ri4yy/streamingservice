import React from 'react';


function Hero() {
    return (  
        <section className='bg-[url(../img/bg.png)] bg-no-repeat bg-cover bg-center w-full h-screen min-h-[800px] flex flex-col justify-center'>
            <div className="container">
                <div className="rounded-lg backdrop-blur-md bg-black/20 w-fit px-2.5 py-1 text-[#BFBFBF] text-sm">Драма</div>
                <div className="flex items-center gap-x-2 mt-2">
                    <div className="typeMovie rounded-md bg-[#2BB157] w-fit px-2.5 py-1 text-white text-sm uppercase">Аниме</div>
                    <div className="typeMovie rounded-md bg-[#4A90E2] w-fit px-2.5 py-1 text-white text-sm uppercase">4K</div>
                    <div className="text-white/60">6+</div>
                </div>
                <h1 className='text-[50px] font-bold w-fit'>Твоё имя</h1>
                <div className="flex items-center">
                    <svg width="43" height="22" viewBox="0 0 43 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M43 1.89083C42.8833 0.922265 42.1751 0.150295 41.2733 0C37.3203 0 5.69694 0 1.74393 0C0.756052 0.164717 0 1.07484 0 2.17169C0 3.935 0 18.0384 0 19.801C0 21.0155 0.925061 22 2.06699 22C5.95494 22 37.0623 22 40.9502 22C42.0017 22 42.8699 21.1643 43 20.0826C43 16.4444 43 3.70955 43 1.89083Z" fill="#F6C700"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2105 15.7931C34.4184 15.7931 34.6936 15.7074 34.7565 15.5381C34.7983 15.425 34.8297 15.0174 34.8514 14.3152V10.8987C34.8514 10.3347 34.8155 9.96654 34.7445 9.79423C34.6727 9.62193 34.3938 9.53615 34.1859 9.53615C33.9825 9.53615 33.8508 9.61206 33.791 9.76159C33.7304 9.91265 33.7005 10.2914 33.7005 10.8987V14.4223C33.7005 15.0083 33.7342 15.3825 33.803 15.5464C33.8718 15.7112 34.0071 15.7931 34.2105 15.7931ZM33.4852 17.5504H30.4131V4.21738H33.7005V8.55468C33.9727 8.23511 34.2764 7.99676 34.6106 7.83964C34.9457 7.68251 35.4482 7.60281 35.8408 7.60281C36.2925 7.60281 36.6844 7.67416 37.0164 7.81687C37.3484 7.95957 37.6019 8.1592 37.7762 8.41653C37.9504 8.67385 38.0551 8.9251 38.0903 9.1718C38.1254 9.4185 38.1434 9.94377 38.1434 10.7484V14.4891C38.1434 15.2891 38.0903 15.8842 37.9841 16.2759C37.8779 16.6668 37.6281 17.0069 37.2363 17.2938C36.8436 17.5815 36.3785 17.725 35.8393 17.725C35.4519 17.725 34.9516 17.6399 34.6174 17.4691C34.2816 17.2991 33.9757 17.0426 33.6975 16.701C33.6953 16.7098 33.6918 16.724 33.6869 16.7436C33.6602 16.8508 33.5933 17.1197 33.4852 17.5504ZM14.911 9.62588L15.0461 10.5624L15.8366 4.3335H20.2944V17.6665H17.315L17.3038 8.667L16.111 17.6665H13.982L12.7241 8.86284L12.7137 17.6665H9.72461V4.3335H14.1487C14.2789 5.14114 14.415 6.0877 14.5578 7.17544C14.5846 7.36349 14.7025 8.1806 14.911 9.62588ZM8.59885 4.42081H5.18652V17.7538H8.59885V4.42081ZM25.9279 7.10712C25.9653 7.27715 25.9847 7.66276 25.9847 8.26546V13.4347C25.9847 14.322 25.9279 14.8655 25.815 15.0659C25.7013 15.2663 25.3992 15.3658 24.9093 15.3658V6.61373C25.281 6.61373 25.5345 6.65396 25.6691 6.7329C25.8037 6.8126 25.8905 6.93709 25.9279 7.10712ZM27.4691 17.5306C27.8752 17.4403 28.2162 17.2809 28.4929 17.0539C28.7689 16.8262 28.9626 16.5112 29.0732 16.1081C29.1847 15.7058 29.2505 14.9065 29.2505 13.711V9.02908C29.2505 7.76751 29.2019 6.92191 29.1263 6.49228C29.0501 6.06189 28.8609 5.67097 28.558 5.32028C28.2544 4.96959 27.8117 4.71758 27.2298 4.56425C26.6473 4.41092 25.6975 4.3335 24.0456 4.3335H21.5V17.6665H25.634C26.5867 17.6361 27.1984 17.5913 27.4691 17.5306Z" fill="black"></path>
                    </svg>
                    <span className='pl-2'>8.4</span>
                    <span className='flex items-center relative before:w-1 before:h-1 before:bg-white/30 before:rounded-full before:absolute before:-left-1/2 ml-8 text-white/60'>2016</span>
                </div>
                <p className='text-lg text-[#BFBFBF] my-8 w-1/2'>
                Действие в аниме Твое имя будет происходить в двух городах. Главными героями является парочка обычных людей, которые даже не подозревают, что вскоре судьба свяжет их жизни очень крепко. Они никогда не были знакомы, она – любимая дочь, которая свое свободное время посвящает работе в храме. Он – надежный друг, успешен и трудолюбив на работе, имеет неплохие задатки талантливого художника. 

                </p>
                <ul className='flex gap-x-8 items-center'>
                    <li><a href="#" className='text-white hover:text-[#ff1414] transition-all duration-300'>Mitsuha Miyamizu</a></li>
                    <li><a href="#" className='text-white hover:text-[#ff1414] transition-all duration-300'>Taki Tachibana</a></li>
                </ul>
                <div className="flex items-center gap-4 mt-8">
                    <button className='flex gap-2 justify-center items-center group py-3 px-8 rounded-lg hover:scale-110 bg-[#ff1414] relative overflow-hidden transition-all duration-700'>
                        <div className='group-hover:w-[200%] group-hover:h-[500%] group-hover:opacity-100 group-hover:-top-[70px] group-hover:-left-1/2 group-hover:translate-1/2 w-0 h-0 opacity-0 rounded-full bg-white absolute transition-all duration-500 ease-out top-5 left-1/2'></div>
                        <span className='group-hover:text-black relative transition-all duration-700 ease-out leading-0'>Трейлер</span>
                        <svg width="24" height="24" className='fill-white group-hover:fill-black z-50' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 19L19 12L8 5V19Z"></path>
                        </svg>
                    </button>
                    <a href="#" className='hover:text-[#ff1414] transition-all duration-300'>Подробнее</a>
                </div>
            </div>
        </section>
    );
}

export default Hero;