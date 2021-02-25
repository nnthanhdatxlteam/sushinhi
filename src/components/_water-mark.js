import EnhancerWaterMark from 'watermark-enhancer'
import HomePage from "./_home-page";

export default EnhancerWaterMark({
    width: '100',
    height: '80',
    rotate: '17',
    content: 'Sushi-Nhi',
}, {
    content: 'watermark loading...',
    color: 'black',
    background: 'white'
})(HomePage)