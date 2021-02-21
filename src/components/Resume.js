import React from 'react'

const Resume = () => {
    return (
        <div className="div">
            <div className="paragraph">
                <h2>Johnathan Costa</h2>
                <div className="lower-case">
                    <p><a href="https://www.linkedin.com/in/johnathan-costa-6087921b5/" target="_blank">Linkedin </a>|
                    <a href="https://github.com/costajohnathan" target="_blank"> GitHub</a></p>
                    <p>Greenslopes, QLD</p>
                    <p>costajohnathan@gmail.com</p>
                </div>
            </div> 
            <div className="paragraph">
                <h2>Projects</h2>
                <li>React + Amazon Lambda - 2021</li>
                <p className="lower-case">Digital resume made on React, mainteined with Git, and set up Amazon Lambda to use <a href="https://github.com/costajohnathan/quirky-bio" target="_blank">this GitHub repository</a> to serve as the root folder.</p>
                <p className="lower-case">Metrics are collected by GoogleAnalytics trough a HTML inline script for future assesment of the website.</p>
                <li>WordPress + Amazon EC2 - 2020</li> 
                <p className="lower-case">Developed and deployed <a href="http://www.mahikastore.com.au" target="_blank">MahikaStore.com</a>. The project was developed in WordPress, since speed was paramount, and a bitnami image was used as host server.</p>
                <p className="lower-case">Although Stripe & Paypal were successfully activated, the sample order was unsatisfactory, thus, no stock has been purchased since.</p>
                <li>LAMP Server + Raspberry Pi - 2019</li>
                <p className="lower-case">Self hosted my <a href="https://www.freecodecamp.org/costajohnathan" target="_blank">FreeCodeCamp.com</a>. projects locally. Addressed the lack of static IP with NoIP, and TSL with LetsEncrypt.</p>
            </div>
            <div className="paragraph">
                <h2>Work Experience</h2>
                <div>
                    <p><b>Front Desk Reception</b>, Experience Hotels  2019-2020</p>
                    <p className="lower-case">Responsible for the front office reception and administration duties, including greeting and looking after guests, check ins, answering phone calls, handling complaints, sorting and distributing mail.</p>
                </div>
            </div>

            <div className="paragraph">
                <h2>Skills</h2>
                <div className="row" >
                    <div className="column">
                        <ul>Proficient</ul>
                        <div className="lower-case">
                            <li>Terminal</li>
                            <li>Python</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>Git</li>
                        </div>
                    </div> 
                    <div className="column">
                        <ul>Familiar</ul>
                        <div className="lower-case">
                            <li>Javascript</li>
                            <li>Apache</li>
                            <li>Amplfy</li>
                            <li>Java</li>
                            <li>EC2</li>
                        </div>
                    </div>
                </div> 
            </div>
            
            <div className="paragraph">
                <h2>Education</h2>
                <p>Bachelor of Computer Science</p>
                <p className="lower-case">The University of Queensland [2020 ~ 2023]</p>
            </div>  

        </div>
    )
}

export default Resume
