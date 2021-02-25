import React, {Component} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';


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
                {[...Array(31)].map((item, key) => key !== 0 &&

                    <LazyLoadImage key={key} src={`${process.env.PUBLIC_URL}/assets/images/${key}.png`}
                                   effect="blur" alt="Responsive image" width={windowWidth}/>)}
            </div>
        )
    }
}


/*
 */