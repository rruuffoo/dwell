import React, { Component } from 'react';
import "./BlocksForSale.css";
import TerryStreet from "./assets/TerryStreet.webp";
import ColumbusAvenue from "./assets/ColumbusAvenue.webp";
import SpringStreet from "./assets/SpringStreet.webp";
import MulberryStreet from "./assets/MulberryStreet.webp";
import OneBlockForRent from './OneBlockForRent';

export default class BlocksForRent extends Component {
    state = {
        HomeForSales: [
            {
                photo: TerryStreet,
                title: '11251 Terry Street',
                subtitle: 'San Francisco, CA, USA',
                price: '$1,500',
                beds: 4,
                baths: 2,
                levels: 3,
                sqft: 1234
            },
            {
                photo: ColumbusAvenue,
                title: '22043 Columbus Avenue',
                subtitle: 'San Francisco, CA, USA',
                price: '$1,200',
                beds: 4,
                baths: 2,
                levels: 2,
                sqft: 1234
            },
            {
                photo: MulberryStreet,
                title: '15878 Mulberry Street',
                subtitle: 'San Francisco, CA, USA',
                price: '$1,800',
                beds: 4,
                baths: 2,
                levels: 2,
                sqft: 1234
            },
            {
                photo: SpringStreet,
                title: '16698 Spring Street',
                subtitle: 'San Francisco, CA, USA',
                price: '$2,200',
                beds: 4,
                baths: 2,
                levels: 3,
                sqft: 1234
            },
            {
                photo: ColumbusAvenue,
                title: '22043 Columbus Avenue',
                subtitle: 'San Francisco, CA, USA',
                price: '$1,200',
                beds: 4,
                baths: 2,
                levels: 2,
                sqft: 1234
            },
            {
                photo: TerryStreet,
                title: '11251 Terry Street',
                subtitle: 'San Francisco, CA, USA',
                price: '$1,500',
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
                    <p className='text-for-sale'>For Rent</p>
            <div className='new-properties-for-rent'>
                {this.state.HomeForSales.map((item, index) => (
                    <OneBlockForRent key={index} photo={item.photo} title={item.title} subtitle={item.subtitle}
                        price={item.price} beds={item.beds} baths={item.baths} levels={item.levels} sqft={item.sqft} />
                )
                )}
            </div>
            <button className='view-more-red-button-rent'>View More</button>
            </div>
            </>
        )
    }
}