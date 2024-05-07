import React, { Component } from 'react';
import "./BlocksForSale.css";
import BanksStreet from "./assets/BanksStreet.webp";
import UnionBoulevard from "./assets/UnionBoulevard.webp";
import PerryStreet from "./assets/PerryStreet.webp";
import WashingtonAvenue from "./assets/WashingtonAvenue.webp";
import OneBlockForSale from './OneBlockForSale';

export default class BlocksForSale extends Component {
    state = {
        HomeForSales: [
            {
                photo: PerryStreet,
                title: '17081 Perry Street',
                subtitle: 'San Francisco, CA, USA',
                price: '$850,000',
                beds: 4,
                baths: 2,
                levels: 3,
                sqft: 1234
            },
            {
                photo: UnionBoulevard,
                title: '52591 Union Boulevard',
                subtitle: 'San Francisco, CA, USA',
                price: '$580,000',
                beds: 4,
                baths: 2,
                levels: 3,
                sqft: 1234
            },
            {
                photo: WashingtonAvenue,
                title: '33234 Washington Avenue',
                subtitle: 'San Francisco, CA, USA',
                price: '$770,000',
                beds: 4,
                baths: 2,
                levels: 2,
                sqft: 1234
            },
            {
                photo: BanksStreet,
                title: '15066 Banks Street',
                subtitle: 'San Francisco, CA, USA',
                price: '$700,000',
                beds: 4,
                baths: 2,
                levels: 3,
                sqft: 1234
            },
            {
                photo: UnionBoulevard,
                title: '52591 Union Boulevard',
                subtitle: 'San Francisco, CA, USA',
                price: '$580,000',
                beds: 4,
                baths: 2,
                levels: 3,
                sqft: 1234
            },
            {
                photo: PerryStreet,
                title: '17081 Perry Street',
                subtitle: 'San Francisco, CA, USA',
                price: '$850,000',
                beds: 4,
                baths: 2,
                levels: 3,
                sqft: 1234
            }
        ]
    }
    render() {
        return (
            <>
            <div className='for-sale-part-in-main'>
                    <p className='new-properties'>NEW PROPERTIES</p>
                    <p className='text-for-sale'>For Sale</p>
            <div className='new-properties-for-sale'>
                {this.state.HomeForSales.map((item, index) => (
                    <OneBlockForSale key={index} photo={item.photo} title={item.title} subtitle={item.subtitle}
                        price={item.price} beds={item.beds} baths={item.baths} levels={item.levels} sqft={item.sqft} />
                )
                )}
            </div>
            <button className='view-more-red-button'>View More</button>
            <div className='gray-line-under-for-sale-part-in-main'></div>
            </div>
            </>
        )
    }
}