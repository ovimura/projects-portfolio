import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                {/* <div className="logo"> */}
                <div>
                    {/* <img src="./arrow1.png" alt="Market Hub" style={{width:"100px", height:"60px"}} /> */}
                </div>
                <nav>
                    <ul>
                        <li className="firstmenu">
                            <Link to="/">Summary</Link>
                        </li>
                        <li>
                            <Link to="/experience">Experience</Link>
                        </li>
                        {/* <li>
                            <Link to="/Stocks/aapl">APPL Stock</Link>
                        </li> */}
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li className="lastmenu">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;