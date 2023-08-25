import React, { Fragment } from 'react';
import { Tab } from '@headlessui/react'
import { Rating } from "@material-tailwind/react";
import { Link, useLocation } from 'react-router-dom'


function TabCustom({text}) {
    return(
        <Tab as={Fragment}>
        {({ selected }) => (
            <button className={
                selected ? 'outline-none flex items-center whitespace-nowrap py-2 pl-2 before:w-1.5 before:h-1.5 before:opacity-100 transition-all duration-300 before:transition-all before:duration-300 before:-translate-x-3 before:rounded-full before:bg-red-500' : 'outline-none flex items-center whitespace-nowrap py-2 hover:pl-2 hover:before:w-1.5 hover:before:h-1.5 hover:before:opacity-100 transition-all duration-300 before:transition-all before:duration-300 before:-translate-x-3 before:w-0 before:h-0 before:rounded-full before:bg-red-500 before:opacity-0'
            }
            >{text}</button>
        )}
        </Tab>
    )
}

function Profile() {
    const location = useLocation()
    const { activeIndex } = location.state

    return (  
        <main className='mt-[120px] mb-[100px]'>
            <Tab.Group defaultIndex={activeIndex}>
                <div className="container flex lg:flex-row flex-col gap-20">
                    <Tab.List className='flex flex-col bg-[#161618] rounded-xl p-10 min-w-[300px] h-fit'>
                        <TabCustom text='Профиль' />
                        <TabCustom text='Избранное' />
                        <TabCustom text='Комментарии' />
                        <TabCustom text='Настройки' />
                    </Tab.List>
                    <Tab.Panels className='w-full'>
                        <Tab.Panel>
                            <div className="flex flex-col p-10 rounded-xl bg-[#161618]">
                                <img src="https://html.nkdev.info/fliqs/assets/images/user-160x160.jpg" className='w-[80px] h-[80px] rounded-xl' />
                                <ul className='flex flex-col divide-y-[1px] divide-[#dee2e6]/20 mt-12'>
                                    <li className='flex xs:flex-row flex-col gap-y-1 py-2.5'>
                                        <span className='text-[#8C8C8C] xs:w-1/2'>Имя</span>
                                        <span className='xs:w-1/2 xs:text-base text-sm'>...</span>
                                    </li>
                                    <li className='flex xs:flex-row flex-col gap-y-1 py-2.5'>
                                        <span className='text-[#8C8C8C] xs:w-1/2'>Фамилия</span>
                                        <span className='xs:w-1/2 xs:text-base text-sm'>...</span>
                                    </li>
                                    <li className='flex xs:flex-row flex-col gap-y-1 py-2.5'>
                                        <span className='text-[#8C8C8C] xs:w-1/2'>Страна</span>
                                        <span className='xs:w-1/2 xs:text-base text-sm'>...</span>
                                    </li>
                                    <li className='flex xs:flex-row flex-col gap-y-1 py-2.5'>
                                        <span className='text-[#8C8C8C] xs:w-1/2'>Город</span>
                                        <span className='xs:w-1/2 xs:text-base text-sm'>...</span>
                                    </li>
                                    <li className='flex xs:flex-row flex-col gap-y-1 py-2.5'>
                                        <span className='text-[#8C8C8C] xs:w-1/2'>Пол</span>
                                        <span className='xs:w-1/2 xs:text-base text-sm'>...</span>
                                    </li>
                                    <li className='flex xs:flex-row flex-col gap-y-1 py-2.5'>
                                        <span className='text-[#8C8C8C] xs:w-1/2'>Дата рождения</span>
                                        <span className='xs:w-1/2 xs:text-base text-sm'>...</span>
                                    </li>
                                </ul>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel>
                            <ul className='flex flex-col gap-y-5'>
                                <li className='flex justify-between items-center p-5 rounded-xl bg-[#161618]'>
                                    <div className="flex items-center gap-5">
                                        <img src="https://html.nkdev.info/fliqs/assets/images/user-160x160.jpg" className='w-[70px] h-[70px] rounded-xl' />
                                        <div>
                                            <p>Название</p>
                                            <ul className='flex items-center gap-x-3 text-[#8c8c8c]'>
                                                <li>8.4</li>
                                                <li><div className="h-1 w-1 rounded-full bg-[#8c8c8c]"></div></li>
                                                <li>2023</li>
                                                <li><div className="h-1 w-1 rounded-full bg-[#8c8c8c]"></div></li>
                                                <li>2ч 23 мин.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button className="group relative backdrop-blur-md bg-[#252527]/70 h-10 w-10 flex justify-center items-center rounded-xl overflow-hidden">
                                        <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-0 h-0 bg-white group-hover:w-[150%] group-hover:h-[150%] rounded-full transition-all duration-300"></div>
                                        <svg width="20" height="20" className='group-hover:fill-black fill-white transition-all duration-300' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166V3.84166Z" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                </li>
                                <li className='flex justify-between items-center p-5 rounded-xl bg-[#161618]'>
                                    <div className="flex items-center gap-5">
                                        <img src="https://html.nkdev.info/fliqs/assets/images/user-160x160.jpg" className='w-[70px] h-[70px] rounded-xl' />
                                        <div>
                                            <p>Название</p>
                                            <ul className='flex items-center gap-x-3 text-[#8c8c8c]'>
                                                <li>8.4</li>
                                                <li><div className="h-1 w-1 rounded-full bg-[#8c8c8c]"></div></li>
                                                <li>2023</li>
                                                <li><div className="h-1 w-1 rounded-full bg-[#8c8c8c]"></div></li>
                                                <li>2ч 23 мин.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <button className="group relative backdrop-blur-md bg-[#252527]/70 h-10 w-10 flex justify-center items-center rounded-xl overflow-hidden">
                                        <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-0 h-0 bg-white group-hover:w-[150%] group-hover:h-[150%] rounded-full transition-all duration-300"></div>
                                        <svg width="20" height="20" className='group-hover:fill-black fill-white transition-all duration-300' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.3671 3.84166C16.9415 3.41583 16.4361 3.07803 15.8799 2.84757C15.3237 2.6171 14.7275 2.49847 14.1254 2.49847C13.5234 2.49847 12.9272 2.6171 12.371 2.84757C11.8147 3.07803 11.3094 3.41583 10.8838 3.84166L10.0004 4.725L9.11709 3.84166C8.25735 2.98192 7.09128 2.49892 5.87542 2.49892C4.65956 2.49892 3.4935 2.98192 2.63376 3.84166C1.77401 4.70141 1.29102 5.86747 1.29102 7.08333C1.29102 8.29919 1.77401 9.46525 2.63376 10.325L3.51709 11.2083L10.0004 17.6917L16.4838 11.2083L17.3671 10.325C17.7929 9.89937 18.1307 9.39401 18.3612 8.83779C18.5917 8.28158 18.7103 7.6854 18.7103 7.08333C18.7103 6.48126 18.5917 5.88508 18.3612 5.32887C18.1307 4.77265 17.7929 4.26729 17.3671 3.84166V3.84166Z" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </Tab.Panel>
                        <Tab.Panel>
                            <ul className='flex flex-col gap-y-5'>
                                <li className='flex flex-col rounded-xl bg-[#161618]'>
                                    <div className="p-7 border-b-[1px] border-[#323234] w-full">
                                        <div className="flex items-center gap-5 ">
                                            <img src="https://html.nkdev.info/fliqs/assets/images/blog/post-1-120x120.jpg" className='w-[70px] h-[70px] rounded-xl' />
                                            <div>
                                                <Link to='/movies/'>Название фильма</Link>
                                                <ul className='flex items-center gap-x-3 text-[#8c8c8c]'>
                                                    <li>8.4</li>
                                                    <li><div className="h-1 w-1 rounded-full bg-[#8c8c8c]"></div></li>
                                                    <li>2023</li>
                                                    <li><div className="h-1 w-1 rounded-full bg-[#8c8c8c]"></div></li>
                                                    <li>2ч 23 мин.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p className='text-[#BFBFBF] py-7 pb-0'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam vel perspiciatis fugit eligendi! Ratione voluptatum ex hic minus voluptate! 
                                            Magni quisquam, provident alias dolores consequatur vero quo consequuntur cum voluptate?
                                        </p>
                                    </div>
                                    <div className="p-7 pt-9">
                                        <Rating className='flex' value={4} readonly  />
                                        <p className=' text-[#BFBFBF] font-medium mt-2'>January 2, 2021 at 11:05 am</p>
                                    </div>
                                </li>
                            </ul>
                        </Tab.Panel>
                        <Tab.Panel>
                            <form method='POST' className="flex flex-col p-10 rounded-xl bg-[#161618]">
                                <ul className='flex flex-col gap-y-4 mt-12'>
                                    <li className='flex items-center mb-6'>
                                        <div className="xl:w-1/5 lg:w-1/3 w-1/3">
                                            Аватарка
                                        </div>
                                        <div className="xl:w-4/5 lg:w-2/3 w-2/3">
                                            <div className="relative w-[80px] h-[80px] rounded-xl overflow-hidden">
                                                <img src="https://html.nkdev.info/fliqs/assets/images/user-160x160.jpg" alt="" className='' />
                                                <input type="file" name='file' className='h-full w-full absolute opacity-0 top-0 left-0' title='Выберите изображение' />
                                            </div>
                                        </div>
                                    </li>
                                    <li className='flex md:items-center md:flex-row flex-col'>
                                        <label htmlFor='name' className="xl:w-1/5 lg:w-1/3 md:w-1/3 mb-1">
                                            Имя
                                        </label>
                                        <div className="xl:w-4/5 lg:w-2/3 md:w-2/3">
                                            <input id='name' type="text" name="name" className='py-2.5 px-6 w-full rounded-lg bg-[#1E1E20] border-[1px] border-[#323233] outline-none focus:border-white/70' placeholder='Ваше имя' autocomplete='off' />
                                        </div>
                                    </li>
                                    <li className='flex md:items-center md:flex-row flex-col'>
                                        <label htmlFor='surname' className="xl:w-1/5 lg:w-1/3 md:w-1/3 mb-1">
                                            Фамилия
                                        </label>
                                        <div className="xl:w-4/5 lg:w-2/3 md:w-2/3">
                                            <input id='surname' type="text" name="surname" className='py-2.5 px-6 w-full rounded-lg bg-[#1E1E20] border-[1px] border-[#323233] outline-none focus:border-white/70' placeholder='Ваша фамилия' autocomplete='off' />
                                        </div>
                                    </li>
                                    <li className='flex md:items-center md:flex-row flex-col'>
                                        <label htmlFor='email' className="xl:w-1/5 lg:w-1/3 md:w-1/3 mb-1">
                                            Почта
                                        </label>
                                        <div className="xl:w-4/5 lg:w-2/3 md:w-2/3">
                                            <input id='email' type="text" name="email" className='py-2.5 px-6 w-full rounded-lg bg-[#1E1E20] border-[1px] border-[#323233] outline-none focus:border-white/70' placeholder='Ваша почта' autocomplete='off' />
                                        </div>
                                    </li>
                                    <li className='flex md:items-center md:flex-row flex-col'>
                                        <label htmlFor='phone' className="xl:w-1/5 lg:w-1/3 md:w-1/3 mb-1">
                                            Телефон
                                        </label>
                                        <div className="xl:w-4/5 lg:w-2/3 md:w-2/3">
                                            <input id='phone' type="text" name="phone" className='py-2.5 px-6 w-full rounded-lg bg-[#1E1E20] border-[1px] border-[#323233] outline-none focus:border-white/70' placeholder='Ваш телефон' autocomplete='off' />
                                        </div>
                                    </li>
                                    <li className='flex md:items-center md:flex-row flex-col'>
                                        <label htmlFor='psw' className="xl:w-1/5 lg:w-1/3 md:w-1/3 mb-1">
                                            Текущий пароль
                                        </label>
                                        <div className="xl:w-4/5 lg:w-2/3 md:w-2/3">
                                            <input id='psw' type="password" name="psw" className='py-2.5 px-6 w-full rounded-lg bg-[#1E1E20] border-[1px] border-[#323233] outline-none focus:border-white/70' placeholder='Текущий пароль' autocomplete='off' />
                                        </div>
                                    </li>
                                    <li className='flex md:items-center md:flex-row flex-col'>
                                        <label htmlFor='pswNew' className="xl:w-1/5 lg:w-1/3 md:w-1/3 mb-1">
                                            Новый пароль
                                        </label>
                                        <div className="xl:w-4/5 lg:w-2/3 md:w-2/3">
                                            <input id='pswNew' type="password" name="pswNew" className='py-2.5 px-6 w-full rounded-lg bg-[#1E1E20] border-[1px] border-[#323233] outline-none focus:border-white/70' placeholder='Новый пароль' autocomplete='off' />
                                        </div>
                                    </li>
                                    <li className='flex md:items-center md:flex-row flex-col'>
                                        <label htmlFor='gender' className="xl:w-1/5 lg:w-1/3 md:w-1/3 mb-1">
                                            Пол
                                        </label>
                                        <div className="xl:w-4/5 lg:w-2/3 md:w-2/3">
                                            <select id='gender' name="gender" className='py-2.5 px-6 w-full rounded-lg bg-[#1E1E20] border-[1px] border-[#323233] outline-none focus:border-white/70'>
                                                <option>Пол</option>
                                                <option value="m">Мужской</option>
                                                <option value="f">Женский</option>
                                            </select>
                                        </div>
                                    </li>
                                    <li className='flex gap-5 justify-end items-center'>
                                        <button className="group hover:scale-[1.03] transition-all duration-500 overflow-hidden flex justify-center items-center relative bg-[#252527] py-4 px-8 rounded-lg cursor-pointer mt-10">
                                            <span className='group-hover:text-black transition-all duration-500'>Отмена</span>
                                            <div className="-z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-0 h-0 group-hover:w-[150%] rounded-full group-hover:h-[300%] bg-white transition-all duration-700"></div>
                                        </button>
                                        <button type='submit' className="group hover:scale-[1.05] transition-all duration-500 overflow-hidden flex justify-center items-center relative bg-[#F63131] py-4 px-8 rounded-lg cursor-pointer mt-10">
                                            <span className='group-hover:text-black transition-all duration-500'>Сохранить</span>
                                            <div className="-z-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-0 h-0 group-hover:w-[150%] rounded-full group-hover:h-[300%] bg-white transition-all duration-700"></div>
                                        </button>
                                    </li>
                                </ul>
                            </form>
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </main>
    );
}

export default Profile;