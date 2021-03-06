import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <section id="home-section" className="hero">
                    <div className="home-slider  owl-carousel">
                        <div className="slider-item">
                            <div className="overlay" />
                            <div className="container">
                                <div className="row d-flex no-gutters slider-text align-items-end justify-content-end" data-scrollax-parent="true">
                                    <div className="one-third js-fullheight order-md-last img" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
                                        <div className="overlay" />
                                    </div>
                                    <div className="one-forth d-flex align-items-center ftco-animate" data-scrollax=" properties: { translateY: '70%' }">
                                        <div className="text">
                                            <span className="subheading">Hello!</span>
                                            <h1 className="mb-4 mt-3">I'm a <span>prospective software engineer</span> based in Philadelphia</h1>
                                            <p><a href="https://drive.google.com/file/d/1PJiZhytXct5KIY4tsGBs_xVL64h9ulLP/view?usp=sharing" className="btn btn-primary py-3 px-4">Hire me</a></p>
                                        </div>
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