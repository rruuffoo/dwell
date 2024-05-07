import React, { Component } from 'react';
import './DetailedHouse.css';
import Header from './Header';
import Footer from './Footer';
import DetailedHousePhoto from "./assets/detailedhouse.webp";
import BedsLogo from "./assets/beds.svg";
import BathsLogo from "./assets/baths.svg";
import LevelsLogo from "./assets/levels.svg";
import SqftLogo from "./assets/sqft.svg";
import BuiltYear from "./assets/builtyear.svg";
import addressLogo from "./assets/addresslogo.svg";
import BrendaRogers from "./assets/brenda-rogers.webp";

export default class DetailedHouse extends Component {
    render() {
        return (
            <>
                <Header />
                <div className='detailed-house-info'>
                    <div className='detailed-house-info-for-centre'>
                        <div className='street-price-buy'>
                            <div className='street-price'>
                                <p className='street'>17081 Perry Street</p>
                                <p className='price-under-street'>$850,000</p>
                            </div>
                            <p className='buy-text'>BUY</p>
                        </div>
                        <img className='big-house-photo' alt='' src={DetailedHousePhoto}></img>
                        <div className='div-under-big-house-photo'>
                            <div className='property-desc-div'>
                                <p className='property-desc'>Property Description</p>
                                <p className='text-under-property-desc'>This item is connected to a text field in your
                                    content collection.Double click what you want to edit and then select "Change Content" to add
                                    your own content to the collection. Want to view and manage all your collections?
                                    Click the Content Manager icon on the add panel to your left. In the Content Manager,
                                    you can update items, add new fields, create dynamic pages and more.</p>
                                <div className='bed-bath-sqft'>
                                    <div className='bed'>
                                        <img src={BedsLogo} alt='' className='bed-logo' />
                                        <p className='bedrooms'>Bedrooms</p>
                                        <p className='number-of-bedrooms'>4</p>
                                    </div>
                                    <div className='bed'>
                                        <img src={BathsLogo} alt='' className='bed-logo' />
                                        <p className='bedrooms'>Bathrooms</p>
                                        <p className='number-of-bedrooms'>2</p>
                                    </div>
                                    <div className='bed-last'>
                                        <img src={SqftLogo} alt='' className='bed-logo' />
                                        <p className='bedrooms'>Sqft</p>
                                        <p className='number-of-bedrooms'>1234</p>
                                    </div>
                                </div>
                                <div className='lev-built-main'>
                                    <div className='bed-first'>
                                        <img src={LevelsLogo} alt='' className='bed-logo' />
                                        <p className='bedrooms'>Levels</p>
                                        <p className='number-of-bedrooms'>3</p>
                                    </div>
                                    <div className='bed-second'>
                                        <img src={BuiltYear} alt='' className='bed-logo' />
                                        <p className='bedrooms'>Built Year</p>
                                        <p className='number-of-bedrooms'>2035</p>
                                    </div>
                                    <div className='bed-last'>
                                        <img src={addressLogo} alt='' className='bed-logo' />
                                        <p className='bedrooms'>Main Location</p>
                                        <p className='number-of-bedrooms'>San Francisco, CA, USA</p>
                                    </div>
                                </div>
                            </div>
                            <div className="one-block-agent-detailed">
                                <div className="inside-one-block-agent">
                                    <p className="agent-name">Brenda Rogers</p>
                                    <p className="realtor-id-detailed">Realtor # 123.456.78</p>
                                    <img alt="" src={BrendaRogers} className="realtor-photo"></img>
                                    <p className="realtor-email">Email</p>
                                    <p className="email-link">info@mysite.com</p>
                                    <p className="realtor-phone">Phone</p>
                                    <div className="phone-num-linkedin">
                                        <p className="realtor-phone-number">123-456-7890</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='contact-with-agent'>
                            <p className='contact-agent'>Contact Agent</p>
                            <div className='first-last-phone-inputs'>
                                <input className='detailed-house-input' placeholder='First Name' required/>
                                <input className='detailed-house-input' placeholder='Last Name' />
                                <input className='detailed-house-input' placeholder='Phone' type='tel' />
                            </div>
                            <div className='email-button-div'>
                                <input className='email-input' placeholder='Email' type='email' required/>
                                <p className='detailed-button'>Submit</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
