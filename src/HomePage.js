import React, { Component } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import BlocksForSale from './BlocksForSale';
import BlocksForRent from "./BlocksForRent";
import MyCarousel from "./MyCarousel";

export default class HomePage extends Component {
    render() {
      return (
        <>
        <Header cvetHome={"rgb(255, 116, 116)"} />
        <MainPage/>
        <BlocksForSale/>
        <BlocksForRent/>
        <MyCarousel/>
        <Footer />
        </>
         
      )
    }
}