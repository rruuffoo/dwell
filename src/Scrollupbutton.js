import React, { Component } from 'react';
import "./Scrollupbutton.css";
import ScrollUpPhoto from "./assets/next.png";

export default class ScrollButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isVisible: false
      };
    }
  
    componentDidMount() {
      window.addEventListener('scroll', this.toggleVisibility);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.toggleVisibility);
    }
  
    // Функция для проверки позиции прокрутки
    toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        this.setState({ isVisible: true });
      } else {
        this.setState({ isVisible: false });
      }
    };
  
    // Функция для прокрутки страницы вверх
    scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
    render() {
      const { isVisible } = this.state;
      return (
          <div className="scroll-to-top">
            {isVisible && (
              <img className='scrollup' alt='' src={ScrollUpPhoto} onClick={this.scrollToTop} title="Наверх"/>
            )}
          </div>  
      )
    }
  }