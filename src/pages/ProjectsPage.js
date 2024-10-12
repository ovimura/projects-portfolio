
import React from "react";

import './css/ProjectsPage.css';

export default function ProjectsPage() {

    return (
        <div>
            <h1 className="title">Projects</h1>
            <div className="content wrapper-projects">
                <table className="styled-table">
                    <thead>
                        <tr><th></th><th></th><th style={{paddingLeft: '30px'}}></th></tr>
                    </thead>
                    <tbody>
                        <tr className="active-row">
                            <td>
                                {/* <p>Apex Systems</p><p>Bank of America</p>
                                <p>Dec 2021 - dec 2023</p> */}
                                <p>GitHub Repositories</p>
                            </td>
                            <td>
                                {/* <p>Application Architect</p>
                                <p>Java Developer</p>
                                <p>Python Developer</p>
                                <p>C# Developer</p> */}
                            </td>
                            <td>
                                {/* <ul>
                                    <li>I designed and implemented Cybersecurity solutions for applications</li>
                                    <li>I wrote documentation and configured systems to comply with Cybersecurity standards</li>
                                    <li>I completed the certification course for HashiCorp Vault</li>
                                    <li>I configured and wrote best practice documentation for HashiCorp Vault, Cyberark and gMSA</li>
                                    <li>I developed Java, C# and Python programs to authenticate and rotate passwords for applications</li>
                                    <li>I configured Active Directory, Oracle, SQL Server service accounts to rotate passwords automatically and store them in HashiCorp Vault using REST APIs</li>
                                </ul> */}
                                <p><a href="https://github.com/ovimura?tab=repositories" target="_blank" rel="noreferrer" >https://github.com/ovimura?tab=repositories</a> </p>
                            </td>
                        </tr>
                        <tr className="active-row">
                            <td>
                                {/* <p>Apex Systems</p><p>Bank of America</p>
                                <p>Dec 2021 - dec 2023</p> */}
                                <p>GitLab Repositories</p>
                            </td>
                            <td>
                                {/* <p>Application Architect</p>
                                <p>Java Developer</p>
                                <p>Python Developer</p>
                                <p>C# Developer</p> */}
                            </td>
                            <td>
                                {/* <ul>
                                    <li>I designed and implemented Cybersecurity solutions for applications</li>
                                    <li>I wrote documentation and configured systems to comply with Cybersecurity standards</li>
                                    <li>I completed the certification course for HashiCorp Vault</li>
                                    <li>I configured and wrote best practice documentation for HashiCorp Vault, Cyberark and gMSA</li>
                                    <li>I developed Java, C# and Python programs to authenticate and rotate passwords for applications</li>
                                    <li>I configured Active Directory, Oracle, SQL Server service accounts to rotate passwords automatically and store them in HashiCorp Vault using REST APIs</li>
                                </ul> */}
                                <p><a href="https://gitlab.com/ovidiu-mura" target="_blank" rel="noreferrer" >https://gitlab.com/ovidiu-mura</a></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
