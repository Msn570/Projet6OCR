import React from 'react';
import logo from "../../images/logo_footer.webp";

export default function Footer() {
	return (
		<footer className="Footer-Container">
			<img src={logo} alt="Kasa Logo" />
			<p className="Footer-Container__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}