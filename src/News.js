import { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./News.css";
import BigWindow from "./assets/big-window.webp";
import BrownPen from "./assets/brown-pen.webp";
import BrownRoof from "./assets/brown-roof.webp";
import Builder from "./assets/builder.webp";
import HouseWithGrayRoof from "./assets/house-with-gray-roof.webp";
import PersonWithLaptop from "./assets/person-with-laptop.webp";
import ScrollButton from "./Scrollupbutton";

export default class News extends Component {
    
    state = {
        NewsBlocks: [
            {
                date: 'Nov 1, 2035',
                textUnderDate: 'Choosing Your Next Apartment',
                by: "By Mike Helman",
                photo: BigWindow,
                firstText: "This item is connected to a text field in your content collection. Double click what you want to edit and then select 'Change Content' to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.",
                secondText: "Your content collection is already set up with fields and content. Add your own by editing each field, or import CSV files to your content collection. You can create fields for rich content, images, videos and more.",
                redText: "Read More"
            },
            {
                date: 'Oct 1, 2035',
                textUnderDate: '10 Tips for Students to Pay Rent',
                by: "By Gregory Jems",
                photo: PersonWithLaptop,
                firstText: "This item is connected to a text field in your content collection. Double click what you want to edit and then select 'Change Content' to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.",
                secondText: "Your content collection is already set up with fields and content. Add your own by editing each field, or import CSV files to your content collection. You can create fields for rich content, images, videos and more.",
                redText: "Read More"
            },
            {
                date: 'Sep 1, 2035',
                textUnderDate: 'Find Your Next Vacation House',
                by: "By Gerry Grossman",
                photo: HouseWithGrayRoof,
                firstText: "This item is connected to a text field in your content collection. Double click what you want to edit and then select 'Change Content' to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.",
                secondText: "Your content collection is already set up with fields and content. Add your own by editing each field, or import CSV files to your content collection. You can create fields for rich content, images, videos and more.",
                redText: "Read More"
            },
            {
                date: 'Aug 1, 2035',
                textUnderDate: '5 Things to Keep in Mind When Buying a New Home',
                by: "By Don White",
                photo: BrownRoof,
                firstText: "This item is connected to a text field in your content collection. Double click what you want to edit and then select 'Change Content' to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.",
                secondText: "Your content collection is already set up with fields and content. Add your own by editing each field, or import CSV files to your content collection. You can create fields for rich content, images, videos and more.",
                redText: "Read More"
            },
            {
                date: 'Jul 1, 2035',
                textUnderDate: 'Baily’s Project Raises $40M',
                by: "By Britney Bails",
                photo: Builder,
                firstText: "This item is connected to a text field in your content collection. Double click what you want to edit and then select 'Change Content' to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.",
                secondText: "Your content collection is already set up with fields and content. Add your own by editing each field, or import CSV files to your content collection. You can create fields for rich content, images, videos and more.",
                redText: "Read More"
            },
            {
                date: 'Jun 1, 2035',
                textUnderDate: 'USA’s New Construction Law',
                by: "By Brenda Rogers",
                photo: BrownPen,
                firstText: "This item is connected to a text field in your content collection. Double click what you want to edit and then select 'Change Content' to add your own content to the collection. Want to view and manage all your collections? Click the Content Manager icon on the add panel to your left. In the Content Manager, you can update items, add new fields, create dynamic pages and more.",
                secondText: "Your content collection is already set up with fields and content. Add your own by editing each field, or import CSV files to your content collection. You can create fields for rich content, images, videos and more.",
                redText: "Read More"
            }
        ]
    }
    render() {
        return (
            <>
                <Header cvet={"rgb(255, 116, 116)"}/>
                <div className="news-header">
                    <div className="news-uptade-overlay"></div>
                    <div className="update-news-text">
                        <p className="header-of-news">OUR UPDATES</p>
                        <p className="title-of-news">NEWS</p>
                    </div>
                </div>
                <div className='news-part'>
                    <div className="news-blocks">
                        {this.state.NewsBlocks.map((item, index) => (
                            <div className="one-block-news">
                                <div className="inside-one-block-news">
                                    <p className="date-of-show">{item.date}</p>
                                    <p className="text-under-date">{item.textUnderDate}</p>
                                    <p className="by">{item.by}</p>
                                    <img className="news-photo" alt="" src={item.photo} />
                                    <p className="first-text-under-photo">{item.firstText}</p>
                                    <p className="second-text-under-photo">{item.secondText}</p>
                                    <p className="red-text-under-second-text">{item.redText}</p>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
                <ScrollButton/>
                <Footer />
            </>
        )
    }
}