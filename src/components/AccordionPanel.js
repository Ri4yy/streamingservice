import React, {useState} from 'react';


function AccordionPanel(props) {
    const [accordion, setAccordion] = useState(false);

    const handleToggle = () => {
        setAccordion(!accordion);
    };


    return (  
        <>
            <span onClick={handleToggle} className={`${accordion ? 'text-white before:content-["-"] before:top-[8px] before:-left-[36.5px]' : 'text-white/70 before:content-["+"] before:top-1/2 before:-translate-y-1/2 before:-left-10'} after:backdrop-blur-md after:w-8 after:h-8 after:absolute after:top-[11.2px] after:-left-[46.5px] after:bg-white/20 after:rounded-lg relative before:font-light before:absolute  before:text-3xl before:z-20`}>{props.title}</span>
            <ul className={`${accordion ? 'flex' : 'hidden'} flex-col text-xl text-white/70 transition-all duration-300`}>
                {props.children}
            </ul>
        </>
    );
}

export default AccordionPanel;