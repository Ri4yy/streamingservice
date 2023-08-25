import React from 'react'
import { IoClose } from 'react-icons/io5'
import { FaUserAlt } from 'react-icons/fa'
import { BiSolidLock } from 'react-icons/bi'

function ModalLogin({active, setActive}) {
    return (  
        <div className={`${active ? 'modal__active' : 'modal'} flex justify-center items-center`}>
            <div className={`bg-black/30 md:pt-[60px] pt-8 md:px-[50px] px-[30px] md:pb-[50px] pb-6 rounded-2xl min-[440px]:w-[440px] w-[90%] h-fit z-[63] ${active ? 'flex ' : 'hidden'} `}>
                <button onClick={() => setActive(false)} className="flex justify-center items-center absolute top-10 right-12 backdrop-blur-md bg-white/20 rounded-lg hover:rounded-full transition-all duration-300 w-10 h-10 z-[62]">
                    <IoClose className=' h-8 w-8' />
                </button>
                <form action="#" mathod="POST" className='flex flex-col gap-8 w-full'>
                    <p className='text-2xl font-medium text-center'>Вход</p>
                    <div className="group relative">
                        <FaUserAlt className='absolute top-1/2 -translate-y-1/2 left-6 fill-white/50 group-focus:fill-white' />
                        <input className='w-full py-[10px] pl-[60px] pr-6 rounded-lg border-[1px] border-white/10 bg-white/5 outline-none focus:border-white/70' name='name' type="text" placeholder='Логин' autocomplete='off' />
                    </div>
                    <div className="group relative">
                        <BiSolidLock className='absolute top-1/2 -translate-y-1/2 left-6 h-5 w-5 fill-white/50 group-focus:fill-white' />
                        <input className='w-full py-[10px] pl-[60px] pr-6 rounded-lg border-[1px] border-white/10 bg-white/5 outline-none focus:border-white/70' name='name' type="password" placeholder='Пароль' autocomplete='off' />
                    </div>
                    <button className='flex justify-center items-center group mt-4 py-4 w-full rounded-lg hover:scale-105 bg-[#ff1414] relative overflow-hidden transition-all duration-700'>
                        <div className='w-0 h-0 group-hover:w-[110%] group-hover:h-[500%] rounded-full bg-white absolute left-1/2 -translate-x-1/2 transition-all duration-500'></div>
                        <span className='group-hover:text-black font-medium relative transition-all duration-700 ease-out leading-0'>Войти</span>
                    </button>
                    <button className='text-base font-medium text-center hover:text-[#ff1414] transition-all duration-300'>Регистрация</button>
                </form>
            </div>
        </div>
    );
}

export default ModalLogin;