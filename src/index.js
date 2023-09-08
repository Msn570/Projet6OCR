import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //créer une racine pour afficher les composants React dans un nœud DOM de navigateur.
root.render(
  <BrowserRouter>
    <App /> 
  </BrowserRouter>
);
