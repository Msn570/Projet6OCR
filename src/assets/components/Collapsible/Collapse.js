import React, { useState, useRef, useEffect } from "react";
import Vector from "../../images/VectorBas.webp";

export default function Collapse(props) {
	const [Active, setActive] = useState(false);   // je definis le state du active (et false par défaut)
	const [heightEl, setHeightEl] = useState(); 	// je definis le state de la hauteur du collapse

	const ActiveState = () => {
		setActive(!Active); //je définis la fonction ActiveState qui modifie la valeur active au clic
	};

	const refHeight = useRef();  //récupère et conserve la valeur de hauteur du collapse déplié
	useEffect(() => {//useEffect s'éxécute au montage du composant,il définit la hauteur du collapse déplié lors de sa première ouverture et la conserve
		setHeightEl(`${refHeight.current.scrollHeight}px`); 
		}, []);

	return (
		// affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
		<div className={`collapse ${props.aboutStyle}`}>
			<div onClick={ActiveState} className="collapse__visible">
				<h2>{props.aboutTitle}</h2>
				<img
					className={Active ? "vector rotated" : "vector"}
					src={Vector}
					alt="vector"
				/>
			</div>
			<div
				ref={refHeight}
				className={Active ? "collapse__active animated" : "collapse__active"}
				style={{ height: Active ? `${heightEl}` : "0px" }}
			>
				<p aria-hidden={Active ? "true" : "false"}>{props.aboutText}</p>
			</div>
		</div>
	);
}