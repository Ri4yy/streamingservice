import ReactDOM from 'react-dom/client'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero';
import ReleaseSlider from './components/ReleaseSlider';
import UpComingSlider from './components/UpComingSlider';
import FilmsOfWeek from './components/FilmsOfWeek';
import SerialsSlider from './components/SerialsSlider';
import MovieList from './components/MovieList';




function App() {
    return (
        <React.Fragment>
            <Header/>
            <main>
                <Hero />
                <ReleaseSlider />
                <UpComingSlider />
                <FilmsOfWeek />
                <SerialsSlider />
                <MovieList />
            </main>
        </React.Fragment>
    );
}

export default App
