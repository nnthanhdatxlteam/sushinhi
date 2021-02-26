import React, {Component} from 'react';
import {Image, CloudinaryContext} from 'cloudinary-react';


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {windowWidth: window.innerWidth};
    }

    handleResize = (e) => {
        this.setState({windowWidth: window.innerWidth});
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    render() {

        const { windowWidth } = this.state;

        return (
            <div className="home-page text-center">
                <CloudinaryContext cloudName="nnthanhdat97">
                {[...Array(31)].map((item, key) => key !== 0 &&

                    <Image key={key}
                           publicId={`sushinhi-menu/${key}`}
                           loading="lazy"
                           dpr="auto"
                           responsive
                           width={windowWidth}
                           crop="scale"
                           responsiveUseBreakpoints="true"
                    />)}
                </CloudinaryContext>
            </div>
        )
    }
}


/*
 */