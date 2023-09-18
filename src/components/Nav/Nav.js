import React, { useState, useEffect } from 'react';
import "./Nav.css";

const NavBar = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Function to update screenWidth whenever the window is resized
        const updateScreenWidth = () => {
            console.log("screenWidth", window.innerWidth)
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
                <a href="#home">Home</a>
                <a href="#aboutMe">About me</a>
                <a href='#projectsSection'>Projects</a>
                <a href='#contact'>Contact</a>
            </>
        )
    }

    const getMenuMobile = () => {
        return (
            <>
                <a href="#home"><span class="material-symbols-outlined">home</span></a>
                <a href="#aboutMe"><span class="material-symbols-outlined">face</span></a>
                <a href='#projectsSection'><span class="material-symbols-outlined">splitscreen_top</span></a>
                <a href='#contact'><span class="material-symbols-outlined">contact_page</span></a>
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