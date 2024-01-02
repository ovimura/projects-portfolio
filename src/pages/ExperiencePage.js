
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
                        <tr><th>Company</th><th>Job Title</th><th style={{paddingLeft: '30px'}}>Project Description</th></tr>
                    </thead>
                    <tbody>
                        <tr className="active-row">
                            <td>
                                <p>Apex Systems</p><p>Bank of America</p>
                                <p>Dec 2021 - dec 2023</p>
                            </td>
                            <td>
                                <p>Application Architect</p>
                                <p>Java Developer</p>
                                <p>Python Developer</p>
                                <p>C# Developer</p>
                            </td>
                            <td>
                                <ul>
                                    <li>I designed and implemented Cybersecurity solutions for applications</li>
                                    <li>I wrote documentation and configured systems to comply with Cybersecurity standards</li>
                                    <li>I completed the certification course for HashiCorp Vault</li>
                                    <li>I configured and wrote best practice documentation for HashiCorp Vault, Cyberark and gMSA</li>
                                    <li>I developed Java, C# and Python programs to authenticate and rotate passwords for applications</li>
                                    <li>I configured Active Directory, Oracle, SQL Server service accounts to rotate passwords automatically and store them in HashiCorp Vault using REST APIs</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="inactive-row">
                            <td>
                                <p>PacteraEDGE</p>
                                <p>Jan 2020 - Nov 2021</p>
                            </td>
                            <td>
                                <p>Full Stack Developer</p>
                            </td>
                            <td>
                                <ul>
                                    <li>I developed a Elliptic Curve Digital Signature Algorithm for NodeJS application to secure transactions on Markaaz hosted in cloud. Url: https://markaaz.com</li>
                                    <li>I developed front-end (AngularJS) and back-end (NodeJS) features for markaaz.com</li>
                                    <li>I developed Blockchain application for digital identity using Ethereum ledger.</li>
                                    <li>I developed back-end microservices - REST APIs for B2C cloud application</li>
                                    <li>I developed Java applications processing large repositories of metadata</li>
                                    <li>I developed Python, and PowerShell scripts to automate the process of loading metadata into existing and new repositories</li>
                                    <li>I wrote store procedures to insert, delete, update data in SQL server and I developed Java programs to use these store procedures processing metadata</li>
                                    <li>I setup FTP server over SSL connection to transfer files from one server to the other</li>
                                    <li>I developed Java program which generates Metadata and Models for multiple types of entities, attributes, application types, type lists, list items and their relationships.</li>
                                    <li>I use Go to build and deployment for Cloud Native applications on Azure</li>
                                    <li>I developed and deployed accelerators, data pipelines and machine learning pipelines using Python framework Kedro, Data Validator Tool, Kedro Streaming, Spark, TensorFlow</li>
                                    <li>I developed programs to load data into Data Lake, Blob, S3, BigQuery</li>
                                    <li>I developed programs to convert Databricks pipelines to Synapses pipelines</li>
                                    <li>I developed program to parse SSIS (SQL Server Integration Services) packages and extract the SQL Tasks and Process Tasks, then I built a csv report file presenting the details for the SQL tasks and the flow of the execution</li>
                                    <li>I successfully completed Machine Learning, Neural Networks and Deep Learning training courses and built models to predict products prices</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="active-row">
                            <td>
                                <p>Adidas</p>
                                <p>Apr 2018 - Dec 2019</p>
                            </td>
                            <td>
                                <p>Technology Lead</p>
                            </td>
                            <td>
                                <ul>
                                    <li>Adding value to Software Development life-cycle stages</li>
                                    <li>Create detailed design artifacts like program specifications, test plans</li>
                                    <li>Independently develop and review code and contribute to the go-live plan</li>
                                    <li>Fixing defects in production for e-commerce web applications and mobile</li>
                                    <li>Deploy/configure/develop/support features in Salesforce.com application</li>
                                    <li>Building pages for e-commerce applications and configure feeds properly</li>
                                    <li>Writing Python scripts to analyze Big Data and generating reports</li>
                                    <li>Configuration and deployment with Docker and Kubernetes</li>
                                    <li>Working with CDN Akamai services such as configuring Akamai domains for web applications, setting permission rules, clear cache</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="inactive-row">
                            <td rowSpan={3}>
                                <p>Intel</p>
                                <p style={{width: '200px'}}>Apr 2016 - Mar 2018</p>
                            </td>
                            <td>
                                <p style={{width: '200px'}}>Python Developer</p>
                                <p>Jun 2017 - Mar 2018</p>
                            </td>
                            <td>
                                <ul>
                                    <li>Implementing WinIoT automation framework in PowerShell, Python for Joule 570x, WinIoT platform.</li>
                                    <li>Installing drivers and Firmware on Joule 570x devices</li>
                                    <li>Throubleshutting drivers and firmware</li>
                                    <li>Installing Operating System on Joule 570x</li>
                                    <li>Writing automation platform on Joule 570x using Powershell and Python technology</li>
                                    <li>Writing programms to test memory, cpu and disk using C, and C++</li>
                                    <li>Instlling Windows Server 2016 on Testing Lab Network</li>
                                    <li>Installing Hyper-V virtual machines on Windows Server 2016</li>
                                    <li>Installing Windows 10 and Ubuntu on virtual machines</li>
                                    <li>Creating Test environment on the server and virtual machines to be able to run automation scripts written in PowerShell, Python, C, C++ and C#</li>
                                    <li>Writing Universal Applications on WinIoT platform</li>
                                    <li>Writing scripts to measure the performance of WinIoT platform operations</li>
                                    <li>Writing reports to reflect the reliability and stability of the Joule 570x devices</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="inactive-row">
                            <td>
                                <p style={{width: '200px'}}>System Validation Engineer</p>
                                <p>Jan 2017 - Jun 2017</p>
                            </td>
                            <td>
                                <ul>
                                    <li>Implementing WinIoT automation framework in PowerShell, Python for Joule 570x, WinIoT platform.</li>
                                    <li>Installing drivers and Firmware on Joule 570x devices</li>
                                    <li>Throubleshutting drivers and firmware</li>
                                    <li>Installing Operating System on Joule 570x</li>
                                    <li>Writing automation platform on Joule 570x using Powershell and Python technology</li>
                                    <li>Writing programms to test memory, cpu and disk using C, and C++</li>
                                    <li>Instlling Windows Server 2016 on Testing Lab Network</li>
                                    <li>Installing Hyper-V virtual machines on Windows Server 2016</li>
                                    <li>Installing Windows 10 and Ubuntu on virtual machines</li>
                                    <li>Creating Test environment on the server and virtual machines to be able to run automation scripts written in PowerShell, Python, C, C++ and C#</li>
                                    <li>Writing Universal Applications on WinIoT platform</li>
                                    <li>Writing scripts to measure the performance of WinIoT platform operations</li>
                                    <li>Writing reports to reflect the reliability and stability of the Joule 570x devices</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="inactive-row">
                            <td>
                                <p>Firmware Software Engineer</p>
                                <p>Apr 2016 - Dec 2016</p>
                            </td>
                            <td>
                                <ul>
                                    <li>Installing drivers and firmware in test target with Intel processors, PCH, Beagle I2C, Aardvark devices, eight relays [Power Button, Reset Button, Clear CMOS, ME Recovery, FOJ Button, Manufacture Relay, Chipset Reset, Flash Drive Relay], Saleae Logic Analyzer Device, Monitor Serial Port, Keyboard Serial Port</li>
                                    <li>Running/Troubleshooting C# test scripts in Cloud application</li>
                                    <li>Running/Troubleshooting Python test scripts in Cloud application</li>
                                    <li>Installing/troubleshooting Wind River Simics</li>
                                    <li>Running test scripts with Wind River Simics</li>
                                    <li>Configure IPMI, IPC and Diagnostic bus interfaces for Intel hardware</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="active-row">
                            <td>
                                <p>Nike</p>
                                <p>Feb 2015 - Mar 2016</p>
                            </td>
                            <td>
                                <p>Software Engineer</p>
                            </td>
                            <td>
                                <ul>
                                    <li>Daily stand-up meeting reporting progress on the automation and performance testing for nike.net</li>
                                    <li>Writing UI Automation scripts to cover the nike.net application</li>
                                    <li>Writing Performance Testing scripts to measure the nike.net application performance respond time</li>
                                    <li>Writing java application tool for monitoring the resources on the nike.net servers</li>
                                    <li>Releasing daily reports for ui automation and performance suites</li>
                                    <li>Leading the UI Automation and Performance testing for nike.net application which places about $13 billions orders for 2015</li>
                                    <li>Sprint release every 2 weeks</li>
                                    <li>Groovy, Spock, Geb, gradle, Saucelabs, JMeter,fasterxml/json, IntelliJ IDEA, Version One</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="inactive-row">
                            <td>
                                <p>McKesson Health Solutions</p>
                                <p>Jan 2012 - Feb 2015</p>
                            </td>
                            <td>
                                <p>Software Engineer</p>
                            </td>
                            <td>
                                <ul>
                                    <li>Technical Writing</li>
                                    <li>Create Testing Strategy Documents</li>
                                    <li>Standard operating Procedures Documents</li>
                                    <li>Reviewing Requirements Documents</li>
                                    <li>Create Reports Documents</li>
                                    <li>Write Test Scenario an Test Cases</li>
                                    <li>Create Test Strategy for Java Client-Server Application - Contract manager</li>
                                    <li>Written Java Selenium/Fluentlenium Scripts; QTP scripts with Visual Basic Script; soapUI scripts; web services test scripts in C#</li>
                                    <li>Configure/Deploy Client-Server Java Applications</li>
                                    <li>Setting Complex Configuration of Single Sign on using SAML 2.0 on OpenAm, OpenIdp, WSO 4.0</li>
                                    <li>Troubleshoot single Sign On using Spnego</li>
                                    <li>Maintaining Virtual Windows and linux Machines</li>
                                    <li>Leading and designing the Regression Testing Automation for McKesson Contract Manager application</li>
                                    <li>I implemented the old legacy code Spring Boot Web Application in Java using Hibernate and ES6 JavaScript, HTML, CSS for front-end</li>
                                </ul>
                            </td>
                        </tr>
                        <tr className="active-row">
                            <td>
                                <p>Fiserv Inc.</p>
                                <p>Jan 2010 - Sep 2012</p>
                            </td>
                            <td>
                                <p>Software Engineer</p>
                            </td>
                            <td>
                                <ul>
                                    <li>Network Deploying build versions on Tomcat and Glassfish, Linux platform – SUSE, RHEL</li>
                                    <li>Designing, writing, and executing test cases in XML files as an input for TAF (Test Automation Framework, specific to Fiserv’s Acumen product), an engine using the application’s API written in Java.</li>
                                    <li>Actively participating as So ware Developer Engineer (Test) in Life Cycle of Acumen – Financial Delivery</li>
                                    <li>Software implementing SCRUM – Agile Methodology</li>
                                    <li>Write Test Scenarios in C# for web services testing jobs run successfully on Batch Processing server</li>
                                    <li>Testing Encryption Algorithms</li>
                                    <li>Install SUSE, RHEL, Oracle 11g, Microso  SQL Server on physical and virtual machines</li>
                                    <li>Written SQL Queries using Oracle</li>
                                    <li>Maintaining code using Eclipse, Visual Studio, and NetBeans</li>
                                    <li>Test automatically generated pdf documents in Credit Union Bank - Financial Delivering System</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}
