import { Component } from "react";
import "./Team.css";
import Header from "./Header";
import Footer from "./Footer";
import GregoryJems from "./assets/gregory-jems.webp";
import GerryGrossman from "./assets/gerry-grossman.webp";
import BritneyBails from "./assets/britney-bails.webp";
import DonWhite from "./assets/don-white.webp";
import BrendaRogers from "./assets/brenda-rogers.webp";
import MikeHelman from "./assets/mike-helman.webp";
import ScrollButton from "./Scrollupbutton";

export default class Team extends Component {
    state = {
        TeamBlocks: [
            {
                name: 'Gregory Jems',
                realtorPhoto: GregoryJems
            },
            {
                name: 'Britney Bails',
                realtorPhoto: BritneyBails
            },
            {
                name: 'Gerry Grossman',
                realtorPhoto: GerryGrossman
            },
            {
                name: 'Don White',
                realtor: 'Realtor # 123.456.78',
                realtorPhoto: DonWhite
            },
            {
                name: 'Brenda Rogers',
                realtor: 'Realtor # 123.456.78',
                realtorPhoto: BrendaRogers
            },
            {
                name: 'Mike Helman',
                realtor: 'Realtor # 123.456.78',
                realtorPhoto: MikeHelman
            }
        ]
    }
    render() {
        return (
            <>
                <Header cvetAgent={"rgb(255, 116, 116)"} />
                <div className="agents-header">
                    <div className="news-uptade-overlay"></div>
                    <div className="update-news-text">
                        <p className="header-of-news">OUR TEAM</p>
                        <p className="title-of-news">Agents</p>
                    </div>
                </div>
                <div className="agents-part">
                    <div className="agents-blocks">
                        {this.state.TeamBlocks.map((item, index) => (
                            <div className="one-block-agent">
                                <div className="inside-one-block-agent">
                                    <p className="agent-name">{item.name}</p>
                                    <p className="realtor-id">Realtor # 123.456.78</p>
                                    <img alt="" src={item.realtorPhoto} className="realtor-photo"></img>
                                    <p className="realtor-email">Email</p>
                                    <p className="email-link">info@mysite.com</p>
                                    <p className="realtor-phone">Phone</p>
                                    <div className="phone-num-linkedin">
                                        <p className="realtor-phone-number">123-456-7890</p>
                                        <p className="realtor-linkedin">LinkedIn</p>
                                    </div>
                                </div>
                            </div>
                        )
                        )}
                    </div>
                </div>
                <ScrollButton />
                <Footer />
            </>
        )
    }
}