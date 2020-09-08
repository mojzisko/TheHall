import React, { Component } from 'react';
import MyButton from '../utilities/MyButton';
import Zoom from 'react-reveal/Zoom';

export default class Pricing extends Component {


    state = {
        prices:[100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        desc: ['Vivamus porttitor turpis ac leo. Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Integer malesuada.',
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
                'Etiam commodo dui eget wisi.'         
        ],
        linkto: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
        delay: [500, 0, 500]    
    }

    showBoxes = () => (
        
        this.state.prices.map((box, i) => (
            <Zoom key={i} delay={this.state.delay[i]}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>

                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>

                        <div className="pricing_buttons">
                            <MyButton 
                                text="purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )


    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>

                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>

                </div>
            </div>
        )
    }
}
