import 'react-slideshow-image/dist/styles.css';

import { Fragment } from 'react';

import {
    Fade,
    Slide,
    Zoom,
} from 'react-slideshow-image';

export default function CarouselBD() {
    return <Fragment>
        <div className="flex w-full overflow-hidden"></div>
    </Fragment>
}

/**
 * 
 * @param {[{url:string,caption:string}]} slideImages 
 * @param {{}} spanStyle 
 * @param {{}} divStyle 
 * @returns 
 */
const CarouselSlide = (slideImages, spanStyle, divStyle) => {
    const def_divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
    }
    const def_spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
    }
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle ?? def_divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                            <span style={spanStyle ? spanStyle : def_spanStyle}>{slideImage.caption}</span>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    )
}






/**
 * 
 * @param {[{url:string, caption :string}]} fadeImages 
 * @param {string} classStyles 
 * @returns 
 */
function CarouselFade({ fadeImages, classStyles }) {

    return (
        <div className="slide-container relative">
            <Fade css={{width:'100%'}}>
                {fadeImages.map((fadeImage, index) => (
                    <div key={index}>
                        <img className={classStyles} src={fadeImage.url} />
                        {fadeImage.caption && <h2>{fadeImage.caption}</h2>}
                    </div>
                ))}
            </Fade>
        </div>
    )
}



const CarouselZoom = (images, scale, classStyles) => {
    return (
        <div className="slide-container">
            <Zoom scale={scale}>
                {
                    images.map((each, index) => <img key={index} className={classStyles} src={each} />)
                }
            </Zoom>
        </div>
    )
}

export { CarouselFade, CarouselSlide, CarouselZoom };