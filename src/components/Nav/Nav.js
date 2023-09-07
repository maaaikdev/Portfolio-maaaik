import React from 'react';
import "./Nav.css";

const NavBar = () => {

    return (
        <div className='nav-content'>
            <div className='w-content'>
                <div className='left'>
                    <h2>Maaaik</h2>
                </div>
                <div className='right'>
                    <button>Home</button>
                    <button>About me</button>
                    <button>Projects</button>
                    <button>Contact</button>
                </div>
            </div>
        </div>
    )

}

export default NavBar;