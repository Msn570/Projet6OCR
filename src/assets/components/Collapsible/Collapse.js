import React, { useState, useRef, useEffect } from "react";
import Vector from "../../images/VectorBas.webp";

export default function Collapse(props) {
	const [Active, setActive] = useState(false); 
	const [heightEl, setHeightEl] = useState(); 

	const ActiveState = () => {
		setActive(!Active);
	};

	const refHeight = useRef(); 
	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`);
		}, []);

	return (
		
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