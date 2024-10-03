import React from "react";


import './css/HomePage.css'

export default function HomePage() {

    return (
        <>
        <div className="home-container">
            <h1 className="title">Summary</h1>
            <div className="content">
                <p>Experienced Software Engineer with background in cloud, automation, implementation and testing. I have experience with Object-Oriented design, mircroservices and API development. </p>
                <p>I have the following degrees, Master in Computer Science from Portland State University, graduate Cybersecurity certificate from Portland State University, and Machine Learning Certified from Standford University. </p>
                <p>I have experience as Java Developer working with Nike, McKesson and Fiserv. I implemented microservices and REST API using NodeJS, Java Spring and Hibernate with McKesson and also in other projects. </p>
                <p>I am Oracle Java 6 SE Programmer certified. My recent work is building web applications with Google Cloud Platform (and Firebase User Authentication), AWS using React and NodeJS. </p>
                <p>I also built AWS CRUD REST APIs using Lambda, API Gateway and DynamoDB. I also worked with REST APIs using tools such as Swagger and Postman. </p>
                <p>I have experience working with Oracle SQL, MS SQL Server, Docker and Kubernetes as Technology Lead with Adidas. </p>
                <p>I developed and maintained complex programs in languages such as Python, C++, Java, C, C#. </p>
                <p>I also built and successfully deployed data pipelines and machine learning pipelines with Python frameworks such as Kedro, Data Validator Tool, Kedro Streaming, Spark, TensorFlow. </p>
                <p>I developed programs to load data into Data Lake, Blob, S3, BigQuery.</p>

                <table className="styled-table">
                    <thead>
                        <tr className="ed"><th>Education:</th><th></th><th></th></tr>
                        <tr><th>Degree</th><th>University</th><th>Date</th></tr>
                    </thead>
                    <tbody>
                        <tr className="active-row">
                            <td>
                                <p>Master's degree in Computer Science</p>
                            </td>
                            <td>
                                <p>Portland State University</p>
                            </td>
                            <td>2017 - 2020</td>
                        </tr>
                        <tr className="inactive-row">
                            <td>
                                Graduate Certificate in Computer Security
                            </td>
                            <td>
                                Portland State University
                            </td>
                            <td>2018 - 2020</td>
                        </tr>
                        <tr className="active-row">
                            <td>
                                Bachelor of Science in Computer Science
                            </td>
                            <td>
                                Portland State University
                            </td>
                            <td>2006 - 2009</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>



        </>
    );
}