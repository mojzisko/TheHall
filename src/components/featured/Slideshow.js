//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import Slide from "./Slide";


//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "fullW fullH rel overflowH",
    onScreen: "left0",
    offScreenRight: "left100vw",
    offScreenLeft: "leftM100vw",
    transition: "transition1l"
};

//===========================================
// SLIDESHOW COMPONENT
//===========================================
class Slideshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slide_one: {
                id: 0,
                position: s.onScreen,
                transition: true
            },
            slide_two: {
                id: 1,
                position: s.offScreenRight,
                transition: true
            },
            currentId: 0
        };
    }

    componentDidMount() {
        this.startCarousel();
    }

    componentWillUnmount() {
        clearInterval(this.carouselInterval);
    }

    startCarousel = () => {
        this.carouselInterval = setInterval(() => {
            this.transitionSlides();
        }, 4000);
    };

    setSlideState = (slide_one, slide_two, currentId) => {
        this.setState({
            slide_one: slide_one,
            slide_two: slide_two,
            currentId: currentId
        });
    };

    transitionSlides = () => {
        const { slide_one, slide_two } = this.state;
        let currentId;
        if (slide_one["position"] === s.onScreen) {
            slide_one["position"] = s.offScreenLeft;
            slide_two["position"] = s.onScreen;
            currentId = slide_two.id;
        } else {
            slide_one["position"] = s.onScreen;
            slide_two["position"] = s.offScreenLeft;
            currentId = slide_one.id;
        }
        this.setSlideState(slide_one, slide_two, currentId);
        setTimeout(() => {
            this.resetSlideOffScreen();
        }, 1000);
    };

    resetSlideOffScreen = () => {
        const { slide_one, slide_two, currentId } = this.state;
        const { slides } = this.props;
        if (slide_one["position"] === s.offScreenLeft) {
            slide_one["transition"] = false;
            slide_one["position"] = s.offScreenRight;
            slide_one["id"] = slide_two.id + 1 === slides.length ? 0 : slide_two.id + 1;
        } else {
            slide_two["transition"] = false;
            slide_two["position"] = s.offScreenRight;
            slide_two["id"] = slide_one.id + 1 === slides.length ? 0 : slide_one.id + 1;
        }
        this.setSlideState(slide_one, slide_two, currentId);
        this.resetSlideTransitions(slide_one, slide_two, currentId);
    };

    resetSlideTransitions = (slide_one, slide_two, currentId) => {
        setTimeout(() => {
            slide_one["transition"] = true;
            slide_two["transition"] = true;
            this.setSlideState(slide_one, slide_two, currentId);
        }, 500);
    };

    render() {
        const { slide_one, slide_two, currentId } = this.state;
        const { slides } = this.props;
        return (
            <div className={s.container}>
                <Slide
                    image={slides[slide_one.id]}
                    position={slide_one.position}
                    transition={slide_one.transition ? s.transition : ""}
                />
                <Slide
                    image={slides[slide_two.id]}
                    position={slide_two.position}
                    transition={slide_two.transition ? s.transition : ""}
                />
                
            </div>
        );
    }
}

export default Slideshow;