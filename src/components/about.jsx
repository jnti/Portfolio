import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
                    <div className="container">
                        <div className="row d-flex">
                            <div className="col-md-6 col-lg-5 d-flex">
                                <div className="img-about img d-flex align-items-stretch">
                                    <div className="overlay" />
                                    <div className="img d-flex align-self-stretch align-items-center" style={{ backgroundImage: 'url(images/bg_2.jpg)' }}>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-7 pl-lg-5 pb-5">
                                <div className="row justify-content-start pb-3">
                                    <div className="col-md-12 heading-section ftco-animate">
                                        <h1 className="big">About</h1>
                                        <h2 className="mb-4">About Me</h2>
                                        <p>I'm a recent Drexel University graduate and I majored in Computer Science. I am currently looking for software engineer positions.</p>
                                        <ul className="about-info mt-4 px-md-0 px-2">
                                            <li className="d-flex"><span>Name:</span> <span>Sang Im</span></li>
                                            <li className="d-flex"><span>Email:</span> <span>johnim2247@gmail.com</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}