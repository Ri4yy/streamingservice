import ReactDOM from 'react-dom/client'
import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero';
import ReleaseSlider from './components/ReleaseSlider';
import UpComingSlider from './components/UpComingSlider';
import FilmsOfWeek from './components/FilmsOfWeek';
import SerialsSlider from './components/SerialsSlider';
import MovieList from './components/MovieList';
import Footer from './components/Footer';
import ScrollButton from './components/ScrollToTopBtn';
import ModalLogin from './components/ModalLogin';
import ModalSearch from './components/ModalSearch';




function App() {
    const [modalActive, setModalActive] = useState(false)
    const [modalActiveSearch, setModalActiveSeacrh] = useState(false)


    return (
        <React.Fragment>
            <ScrollButton />
            <Header setActive={setModalActive} setActiveSearch={setModalActiveSeacrh}/>
            <main className='-mt-20'>
                <Hero />
                <ReleaseSlider />
                <UpComingSlider />
                <FilmsOfWeek />
                <SerialsSlider />
                <MovieList />
            </main>
            <ModalLogin active={modalActive} setActive={setModalActive}/>
            <ModalSearch activeSearch={modalActiveSearch} setActiveSearch={setModalActiveSeacrh}/>
            <Footer />
        </React.Fragment>
    );
}

export default App
