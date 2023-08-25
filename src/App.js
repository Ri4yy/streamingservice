import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import ScrollButton from './components/ScrollToTopBtn';
import ModalLogin from './components/ModalLogin';
import ModalSearch from './components/ModalSearch';
import Menu from './components/Menu'
import Home from './components/Home'
import Anime from './components/Anime'
import Movie from './components/Movie'
import Serial from './components/Serial'
import DetailMovie from './components/DetailMovie'
import DetailSerial from './components/DetailSerial'
import DetailAnime from './components/DetailAnime'
import AboutActer from './components/AboutActer'
import Contacts from './components/Contacts'
import Profile from './components/Profile'




function App() {
    const [modalActive, setModalActive] = useState(false)
    const [modalActiveSearch, setModalActiveSeacrh] = useState(false)
    const [activeMenu, setActiveMenu] = useState(false)


    return (
        <BrowserRouter>
            <ScrollButton />
            <Header setActive={setModalActive} setActiveSearch={setModalActiveSeacrh} setActiveMenu={setActiveMenu}/>
            <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/anime-catalog/' element={<Anime />} />
                <Route path='/movie-catalog/' element={<Movie />} />
                <Route path='/serial-catalog/' element={<Serial />} />
                <Route path='/movies/' element={<DetailMovie />} />
                <Route path='/serials/' element={<DetailSerial />} />
                <Route path='/anime/' element={<DetailAnime />} />
                <Route path='/actors/' element={<AboutActer />} />
                <Route path='/Profile/' element={<Profile />} />
                <Route path='/other/contact/' element={<Contacts />} />
            </Routes>

            <ModalLogin active={modalActive} setActive={setModalActive}/>
            <ModalSearch activeSearch={modalActiveSearch} setActiveSearch={setModalActiveSeacrh}/>
            <Footer />
        </BrowserRouter>
    );
}

export default App
