import React, {useState, useEffect} from 'react';
import AccordionPanel from './AccordionPanel';
import { IoClose } from 'react-icons/io5'
import { BsPlus } from "react-icons/bs"

function Menu({activeMenu, setActiveMenu}) {
    
    return (  
        <div className={`${activeMenu ? 'menu__active flex justify-center items-center' : 'menu'}`}>
            <div className={`w-full justify-start h-full z-[53] ${activeMenu ? 'flex ' : 'hidden'} flex-col overflow-y-scroll`}>
                <button onClick={() => setActiveMenu(false)} className="flex justify-center items-center absolute md:top-10 top-5 md:right-12 right-6 backdrop-blur-md bg-white/20 rounded-lg hover:rounded-full transition-all duration-300 w-10 h-10 z-[52]">
                    <IoClose className=' h-8 w-8' />
                </button>
                <ul className='flex flex-col ml-10 pl-12 text-[40px] text-white/70 font-bold mt-20'>
                    <li className='py-[10px]'><a href="#" className='text-white h-fit relative after:w-2 after:h-2 after:absolute after:top-1/2 after:-translate-y-1/2 after:bg-red-500 after:rounded-full after:ml-5'>Главная</a></li>
                    <li className='py-[10px]'>
                        {/* <span onClick={handleToggle(accordion, setAccordion)} className={`${accordion ? 'text-white before:content-["-"] before:top-[8px] before:-left-[36.5px]' : 'text-white/70 before:content-["+"] before:top-1/2 before:-translate-y-1/2 before:-left-10'} after:backdrop-blur-md after:w-8 after:h-8 after:absolute after:top-[11.2px] after:-left-[46.5px] after:bg-white/20 after:rounded-lg relative before:font-light before:absolute  before:text-3xl before:z-20`}>Фильмы</span>
                        <ul className={`${accordion ? 'flex' : 'hidden'} flex-col text-xl text-white/70 transition-all duration-300`}>
                            <li className='py-[10px]'><a href="#">lorem</a></li>
                            <li className='py-[10px]'><a href="#">lorem</a></li>
                            <li className='py-[10px]'><a href="#">lorem</a></li>
                        </ul> */}
                        <AccordionPanel title={'Фильмы'}>
                            <li className='py-[10px]'><a href="#">{'Фильмы'}</a></li>
                            <li className='py-[10px]'><a href="#">{'Актеры'}</a></li>
                        </AccordionPanel>
                    </li>
                    <li className='py-[10px]'><a href="#">Сериалы</a></li>
                    <li className='py-[10px]'><a href="#">Аниме</a></li>
                    <li className='py-[10px]'>
                        <AccordionPanel title={'Другое'}>
                            <li className='py-[10px]'><a href="#">...</a></li>
                            <li className='py-[10px]'><a href="#">...</a></li>
                        </AccordionPanel>
                    </li>
                    <li className='py-[10px]'>
                        <AccordionPanel title={'Профиль'}>
                            <li className='py-[10px]'><a href="#">Профиль</a></li>
                            <li className='py-[10px]'><a href="#">Избранное</a></li>
                            <li className='py-[10px]'><a href="#">Комментарии</a></li>
                            <li className='py-[10px]'><a href="#">Настройки</a></li>
                        </AccordionPanel>    
                    </li>
                    <li className='py-[10px] mt-10'><a href="#" className='text-2xl'>Выход</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;