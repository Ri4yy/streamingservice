import React from 'react';
import CardMovie from './CardMovie';
import Spider from '../img/poster/spider.jpg'


function MovieList() {
    let moviesObj = [
        {id: '1', name: 'Spider-man', year: '2023', genre: 'movie', rate: '8.4'},
        {id: '2', name: 'Spider-man', year: '2023', genre: 'movie', rate: '8.4'},
        {id: '3', name: 'Spider-man', year: '2023', genre: 'movie', rate: '8.4'},
        {id: '4', name: 'Spider-man', year: '2023', genre: 'movie', rate: '8.4'},
        {id: '5', name: 'Spider-man', year: '2023', genre: 'movie', rate: '8.4'},
        {id: '6', name: 'Spider-man', year: '2023', genre: 'movie', rate: '8.4'},
    ]
    return (  
        <div className="bg-[linear-gradient(95.92deg,#bc2fb2_0%,#f55267_49.13%,#feae71_100%)]">
            <div className="container md:py-[120px] py-20">
                <div className="rounded-md backdrop-blur-md bg-white/10 w-fit px-2.5 py-1 text-white/80 text-sm mx-auto">Онлайн-просмотр</div>
                <h2 className='text-center md:text-[32px] text-2xl leading-[1.2] mt-2 font-bold'>Недавно вышедшие фильмы</h2>
                <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 gap-x-7 md:gap-y-12 gap-y-8 mt-10">
                    {moviesObj.map((movie) => 
                        <CardMovie key={movie.id} name={movie.name} year={movie.year} genre={movie.genre} rate={movie.rate} img={Spider}/>
                    )}
                </div>
                <button className='flex gap-2 justify-center items-center group py-3 px-8 rounded-lg hover:scale-110 bg-[#ff1414] relative overflow-hidden transition-all duration-700 mx-auto mt-12'>
                    <div className='group-hover:w-[200%] group-hover:h-[500%] group-hover:opacity-100 group-hover:-top-[70px] group-hover:-left-1/2 group-hover:translate-1/2 w-0 h-0 opacity-0 rounded-full bg-white absolute transition-all duration-500 ease-out top-5 left-1/2'></div>
                    <span className='group-hover:text-black relative transition-all duration-700 ease-out leading-0'>Просмотреть все</span>
                </button>
            </div>
        </div>
    );
}

export default MovieList;