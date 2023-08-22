import React from "react";
import vector from "../../images/VectorBas.webp";
import  { useState } from "react";

export default function  Carrousel({ slides }) {

    const [slide, setSlide] = useState(0);
    const length = slides.length;
    const next = () => {
		setSlide(slide === length - 1 ? 0 : slide + 1); 
	};
	const prev = () => {
		setSlide(slide === 0 ? length - 1 : slide - 1); 
	};

    return (
        <section id="carrousel-container">
            {length > 1 && (
				<img
					src={vector} 
					alt="Gauche"
					onClick={prev}
					className="leftArrow"
				/>
			)}
			{length > 1 && (
				<img
					src={vector}
					alt="Droite"
					onClick={next}
					className="rightArrow"
				/>
			)}

            {slides.map((image, idx) => (
                <div
                key={idx} 
                className={
                    slide === idx
                        ? "slider anim "
                        : "slider"
                }
            >
                {idx === slide && <img src={image} alt="appartement à louer" />}
                {idx === slide && (
                    <span className="slider__number">
                        {slide + 1}/{length}
                    </span>
                )}
            </div>
        ))}
        </section>
    );

}