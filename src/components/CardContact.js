import React from 'react';

function CardContact(props) {
    return (  
        <a href={props.href} className="group hover:scale-[1.01] flex flex-col items-center p-[50px] rounded-xl bg-[#1B1B1D] hover:bg-[#1e1e1f] transition-all duration-300">
            <div className=" relative overflow-hidden p-4 rounded-xl bg-[#F63131] shadow-[0_0_0_0_#F63131]">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d={props.path1} stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <svg width="30" height="30" viewBox="0 0 30 30" className='opacity-0 group-hover:opacity-100 transition-all duration-500 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d={props.path2} fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            </div>
            <p className='text-xl font-medium mt-5'>{props.title}</p>
            <p className='mt-2.5 text-center text-[#BFBFBF]'>{props.address}</p>
        </a>
    );
}

export default CardContact;