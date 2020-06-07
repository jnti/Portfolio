import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return (
            <div>
                <section className="ftco-section ftco-no-pb" id="resume-section">
                    <div className="container">
                        <div className="row justify-content-center pb-5">
                            <div className="col-md-10 heading-section text-center ftco-animate">
                                <h1 className="big big-2">Resume</h1>
                                <h2 className="mb-4">Resume</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="resume-wrap ftco-animate">
                                    <span className="date">September 2015 - June 2020</span>
                                    <h2>BS in Computer Science</h2>
                                    <span className="position">Drexel University</span>
                                    <p className="mt-4">Graduated in June 2020 with 3.46 GPA</p>
                                </div>
                                <div className="resume-wrap ftco-animate">
                                    <span className="date">April 2018 - September 2018</span>
                                    <h2>SAP America</h2>
                                    <span className="position">Software Developer, Tester</span>
                                    <p className="mt-4">- Developed PowerShell scripts to automate the process of accessing data on different environments<br />
                                        - Implemented a variety of new features to a .NET web application with MVC using SQL statements from Microsoft SQL Server and created reports for management using PowerBI Pro<br />
                                        - Created SAPUI5 web application on SAP HANA Cloud Platform to be used globally by SAP employees<br />
                                        - Developed automation application to evaluate over 50 tests using Selenium WebDriver in Java</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="resume-wrap ftco-animate">
                                    <span className="date">November 2018 - October 2019</span>
                                    <h2>SAP America</h2>
                                    <span className="position">Developer</span>
                                    <p className="mt-4">- Created HTML5 Canvas web application using .NET Framework in HTML, CSS, and JavaScript<br />
                                        - Developed PowerApps application to deprecate legacy systems and automate the QA workflows for requesters and administrative users<br />
                                        - Integrated SharePoint Online, Microsoft Flow, Office 365 Users and Groups into the PowerApps application</p>
                                </div>
                                <div className="resume-wrap ftco-animate">
                                    <span className="date">April 2017 - September 2017</span>
                                    <h2>Dell Boomi</h2>
                                    <span className="position">Developer, QA Engineer</span>
                                    <p className="mt-4">- Improved UI and UX of web application for the integration cloud on the iPaaS platform<br />
                                        - Deprecated usages of old functionalities and converted to new functionalities in API Management<br />
                                        - Developed test plan specifications and test cases and implemented testing procedures using Selenium<br />
                                        - Utilized Robot Framework to automate acceptance testing and acceptance test-driven development</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-md-6 text-center ftco-animate">
                                <p><a href="https://drive.google.com/file/d/1PJiZhytXct5KIY4tsGBs_xVL64h9ulLP/view?usp=sharing" className="btn btn-primary py-4 px-5">Download CV</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}