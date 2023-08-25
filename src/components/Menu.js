import React from 'react';
import AccordionPanel from './AccordionPanel';
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import { BsPlus } from "react-icons/bs"

function Menu({activeMenu, setActiveMenu}) {
    
    return (  
        <div className={`${activeMenu ? 'menu__active flex justify-center items-center' : 'menu'}`}>
            <div className={`w-full justify-start h-full z-[63] ${activeMenu ? 'flex ' : 'hidden'} flex-col overflow-y-scroll`}>
                <button onClick={() => setActiveMenu(false)} className="flex justify-center items-center absolute md:top-10 top-5 md:right-12 right-6 backdrop-blur-md bg-white/20 rounded-lg hover:rounded-full transition-all duration-300 w-10 h-10 z-[62]">
                    <IoClose className=' h-8 w-8' />
                </button>
                <ul className='flex flex-col ml-10 pl-12 text-[40px] text-white/70 font-bold mt-20'>
                    <li className='py-[10px]'><Link to='/' className='text-white h-fit relative after:w-2 after:h-2 after:absolute after:top-1/2 after:-translate-y-1/2 after:bg-red-500 after:rounded-full after:ml-5'>Главная</Link></li>
                    <li className='py-[10px]'>
                        <AccordionPanel title={'Фильмы'}>
                            <li className='py-[10px]'><a href="#">{'Фильмы'}</a></li>
                            <li className='py-[10px]'><a href="#">{'Актеры'}</a></li>
                        </AccordionPanel>
                    </li>
                    <li className='py-[10px]'><a href="#">Сериалы</a></li>
                    <li className='py-[10px]'><a href="#">Аниме</a></li>
                    <li className='py-[10px]'>
                        <AccordionPanel title={'Другое'}>
                            <li className='py-[10px]'><Link to='/contact/'>Контакты</Link></li>
                        </AccordionPanel>
                    </li>
                    <li className='py-[10px]'>
                        <AccordionPanel title={'Профиль'}>
                            <li className='py-[10px]'><Link to='/profile' state={{ activeIndex: "0" }}>Профиль</Link></li>
                            <li className='py-[10px]'><Link to='/profile' state={{ activeIndex: "1" }}>Избранное</Link></li>
                            <li className='py-[10px]'><Link to='/profile' state={{ activeIndex: "2" }}>Комментарии</Link></li>
                            <li className='py-[10px]'><Link to='/profile' state={{ activeIndex: "3" }}>Настройки</Link></li>
                        </AccordionPanel>    
                    </li>
                    <li className='py-[10px] mt-10'><a href="#" className='text-2xl'>Выход</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;