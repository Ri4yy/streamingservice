import React from 'react';
import Hero from './Hero';
import ReleaseSlider from './ReleaseSlider';
import UpComingSlider from './UpComingSlider';
import FilmsOfWeek from './FilmsOfWeek';
import SerialsSlider from './SerialsSlider';
import MovieList from './MovieList';

function Home() {
    return (  
        <main className='-mt-20'>
            <Hero />
            <ReleaseSlider />
            <UpComingSlider />
            <FilmsOfWeek />
            <SerialsSlider />
            <MovieList />
        </main>
    );
}

export default Home;