import React from 'react'
// import { Link } from 'react-router-dom'
import "./Landing.css"
import JuitLOGO from "../../assets/Logo.png"
import Footer from './Footer'
// import Slideshow from './Slideshow'

function Landing() {
    return (
        <>

            <div className="LandingContainer">
                <div className="HeaderLanding">
                    <div className='LandingLogo'><img id='LandingLogo' src={JuitLOGO} /></div>
                    <div className='LandingHeaderTexts'>
                        <div className='PPHeadingLanding'>
                            <b> Online Dispensary System</b>
                        </div>
                        <div className='JUITHeadingLanding'>
                            Jaypee University Of Information Technology , Solan.
                        </div>
                    </div>
                <div className="LoginPageButtonLanding">Login</div>
                </div>
                {/* <Slideshow/> */}

                <div className='AboutUsSection'>
                    <div className='AboutUsLeft'>
                        <div className='AboutUsLeftHeading HeadingLanding'>
                            <b>About Us</b>
                        </div>
                        <div className='AboutUsLeftContent LandingDownContent'>
                            The JUIT was conceived by a joint vision of the Govt of Himachal Pradesh and the Founder Chairman of Jaypee Group Shri JaiPrakash Gaur in 2000. Land was provided on lease by the State Govt and the university was established by Act No 14 of 2002 vide Extraordinary Gazette Notification of the Govt of Himachal Pradesh dated May 23, 2002. The University Grants Commission accorded its approval under Section 2(f) of the UGC Act vide their Letter No. F 9-10/2002(CPP-1) dated 09 Dec 2002. The JUIT is also a member of the Association of Indian Universities (AIU).
                        </div>
                    </div>
                    {/* <div className='PlacementsRight'>
                        <div className='PlacementsRightHeading HeadingLanding'>
                            <b>Placements</b>
                        </div>
                        <div className='PlacementsRightContent LandingDownContent'>
                            <div className='PlacementsOnCampus'><b>On Campus</b></div>
                            <div className='PlacementsOnCampusdetail1'>Highest Salary – 32 Lacs by Amazon - SDE Profile
                            </div>
                            <div className='PlacementsOnCampusdetail1'>2nd Highest Salary – 31.5 Lacs by Amazon - PAI Profile
                            </div>
                            <div className='PlacementsOnCampusdetail1'>3rd Highest Salary – 29.39 Lacs by Amazon - BIE Profile
                            </div>
                            <div className='PlacementsOnCampus'><b>Off Campus</b></div>
                            <div className='PlacementsOnCampusdetail1'>Highest Salary – 50 Lacs by Microsoft
                            </div>
                            <div className='PlacementsOnCampusdetail1'>2nd Highest Salary – 45 Lacs by Adobe
                            </div>
                        </div>
                    </div> */}
                </div>  
            </div>
            <Footer/>
            {/* <div className="LandingContainer">
                <div className='HeaderLanding'>
                    <div className='LandingLogo'><img id='LandingLogo' src={JuitLOGO} /></div>
                    <div className='LandingHeaderTexts'>
                        <div className='PPHeadingLanding'>
                            <b> Placement Portal</b>
                        </div>
                        <div className='JUITHeadingLanding'>
                            Jaypee University Of Information Technology , Solan.
                        </div>
                    </div>
                    <div className='LoginPageButtonLanding'><Link className='LinkLoginBtn' to='/Login'><b>Login</b></Link></div>
                </div>
                <Slideshow/>
                <div className='AboutUsSection'>
                    <div className='AboutUsLeft'>
                        <div className='AboutUsLeftHeading HeadingLanding'>
                            <b>About Us</b>
                        </div>
                        <div className='AboutUsLeftContent LandingDownContent'>
                            The JUIT was conceived by a joint vision of the Govt of Himachal Pradesh and the Founder Chairman of Jaypee Group Shri JaiPrakash Gaur in 2000. Land was provided on lease by the State Govt and the university was established by Act No 14 of 2002 vide Extraordinary Gazette Notification of the Govt of Himachal Pradesh dated May 23, 2002. The University Grants Commission accorded its approval under Section 2(f) of the UGC Act vide their Letter No. F 9-10/2002(CPP-1) dated 09 Dec 2002. The JUIT is also a member of the Association of Indian Universities (AIU).
                        </div>
                    </div>
                    <div className='PlacementsRight'>
                        <div className='PlacementsRightHeading HeadingLanding'>
                            <b>Placements</b>
                        </div>
                        <div className='PlacementsRightContent LandingDownContent'>
                            <div className='PlacementsOnCampus'><b>On Campus</b></div>
                            <div className='PlacementsOnCampusdetail1'>Highest Salary – 32 Lacs by Amazon - SDE Profile
                            </div>
                            <div className='PlacementsOnCampusdetail1'>2nd Highest Salary – 31.5 Lacs by Amazon - PAI Profile
                            </div>
                            <div className='PlacementsOnCampusdetail1'>3rd Highest Salary – 29.39 Lacs by Amazon - BIE Profile
                            </div>
                            <div className='PlacementsOnCampus'><b>Off Campus</b></div>
                            <div className='PlacementsOnCampusdetail1'>Highest Salary – 50 Lacs by Microsoft
                            </div>
                            <div className='PlacementsOnCampusdetail1'>2nd Highest Salary – 45 Lacs by Adobe
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            <Footer/> */}
        </>
    )
}

export default Landing