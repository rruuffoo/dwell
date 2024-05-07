import React, { Component } from 'react';
import "./Contact.css";
import Header from './Header';
import Footer from './Footer';
import WorldMap from './WorldMap';
import ScrollButton from './Scrollupbutton';

export default class Contact extends Component {
    render() {
        return (
            <>
                <Header cvetContact={"rgb(255, 116, 116)"}/>
                <div className="contact-header">
                    <div className="news-uptade-overlay"></div>
                    <div className="update-news-text">
                        <p className="header-of-news">BE IN TOUCH</p>
                        <p className="title-of-news">Contact</p>
                    </div>
                </div>
                <div className='white-part-contact'>
                        <div className='our-office'>Our Office</div>
                        <div className='adresses'>
                            <p className='first-address-line'>500 Terry Francine Street</p>
                            <p className='second-address-line'>San Francisco, CA 94158</p>
                        </div>
                        <div className='adresses'>
                            <p className='first-address-line'>Tel: 123-456-7890</p>
                            <p className='second-address-line'>Fax: 123-456-7890</p>
                        </div>
                        <div className='mail-in-contact'>info@mysite.com</div>
                    </div>
                    <WorldMap/>
                    <div className='white-part2'>
                        <p className='get-in-touch'>GET IN TOUCH</p>
                        <p className='text-under-get-in-touch'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                    </div>
                    <ScrollButton/>
                <Footer />
            </>
        )
    }
}