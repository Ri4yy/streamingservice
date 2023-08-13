import React, {useState, useEffect} from 'react'

function ScrollButton() {
    const [scrollToTop, setScrollToTop] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 1000) {
                setScrollToTop(true)
            } else {
                setScrollToTop(false)
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (  
        <div>
            {scrollToTop && (
                <div onClick={scrollUp} className="group flex justify-center items-center -rotate-90 w-12 h-12 rounded-full backdrop-blur-md bg-black/20 border-2 hover:scale-110 hover:border-white border-white/50 fixed bottom-20 right-10 cursor-pointer transition-all duration-500 z-50">
                    <div className="rounded-full bg-white w-0 h-0 absolute transition-all duration-300 group-hover:w-full group-hover:h-full"></div>
                    <svg width="18" height="`18`" viewBox="0 0 24 24" className='group-hover:stroke-black stroke-white z-20 transition-all duration-300' fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 6L15 12L9 18" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </div>
            )}
        </div>
    );
}

export default ScrollButton;