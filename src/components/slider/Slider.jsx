import React, { useState } from 'react';
import './slider.scss';

function Slider({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === pictures.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section className="carousel">
            <button className="carousel__button carousel__button--left" onClick={goToPrevious}>
                <i className="fa-solid fa-chevron-left"></i>
                
            </button>
            <div className="carousel__slide">
                <img src={pictures[currentIndex]} alt="Présentaion en photos" />
            </div>
            <button className="carousel__button carousel__button--right" onClick={goToNext}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
            <div className="carousel__indicator">
                {currentIndex + 1}/{pictures.length}
            </div>
        </section>
    );
}

export default Slider;



// function Slider({ pictures }) {
//     return (
//         <section className="slider">
//             {pictures && pictures.map((picture, index) => (
//                 // <img key={index} src={picture} alt={`Rental image ${index + 1}`} />
//                 <img key={index} src={picture} alt="présentation en photo" />
//             ))}
//         </section>
//     );
// }

// export default Slider;