import React from 'react';
import logo from "../../images/Error.webp";
import { Link } from "react-router-dom";

export default function Error404() {
	return (
		<div className="Error">
			<img src={logo} alt="Erreur 404" />
			<p className="Error_text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/">
                Retourner sur la page d’accueil
            </Link>
		</div>
	);
}