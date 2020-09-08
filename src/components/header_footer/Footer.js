import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">
                    The Hall
                </div>
                <div className="footer_copyright">
                    Created by Marek Mojzis. 2020
                </div>
            </Fade>
        </footer>
    )
}

export default Footer
