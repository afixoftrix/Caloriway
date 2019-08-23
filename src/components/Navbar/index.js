import React from 'react'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

import './navbar.css'
import logo from '../../assets/logo2.svg'

const SidebarBtn = styled.div`
    padding-right: 30px;
    margin: auto 0;
    cursor: pointer;
    padding-left: 10px;
`

const Navbar = ({ iconSRC, appTitle, showNavBtn, onClick }) => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <SidebarBtn show={showNavBtn} onClick={onClick}>
                        <FaBars />
                    </SidebarBtn>
                    <img
                        className="navbar-logo"
                        src={iconSRC}
                        alt="app logo"
                    />
                    <div className="navbar-app-title">{appTitle}</div>
                </div>
                <div className="navbar-right">right</div>
            </div>
        </div>
    );
}

Navbar.defaultProps = {
    iconSRC: logo
}

export default Navbar
