import React, { useEffect, useState } from 'react';
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs"
import profile from '../img/profile.png'

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 8 || scrollY - lastScrollY < -8)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); 
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); 
      }
    }, [scrollDirection]);
  
    return scrollDirection;
};

function Header({setActive, setActiveSearch}) {
    const scrollDirection = useScrollDirection();

    return ( 
        <header className={`flex justify-between items-center px-8 rounded-lg backdrop-blur-md bg-black/50 w-[98%] left-[1%] absolute ${ scrollDirection === "down" ? "-top-24 " : "top-2 sticky"} top-2 transition-all duration-500 z-50`}>
            <button href="#" className='relative after:transition-all after:duration-500 hover:after:absolute after:w-10 after:h-10 hover:after:bg-white/20 after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2 after:rounded-full'>
                <BsThreeDotsVertical />
            </button>
            <nav>
                <ul className='flex gap-3 text-sm'>
                    <li className='py-5'><a href="#" className='px-[10px] py-1.5 rounded-md backdrop-blur-md bg-white/20'>Главная</a></li>
                    <li className='group relative py-5 after:w-full after:h-5 after:absolute after:-bottom-5 after:left-0'>
                        <a href="#" className='px-[10px] py-1.5 rounded-md backdrop-blur-md hover:bg-white/10 transition-all duration-200'>Фильмы</a>
                        <div className="group-hover:flex px-8 py-6 rounded-lg backdrop-blur-md bg-black/50 absolute top-20 left-0 hidden min-w-[calc(100%+100px)] ">
                            <ul className='flex flex-col'>
                                <li><a href="#" className='flex items-center whitespace-nowrap py-2 hover:pl-2 hover:before:w-1.5 hover:before:h-1.5 hover:before:opacity-100 transition-all duration-300 before:transition-all before:duration-300 before:-translate-x-3 before:w-0 before:h-0 before:rounded-full before:bg-red-500 before:opacity-0'>Lorem ipsum</a></li>
                                <li><a href="#" className='flex items-center whitespace-nowrap py-2 hover:pl-2 hover:before:w-1.5 hover:before:h-1.5 hover:before:opacity-100 transition-all duration-300 before:transition-all before:duration-300 before:-translate-x-3 before:w-0 before:h-0 before:rounded-full before:bg-red-500 before:opacity-0'>Lorem ipsum</a></li>
                                <li><a href="#" className='flex items-center whitespace-nowrap py-2 hover:pl-2 hover:before:w-1.5 hover:before:h-1.5 hover:before:opacity-100 transition-all duration-300 before:transition-all before:duration-300 before:-translate-x-3 before:w-0 before:h-0 before:rounded-full before:bg-red-500 before:opacity-0'>Lorem ipsum</a></li>
                            </ul>
                        </div>
                    </li>
                    <li className='py-5'><a href="#" className='px-[10px] py-1.5 rounded-md backdrop-blur-md hover:bg-white/10 transition-all duration-200'>Сериалы</a></li>
                    <li className='py-5'><a href="#" className='px-[10px] py-1.5 rounded-md backdrop-blur-md hover:bg-white/10 transition-all duration-200'>Аниме</a></li>
                    <li className='group relative py-5 after:w-full after:h-5 after:bg-transparent after:absolute after:-bottom-5 after:left-0'>
                        <a href="#" className='after:left-0 px-[10px] py-1.5 rounded-md backdrop-blur-md hover:bg-white/10 transition-all duration-200'>Другое</a>
                        <div className="group-hover:flex px-8 py-6 rounded-lg backdrop-blur-md bg-black/50 absolute top-20 left-0 hidden min-w-[calc(100%+100px)] ">
                            <ul className='flex flex-col'>
                                <li><a href="#" className='flex items-center whitespace-nowrap py-2 hover:pl-2 hover:before:w-1.5 hover:before:h-1.5 hover:before:opacity-100 transition-all duration-300 before:transition-all before:duration-300 before:-translate-x-3 before:w-0 before:h-0 before:rounded-full before:bg-red-500 before:opacity-0'>Lorem ipsum</a></li>
                                <li><a href="#" className='flex items-center whitespace-nowrap py-2 hover:pl-2 hover:before:w-1.5 hover:before:h-1.5 hover:before:opacity-100 transition-all duration-300 before:transition-all before:duration-300 before:-translate-x-3 before:w-0 before:h-0 before:rounded-full before:bg-red-500 before:opacity-0'>Lorem ipsum</a></li>
                                <li><a href="#" className='flex items-center whitespace-nowrap py-2 hover:pl-2 hover:before:w-1.5 hover:before:h-1.5 hover:before:opacity-100 transition-all duration-300 before:transition-all before:duration-300 before:-translate-x-3 before:w-0 before:h-0 before:rounded-full before:bg-red-500 before:opacity-0'>Lorem ipsum</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className="flex gap-5 items-center">
                <button onClick={() => setActiveSearch(true)}><BsSearch className='h-5 w-5 hover:fill-[#ff1414] transition-all duration-300'/></button>
                <button onClick={() => setActive(true)}  className='flex justify-center items-center group py-2 px-6 rounded-lg border-white border-[2px] relative overflow-hidden '>
                    <div className='group-hover:w-[200%] group-hover:h-[500%] group-hover:opacity-100 group-hover:-top-[70px] group-hover:-left-1/2 group-hover:translate-1/2 w-0 h-0 opacity-0 rounded-full bg-white absolute transition-all duration-500 ease-out top-5 left-1/2'></div>
                    <span className='group-hover:text-black relative transition-all duration-700 ease-out text-sm leading-0'>Вход</span>
                </button>
                <div className="group relative py-5 after:w-[calc(100%+100px)] after:-translate-x-[100px] after:h-3 after:absolute after:-bottom-3 after:left-0">
                    <img src={profile} alt="profile" className='w-10 h-10 rounded-full hover:outline-offset-1 hover:outline hover:outline-1 transition-all duration-200 cursor-pointer'/>
                    <div className="group-hover:flex px-8 py-6 rounded-lg backdrop-blur-md bg-black/50 absolute top-[90px] right-0 hidden min-w-[calc(100%+200px)] ">
                        <ul className='flex flex-col'>
                            <li><a href="#" className='flex items-center whitespace-nowrap py-2 hover:pl-2 hover:before:w-1.5 hover:before:h-1.5 hover:before:opacity-100 transition-all duration-300 before:transition-all before:duration-300 before:-translate-x-3 before:w-0 before:h-0 before:rounded-full before:bg-red-500 before:opacity-0'>Профиль</a></li>
                            <li><a href="#" className='flex items-center whitespace-nowrap py-2 hover:pl-2 hover:before:w-1.5 hover:before:h-1.5 hover:before:opacity-100 transition-all duration-300 before:transition-all before:duration-300 before:-translate-x-3 before:w-0 before:h-0 before:rounded-full before:bg-red-500 before:opacity-0'>Избранное</a></li>
                            <li><a href="#" className='flex items-center whitespace-nowrap py-2 hover:pl-2 hover:before:w-1.5 hover:before:h-1.5 hover:before:opacity-100 transition-all duration-300 before:transition-all before:duration-300 before:-translate-x-3 before:w-0 before:h-0 before:rounded-full before:bg-red-500 before:opacity-0'>Комментарии</a></li>
                            <li><a href="#" className='flex items-center whitespace-nowrap py-2 hover:pl-2 hover:before:w-1.5 hover:before:h-1.5 hover:before:opacity-100 transition-all duration-300 before:transition-all before:duration-300 before:-translate-x-3 before:w-0 before:h-0 before:rounded-full before:bg-red-500 before:opacity-0'>Настройки</a></li>
                            <li><a href="#" className='flex items-center whitespace-nowrap py-2 hover:pl-2 hover:before:w-1.5 hover:before:h-1.5 hover:before:opacity-100 transition-all duration-300 before:transition-all before:duration-300 before:-translate-x-3 before:w-0 before:h-0 before:rounded-full before:bg-red-500 before:opacity-0'>Выход</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;