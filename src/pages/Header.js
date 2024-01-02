import React, { Component } from 'react';

import { slide as Menu } from 'react-burger-menu';

// import {
//     Link
// } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                {/* <div className="logo"> */}
                <div>
                    {/* <img src="./arrow1.png" alt="Market Hub" style={{width:"100px", height:"60px"}} /> */}
                    <h1 style={{margin:"0px", padding:"20px"}}>OVIDIU MURA</h1>
                </div>
                <Menu id="burger_menu" right>
                    {/* <a className="menu-item" href="/">
                        Home
                    </a>
                    <a className="menu-item" href="/salads">
                        Salads
                    </a>
                    <a className="menu-item" href="/pizzas">
                        Pizzas
                    </a>
                    <a className="menu-item" href="/desserts">
                        Desserts
                    </a> */}
                    <nav>
                        <ul>
                            <li className="menu-item">
                                <a href="/">Summary</a>
                                {/* <Link to="/">Summary</Link> */}
                            </li>
                        <li className='menu-item'>
                            {/* <Link to="/experience">Experience</Link> */}
                            <a href="/experience">Experience</a>
                        </li>
                        {/* <li>
                            <Link to="/Stocks/aapl">APPL Stock</Link>
                        </li> */}
                        <li className='menu-item'>
                            {/* <Link to="/projects">Projects</Link> */}
                            <a href="/experience">Projects</a>
                        </li>
                        <li>
                            {/* <Link to="/about">About</Link> */}
                        </li>
                        <li className="lastmenu">
                            <a href="/contact">Contact</a>
                            {/* <Link to="/contact">Contact</Link> */}
                        </li>
                    </ul>
                    </nav>
                </Menu>

            </header>
        );
    }
}

export default Header;
