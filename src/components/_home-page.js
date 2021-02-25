import React, {Component} from 'react';

export default class HomePage extends Component {
    render() {

        return (
            <div className="home-page text-center">
                {[...Array(31)].map((item, key) => key !== 0 && <img key={key} src={`${process.env.PUBLIC_URL}/assets/images/${key}.png`}
                                                        className="img-fluid menu-item" alt="Responsive image"/>)}
            </div>
        )
    }
}