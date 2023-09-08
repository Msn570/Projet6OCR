import React from "react";
import vector from "../../images/VectorBas.webp";
import  { useState } from "react";

export default function  Carrousel({ slides }) {

    const [slide, setSlide] = useState(0); // defini index a 0
    const length = slides.length;  // longueur du tableu en fonction des slides 
    const next = () => {
		setSlide(slide === length - 1 ? 0 : slide + 1);  //loop pour revenir au premier slide quand on arrive au dernier
	};
	const prev = () => {
		setSlide(slide === 0 ? length - 1 : slide - 1);  // inversement
	};

    return (
        <section id="carrousel-container">
            {length > 1 && ( // affichage des fleches si length>1
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
                key={idx}  //affichage du slides en si l'index correspond
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