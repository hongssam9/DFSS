import React from 'react';
import './Header.css'
import nsc from '../Images/nsc.png'
import { BsHouseFill, BsArrowUpRight } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-stuff'>
                <div className='header-tdc'>
                    <strong>Test Decision Code</strong>
                </div>
                <div className="header-nsc">
                    <img src={nsc} className="nav-logo" alt="NSC Logo" />
                </div>
                
                <div className="header-options">
                    <div className="header-options_buttons"><BsHouseFill /></div>
                    <div className="header-options_buttons"><BsArrowUpRight /></div>
                    <div className="header-options_buttons"><CgProfile /></div>
                    <div className="searchBar"><input placeholder="search" /></div>
                </div>

            </div>
        </div>
    );
};

export default Header;