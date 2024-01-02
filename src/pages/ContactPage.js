
import React from "react";

import './css/ContactPage.css';
import ovi from './images/ovi.PNG';

export default function ContactPage() {

    return (
        <>
        <h1 className="title">Contact</h1>
        <div className="content">
        <img src={ovi} alt="Ovi" className="img-ovi"/>
            {/* Email: <span className="email">ovidiu.mura@yahoo.com</span> */}
            <table className="styled-table">
                    {/* <thead>
                        <tr><th>Email</th><th>Points</th></tr>
                    </thead> */}
                    <tbody>
                        <tr><td></td></tr>
                        <tr><td>Email:</td><td><span className="email">ovidiu.mura@yahoo.com</span></td></tr>
                        <tr className="active-row"><td>Phone:</td><td>(971) 990-9319</td></tr>
                    </tbody>
            </table>
        </div>
        </>
    );
}
