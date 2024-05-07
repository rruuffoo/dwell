import React, { Component } from 'react';
import "./Header.css";
import DwellLogo from "./assets/logo-of-header.svg";
import facebook from "./assets/facebook.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";
import youtube from "./assets/youtube.png";
import BurgerMenu from "./assets/burger-bar.png";
import Krest from "./assets/close.png";
import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });

    };
    render() {
        const { isOpen } = this.state;
        return (
            <>
                <div className='header-main'>
                    <div className='left-elements-of-header'>
                        <div className='logo-of-header'>
                            <img className='logo-of-header-photo' alt='' src={DwellLogo} />
                            <p className='dwell-text'>DWELL</p>
                            <p className='near-dwell-text'>PROPERTIES</p>
                        </div>
                        <div className='social-media'>
                            <img className='social-media-photo' alt='' src={facebook} />
                            <img className='social-media-photo' alt='' src={twitter} />
                            <img className='social-media-photo' alt='' src={linkedin} />
                            <img className='social-media-photo' alt='' src={youtube} />
                        </div>
                    </div>
                    <div className='right-elements-of-header'>
                        <p className='pages-in-header'><Link to="/" className='pages-in-header' style={{ color: this.props.cvetHome }}>Home</Link></p>
                        <p className='pages-in-header'><Link to="/news" className='pages-in-header' style={{ color: this.props.cvet }}>News</Link></p>
                        <p className='pages-in-header'><Link to="/team" className='pages-in-header' style={{ color: this.props.cvetAgent }}>Team</Link></p>
                        <p className='pages-in-header'><Link to="/contact" className='pages-in-header' style={{ color: this.props.cvetContact }}>Contact</Link></p>
                    </div>

                    <div className="burger-menu">
                        {!isOpen ? (
                            <img alt='' src={BurgerMenu} onClick={this.toggleMenu} className="burger-menu-photo" />
                        ) : null}
                        {isOpen ? (
                            <div className="menu">
                                <div className='pages-krest'>
                                    <div className='pages-in-burger-menu-div'>
                                        <p className='pages-in-header'><Link to="/" className='pages-in-header' style={{ color: this.props.cvetHome }}>Home</Link></p>
                                        <p className='pages-in-header'><Link to="/news" className='pages-in-header' style={{ color: this.props.cvet }}>News</Link></p>
                                        <p className='pages-in-header'><Link to="/team" className='pages-in-header' style={{ color: this.props.cvetAgent }}>Team</Link></p>
                                        <p className='pages-in-header'><Link to="/contact" className='pages-in-header' style={{ color: this.props.cvetContact }}>Contact</Link></p>
                                    </div>
                                    <img alt='' src={Krest} onClick={this.toggleMenu} className="close-button" />
                                </div>
                                <div className='social-media-burger'>
                                    <img className='social-media-photo-burger' alt='' src={facebook} />
                                    <img className='social-media-photo-burger' alt='' src={twitter} />
                                    <img className='social-media-photo-burger' alt='' src={linkedin} />
                                    <img className='social-media-photo-burger' alt='' src={youtube} />
                                </div>
                            </div>
                        ) : null}
                    </div>

                </div>
            </>
        )
    }
}