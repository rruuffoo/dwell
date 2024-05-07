import React, { Component } from 'react';
import "./OneBlockForSale.css";
import BedsLogo from "./assets/beds.svg";
import BathsLogo from "./assets/baths.svg";
import LevelsLogo from "./assets/levels.svg";
import SqftLogo from "./assets/sqft.svg";
import { Link } from 'react-router-dom';


export default class OneBlockForSale extends Component {
    render() {
        let { photo, title, subtitle, price, beds, baths, levels, sqft } = this.props;
        return (
            <div className='one-of-saleblock'>
                <div className='photo-of-saleblock' style={{ backgroundImage: `url(${photo})` }}>
                    <div className='red-text-inside-photo-saleblock'>BUY</div>
                </div>
                <div className='div-under-photo-of-sale-home'>
                    <div className='title-subtitle-price-saleblock'>
                        <p className='buy-title'><Link className='buy-title' to="/detailedhouse">{title}</Link></p>
                        <p className='buy-subtitle'>{subtitle}</p>
                        <p className='buy-price'>{price}</p>
                    </div>

                    <div className='data-sale-houses'>
                        <div className='number-of-beds'>
                            <img className='logo-above-number' alt='' src={BedsLogo}></img>
                            <p className='text-under-logo'>Beds</p>
                            <p className='buy-beds'>{beds}</p>
                        </div>
                        <div className='number-of-beds'>
                            <img className='logo-above-number' alt='' src={BathsLogo}></img>
                            <p className='text-under-logo'>Baths</p>
                            <p className='buy-beds'>{baths}</p>
                        </div>
                        <div className='number-of-beds'>
                            <img className='logo-above-number' alt='' src={LevelsLogo}></img>
                            <p className='text-under-logo'>Levels</p>
                            <p className='buy-beds'>{levels}</p>
                        </div>
                        <div className='number-of-beds'>
                            <img className='logo-above-number' alt='' src={SqftLogo}></img>
                            <p className='text-under-logo'>Sqft</p>
                            <p className='buy-beds'>{sqft}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}