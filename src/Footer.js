import React, { Component } from 'react';
import "./Footer.css";
import DwellLogo from "./assets/logo-of-header.svg";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";
import youtube from "./assets/youtube.png";
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className='footer-part-one'>
                    <div className='left-side-of-footer-part-one'>
                        <p className='text-near-contact-us'>FIND YOUR NEXT HOME </p>
                        <p className='under-find-text'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </p>
                    </div>
                    <div className='right-side-of-footer-part-one'>
                        <p className='text-near-contact-us'>CONTACT US</p>
                        <form>
                            <div className='first-last-name'>
                                <label className='firt-name-label'>
                                    First Name
                                    <input className='enter-name' />
                                </label>
                                <label className='last-name-label'>
                                    Last Name
                                    <input className='enter-surname' />
                                </label>
                            </div>
                            <label className='email-label'>
                                Email
                                <input className='enter-email' type='email' />
                            </label>
                            <label className='checkbox-label'>
                                Interested in:
                                <div className='viborka'>
                                    <div className='qalocka-and-name'>
                                        <input type='checkbox' className='round-checkbox' />
                                        <p className='near-checkbox'>Buy</p>
                                    </div>
                                    <div className='qalocka-and-name'>
                                        <input type='checkbox' className='round-checkbox' />
                                        <p className='near-checkbox'>Rent</p>
                                    </div>
                                    <div className='qalocka-and-name'>
                                        <input type='checkbox' className='round-checkbox' />
                                        <p className='near-checkbox'>Other</p>
                                    </div>
                                </div>
                            </label>
                            <div className='message-part'>
                                <label className='message-area'>
                                    Message
                                    <textarea />
                                </label>
                                <button className='send-form' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='footer-part-two'>
                    <div className='logo-of-footer'>
                        <img className='logo-of-header-photo' alt='' src={DwellLogo} />
                        <p className='dwell-text-footer'>DWELL</p>
                        <p className='near-dwell-text-footer'>PROPERTIES</p>
                    </div>
                    <div className='right-side-of-footer-part-two'>
                        <div className='pages-in-footer'>
                            <p className='page-in-footer'><Link to="/" className='page-in-footer'>Home</Link></p>
                            <p className='page-in-footer'><Link to="/news" className='page-in-footer'>News</Link></p>
                            <p className='page-in-footer'><Link to="/team" className='page-in-footer'>Team</Link></p>
                            <p className='page-in-footer1'><Link to="/contact" className='page-in-footer'>Contact</Link></p>
                        </div>
                        <div className='address-email-social-footer'>
                            <p className='address-email-footer'>500 Terry Francine Street <br /> San Francisco, CA 94158
                                <br /> info@mysite.com
                            </p>
                            <div className='social-media-footer'>
                                <img className='social-media-photo' alt='' src={facebook} />
                                <img className='social-media-photo' alt='' src={twitter} />
                                <img className='social-media-photo' alt='' src={linkedin} />
                                <img className='social-media-photo' alt='' src={youtube} />
                            </div>
                        </div>
                        <div className='logo-of-footer-mobile'>
                        <img className='logo-of-header-photo' alt='' src={DwellLogo} />
                        <p className='dwell-text-footer'>DWELL</p>
                        <p className='near-dwell-text-footer'>PROPERTIES</p>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}