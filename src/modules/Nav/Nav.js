import React, { useState, useEffect } from 'react';
import "./Nav.css";
import { FormattedMessage } from 'react-intl';

const NavBar = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Function to update screenWidth whenever the window is resized
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth);
        };
    
        // Add an event listener for the 'resize' event
        window.addEventListener('resize', updateScreenWidth);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', updateScreenWidth);
        };
      }, []);

    const getMenuDesktop = () => {
        return (
            <>
                {/* <button onClick={() => language.setLanguage('es-CO')}>ES</button>
                <button onClick={() => language.setLanguage('en-US')}>EN</button> */}
                <a href="#home">
                    <FormattedMessage 
                        id="menu.home"
                        defaultMessage="Inicio"
                    />
                </a>
                <a href="#aboutMe">
                    <FormattedMessage 
                        id="menu.aboutMe"
                        defaultMessage="Acerca de mi"
                    />
                </a>
                <a href='#projectsSection'>
                    <FormattedMessage 
                        id="menu.projects"
                        defaultMessage="Projectos"
                    />
                </a>
                <a href='#contact'>
                    <FormattedMessage 
                        id="menu.contact"
                        defaultMessage="Contacto"
                    />
                </a>
            </>
        )
    }

    const getMenuMobile = () => {
        return (
            <>
                <a href="#home"><span className="material-symbols-outlined">home</span></a>
                <a href="#aboutMe"><span className="material-symbols-outlined">face</span></a>
                <a href='#projectsSection'><span className="material-symbols-outlined">splitscreen_top</span></a>
                <a href='#contact'><span className="material-symbols-outlined">contact_page</span></a>
            </>
        )
    }

    return (
        
        <div className='nav-content'>
            <div className='w-content'>
                <div className='left'>
                    <img src='images/logo/logo-maaaik.svg' alt='Michael Reyes logo - Front End' />
                </div>
                <div className='right'>
                    {screenWidth > 767 ? getMenuDesktop() : getMenuMobile() }                    
                </div>
            </div>
        </div>
    )

}

export default NavBar;