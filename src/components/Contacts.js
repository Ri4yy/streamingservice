import React from 'react'
import CardContact from './CardContact'
import { FaUserAlt } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

function Contacts() {
    const cards = [
        {id: 1, title: 'Местоположение', address: 'Адрес', href: '#', path1: 'M26.25 12.5C26.25 21.25 15 28.75 15 28.75C15 28.75 3.75 21.25 3.75 12.5C3.75 9.51631 4.93526 6.65483 7.04505 4.54505C9.15483 2.43526 12.0163 1.25 15 1.25C17.9837 1.25 20.8452 2.43526 22.955 4.54505C25.0647 6.65483 26.25 9.51631 26.25 12.5ZM15 16.25C17.0711 16.25 18.75 14.5711 18.75 12.5C18.75 10.4289 17.0711 8.75 15 8.75C12.9289 8.75 11.25 10.4289 11.25 12.5C11.25 14.5711 12.9289 16.25 15 16.25Z', path2: 'M26.25 12.5C26.25 21.25 15 28.75 15 28.75C15 28.75 3.75 21.25 3.75 12.5C3.75 9.51631 4.93526 6.65483 7.04505 4.54505C9.15483 2.43526 12.0163 1.25 15 1.25C17.9837 1.25 20.8452 2.43526 22.955 4.54505C25.0647 6.65483 26.25 9.51631 26.25 12.5ZM15 16.25C17.0711 16.25 18.75 14.5711 18.75 12.5C18.75 10.4289 17.0711 8.75 15 8.75C12.9289 8.75 11.25 10.4289 11.25 12.5C11.25 14.5711 12.9289 16.25 15 16.25Z'},
        {id: 2, title: 'Телефон', address: '+7 (999) 245 24-35', href: 'tel:89348520035', path1: 'M18.8125 6.25C20.0335 6.48821 21.1555 7.08532 22.0351 7.96492C22.9147 8.84452 23.5118 9.96658 23.75 11.1875M18.8125 1.25C21.3491 1.5318 23.7145 2.66772 25.5203 4.47126C27.3262 6.2748 28.4651 8.63876 28.75 11.175M27.5 21.15V24.9C27.5015 25.2481 27.4301 25.5927 27.2907 25.9117C27.1512 26.2307 26.9467 26.517 26.6901 26.7523C26.4336 26.9877 26.1308 27.1669 25.801 27.2784C25.4712 27.3899 25.1218 27.4313 24.775 27.4C20.9286 26.9821 17.2338 25.6677 13.9875 23.5625C10.9673 21.6433 8.40671 19.0827 6.48754 16.0625C4.37501 12.8015 3.06034 9.08874 2.65004 5.225C2.6188 4.87933 2.65988 4.53095 2.77066 4.20203C2.88145 3.87311 3.0595 3.57086 3.2935 3.31453C3.52749 3.05819 3.81229 2.85339 4.12978 2.71315C4.44726 2.57292 4.79046 2.50033 5.13754 2.5H8.88754C9.49417 2.49403 10.0823 2.70885 10.5422 3.10442C11.0022 3.49998 11.3026 4.04931 11.3875 4.65C11.5458 5.85008 11.8394 7.02841 12.2625 8.1625C12.4307 8.60991 12.4671 9.09614 12.3674 9.5636C12.2677 10.0311 12.0361 10.4601 11.7 10.8L10.1125 12.3875C11.892 15.5169 14.4831 18.1081 17.6125 19.8875L19.2 18.3C19.5399 17.9639 19.969 17.7323 20.4364 17.6326C20.9039 17.5329 21.3901 17.5693 21.8375 17.7375C22.9716 18.1607 24.15 18.4542 25.35 18.6125C25.9572 18.6982 26.5118 19.004 26.9082 19.4719C27.3046 19.9397 27.5152 20.537 27.5 21.15Z', path2: 'M27.5003 24.9V21.15C27.5155 20.537 27.3049 19.9397 26.9084 19.4719C26.512 19.004 25.9575 18.6982 25.3503 18.6125C24.1502 18.4542 22.9719 18.1607 21.8378 17.7375C21.3904 17.5693 20.9041 17.5329 20.4367 17.6326C19.9692 17.7323 19.5401 17.9639 19.2003 18.3L17.6128 19.8875C14.4834 18.1081 11.8922 15.5169 10.1128 12.3875L11.7003 10.8C12.0364 10.4601 12.268 10.0311 12.3677 9.5636C12.4674 9.09614 12.431 8.6099 12.2628 8.1625C11.8396 7.02841 11.5461 5.85008 11.3878 4.65C11.3029 4.04931 11.0024 3.49998 10.5425 3.10441C10.0825 2.70885 9.49442 2.49403 8.88778 2.5H5.13778C4.79071 2.50033 4.4475 2.57292 4.13002 2.71315C3.81254 2.85339 3.52773 3.05819 3.29374 3.31453C3.05975 3.57086 2.88169 3.87311 2.77091 4.20203C2.66013 4.53095 2.61905 4.87933 2.65028 5.225C3.06059 9.08874 4.37526 12.8015 6.48778 16.0625C8.40695 19.0827 10.9676 21.6433 13.9878 23.5625C17.234 25.6677 20.9288 26.982 24.7753 27.4C25.122 27.4313 25.4714 27.3899 25.8012 27.2784C26.131 27.1669 26.4339 26.9877 26.6904 26.7523C26.9469 26.517 27.1515 26.2307 27.2909 25.9117C27.4304 25.5927 27.5017 25.2481 27.5003 24.9Z'},
        {id: 3, title: 'Почта', address: 'example@mail.ru', href: 'mailto:example@mail.ru', path1: 'M27.5 7.5C27.5 6.125 26.375 5 25 5H5C3.625 5 2.5 6.125 2.5 7.5M27.5 7.5V22.5C27.5 23.875 26.375 25 25 25H5C3.625 25 2.5 23.875 2.5 22.5V7.5M27.5 7.5L15 16.25L2.5 7.5', path2: 'M3.88322 6.94244L15 14.7242L26.1168 6.94244C25.9101 6.53365 25.485 6.25 25 6.25H5C4.51505 6.25 4.08995 6.53365 3.88322 6.94244ZM1.25 7.5C1.25 5.43464 2.93464 3.75 5 3.75H25C27.0654 3.75 28.75 5.43464 28.75 7.5V22.5C28.75 24.5654 27.0654 26.25 25 26.25H5C2.93464 26.25 1.25 24.5654 1.25 22.5V7.5Z'},
    ]

    return (  
        <main className='-mt-20'>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae2642a6ec1240c173dbd8a38a5551686635a4b6a458c2e09bf26a2a47d4ca715&amp;source=constructor" style={{filter: 'brightness(40%)'}} width="100%" height="600" frameborder="0"></iframe>
            <div className="container grid grid-cols-3 gap-8 mt-[120px]">
                {cards.map((card) => 
                    <CardContact key={card.id} title={card.title} href={card.href} address={card.address} path1={card.path1} path2={card.path2} />
                )}
            </div>
                <div className="xl:w-2/5 md:w-4/5 px-5 md:px-0 mx-auto lg:py-[120px] md:py-14 py-8">
                    <form method='POST' className=" flex flex-col">
                    <div className="rounded-lg backdrop-blur-md h-fit bg-[#1E1E20] w-fit px-2.5 py-1 text-[#BFBFBF] mx-auto text-sm mb-2">Контактная форма</div>
                        <h2 className='text-[28px] font-bold mb-10 text-center'>Оставляйте пожелания</h2>
                        <div className="flex min-[600px]:flex-row flex-col gap-x-7 gap-y-4 min-[600px]:mb-7 mb-4">
                            <div className="grow group relative">
                                <FaUserAlt className='absolute top-1/2 -translate-y-1/2 left-6 h-4 w-4 fill-white/50 group-focus:fill-white' />
                                <input type="text" name="name" className='py-2.5 pr-6 pl-14 w-full rounded-xl bg-[#1E1E20] border-[1px] border-[#323233] outline-none focus:border-white/70' placeholder='Ваше имя' autocomplete='off' />
                            </div>
                            <div className="grow group relative">
                                <MdEmail className='absolute top-1/2 -translate-y-1/2 left-6 h-4 w-4 fill-white/50 group-focus:fill-white' />
                                <input type="text" name="email" className='py-2.5 pr-6 pl-14 w-full rounded-xl bg-[#1E1E20] border-[1px] border-[#323233] outline-none focus:border-white/70' placeholder='Ваша почта' autocomplete='off' />
                            </div>
                        </div>
                        <div className="w-full relative">
                            <FaMessage className='absolute top-4 left-6 h-4 w-4 fill-white/50 group-focus:fill-white' />
                            <textarea name="review" className='w-full min-h-[160px] rounded-xl border-[1px] border-[#323233] pl-14 py-2.5 pr-6 bg-[#1E1E20] outline-none focus:border-white/70' placeholder='Ваше сообщение'></textarea>
                        </div>
                        <button type='submit' className="group hover:scale-[1.01] transition-all duration-500 overflow-hidden flex justify-center items-center relative bg-[#F63131] py-4 px-8 w-full rounded-lg cursor-pointer mt-10">
                            <span className='group-hover:text-black transition-all duration-500'>Отправить</span>
                            <div className="-z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-0 h-0 group-hover:w-[150%] rounded-full group-hover:h-[1000%] bg-white transition-all duration-700"></div>
                        </button>
                    </form>
                </div>
        </main>
        );
}

export default Contacts;