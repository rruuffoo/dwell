import React, { Component } from 'react';
import "./MainPage.css";

export default class MainPage extends Component {
    render() {
        return (
            <>
                <div className='first-home-photo'>
                    <div className='overlay'></div>
                    <div className='texts-first-home-photo'>
                        <p className='text-first-home-photo'>New Properties</p>
                        <p className='exclusive'>EXCLUSIVELY BY DWELL</p>
                        <button className='button-first-home-photo'>Explore</button>
                    </div>
                </div>
                
                <div className='choose-buy-or-rent'>
                    <p className='above-choose-buy-or-rent'>WHAT ARE YOU LOOKING FOR?</p>
                    <div className='two-blocks-divide-50'>
                        <div className='buy-choose'>
                            <div className='buy-choose-overlay'></div>
                            <p className='text-buy-in-choose'>Buy</p>
                        </div>
                        <div className='rent-choose'>
                        <div className='rent-choose-overlay'></div>
                            <p className='text-rent-in-choose'>Rent</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}