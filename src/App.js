import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';
import News from "./News";
import Team from "./Team";
import Contact from "./Contact";
import DetailedHouse from './DetailedHouse';
import { Route, Routes,} from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/team' element={<Team/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/detailedhouse' element={<DetailedHouse/>}/>
        </Routes>
    )
  }
}

