import React from 'react';
import { Link } from 'react-router-dom'


function CardAnime(props) {
    return (  
        <div className="flex flex-col gap-4">
            <div className="w-full relative rounded-lg h-[400px] overflow-hidden">
                <div className='absolute top-3 right-3 text-white rounded-md backdrop-blur-md bg-black/50 py-1 px-2.5 z-50'>{props.rate}</div>
                <img src={props.img} className='flex h-[400px] rounded-lg w-full overflow-hidden object-cover hover:scale-105 transition-all duration-700'/>
            </div>
            <Link to="/anime/" className='text-xl'>{props.name}</Link>
            <ul className='flex gap-x-3 items-center'>
                <li className='text-[#BFBFBF] text-sm'>{props.year}</li>
                <li><div className='h-1 w-1 rounded-full bg-[#323234]'></div></li>
                <li className='text-[#BFBFBF] text-sm'>{props.genre}</li>
            </ul>
        </div>
    );
}

export default CardAnime;