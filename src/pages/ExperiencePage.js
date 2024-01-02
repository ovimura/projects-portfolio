
import React from "react";

import './css/ExperiencePage.css';

export default function ExperiencePage() {

    return (
        <>
        <div>
            <h1 className="title">Professional Experience</h1>
            <div className="content">
                <table className="styled-table">
                    <thead>
                        <tr><th>Name</th><th>Points</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Ovi</td><td>100</td></tr>
                        <tr className="active-row"><td>Zula</td><td>99</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}
