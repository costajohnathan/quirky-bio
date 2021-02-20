import React from 'react'

const Projects = () => {
    return (
        <div className="Projects">
            <h2>Projects</h2>
            <li>React + Amazon Lambda - 2021</li>
            <p className="lower-case">Digital resume made on React, mainteined with Git, and set up Amazon Lambda to use <a href="https://github.com/costajohnathan/quirky-bio" target="_blank">this GitHub repository</a> to serve as the root folder.</p>
            <li>WordPress + Amazon EC2 - 2020</li> 
            <p className="lower-case">Developed and deployed <a href="http://www.mahikastore.com.au" target="_blank">MahikaStore.com</a>. The project was developed in WordPress, since speed was paramount, and a bitnami image was used as host server.</p>
            <p className="lower-case">Although Stripe & Paypal were successfully activated, the sample order was unsatisfactory, thus, no stock has been purchased since.</p>
            <li>LAMP Server + Raspberry Pi - 2019</li>
            <p className="lower-case">Self hosted my <a href="https://www.freecodecamp.org/costajohnathan" target="_blank">FreeCodeCamp.com</a>. projects locally. Addressed the lack of static IP with NoIP, and TSL with LetsEncrypt.</p>
        </div>
    )
}

export default Projects
